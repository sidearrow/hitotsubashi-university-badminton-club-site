class Event:
    def __init__(self, raw_event: dict) -> None:
        self.__path = str(raw_event["path"])
        self.__query_params = dict(raw_event["queryStringParameters"] or {})

    @property
    def path(self):
        return self.__path

    @property
    def query_params(self):
        return self.__query_params