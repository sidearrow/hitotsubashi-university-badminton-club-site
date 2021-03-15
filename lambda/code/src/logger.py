import os
from logging import getLogger, DEBUG


def get_logger(name: str):
    logger = getLogger(name)
    logger.setLevel(DEBUG)
    return logger