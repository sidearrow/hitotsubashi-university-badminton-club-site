import traceback
from src.logger import get_logger
from src.auth_handler import AuthHandler
from src.event_handler import EventHandler
from src.event import Event
from src.config import init_config

logger = get_logger(__name__)


def lambda_handler(raw_event, context):
    try:
        config = init_config()
        event = Event(raw_event)
        auth = AuthHandler(config.secret_key, config.password)
        handler = EventHandler(auth=auth, event=event)
        res = handler.exec()
        return res
    except Exception as e:
        logger.error(traceback.format_exc())
        raise e
