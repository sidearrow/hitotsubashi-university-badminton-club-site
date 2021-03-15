import jwt
from datetime import datetime


def get_now_unixtime():
    return int(datetime.utcnow().timestamp())


class AuthHandler:
    __ALGORITHM = "HS256"
    __VALID_SECONDS = 3 * 60 * 60

    def __init__(self, secret_key: str, password: str) -> None:
        self.__secret_key = secret_key
        self.__password = password

    def create_token(self, password: str):
        if password == self.__password:
            token = jwt.encode(
                {"iat": get_now_unixtime()}, self.__secret_key, self.__ALGORITHM
            )
            return token
        return None

    def check_token(self, token: str):
        payload = jwt.decode(token, self.__secret_key, algorithms=self.__ALGORITHM)
        iat = payload["iat"]
        if get_now_unixtime() - iat > self.__VALID_SECONDS:
            return False
        return True
