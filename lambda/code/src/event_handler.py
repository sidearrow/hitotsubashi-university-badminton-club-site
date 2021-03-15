import boto3
from typing import Optional

from src.auth_handler import AuthHandler
from src.event import Event
from src.response import Response


def get_signed_url(bucket_name: str, object_key: str) -> Optional[str]:
    try:
        client = boto3.client("s3")
        res = client.generate_presigned_url(
            "get_object",
            Params={"Bucket": bucket_name, "Key": object_key},
            ExpiresIn=3600,
        )
        return res
    except Exception:
        return None


class EventHandler:
    def __init__(self, auth: AuthHandler, event: Event) -> None:
        self.__auth = auth
        self.__event = event
        self.__response = Response()

    def exec(self):
        mapping = {
            "/login": self.__login,
            "/check": self.__check,
            "/signed-url": self.__signed_url,
        }
        path = self.__event.path
        if path in mapping:
            mapping[path]()
        else:
            self.__response.set_status_code_not_found()
        return self.__response.to_dict()

    def __login(self):
        password = self.__event.query_params["password"]
        token = self.__auth.create_token(password)
        if token is None:
            self.__response.set_status_code_unauthorized()
        else:
            self.__response.set_body({"token": token})

    def __check(self):
        token = self.__event.query_params["token"]
        result = self.__auth.check_token(token)
        if not result:
            self.__response.set_status_code_unauthorized()

    def __signed_url(self):
        token = self.__event.query_params["token"]
        s3_object_key = self.__event.query_params["target"]
        result = self.__auth.check_token(token)
        if not result:
            self.__response.set_status_code_unauthorized()
            return
        signed_url = get_signed_url(s3_object_key)
        if signed_url is None:
            self.__response.set_status_code_not_found()
        else:
            self.__response.set_body({"signedUrl": signed_url})
