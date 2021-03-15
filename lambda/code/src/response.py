import json


class Response:
    def __init__(self) -> None:
        self.__status_code = 200
        self.__body = {}

    def set_status_code(self, code: int):
        self.__status_code = code

    def set_status_code_unauthorized(self):
        self.__status_code = 401

    def set_status_code_not_found(self):
        self.__status_code = 404

    def set_body(self, body: dict):
        self.__body = body

    def to_dict(self):
        return {
            "statusCode": self.__status_code,
            "body": json.dumps(self.__body, ensure_ascii=False),
        }
