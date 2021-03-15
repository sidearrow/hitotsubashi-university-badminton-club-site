import os


class Config:
    def __init__(self, secret_key: str, password: str, s3_bucket_name: str) -> None:
        self.__secret_key = secret_key
        self.__password = password
        self.__s3_bucket_name = s3_bucket_name

    @property
    def secret_key(self):
        return self.__secret_key

    @property
    def password(self):
        return self.__password

    @property
    def s3_bucket_name(self):
        return self.__s3_bucket_name


def init_config():
    secret_key = os.environ["SECRET_KEY"]
    password = os.environ["PASSWORD"]
    s3_bucket_name = os.environ["S3_BUCKET_NAME"]

    return Config(
        secret_key=secret_key,
        password=password,
        s3_bucket_name=s3_bucket_name,
    )
