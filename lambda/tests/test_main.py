from datetime import datetime, timedelta
from unittest import TestCase
from unittest.mock import patch
from src.app import Auth


class AuthTest(TestCase):
    def test_login_success(self):
        auth = Auth("secret_key", "password")
        result, token = auth.create_token("password")
        result = auth.check_token(token)
        self.assertTrue(result)

    def test_check_token_wrong(self):
        auth = Auth("secret_key", "password")
        result, token = auth.create_token("password")
        auth2 = Auth("secret_key_wrong", "password")
        result = auth2.check_token(token)
        self.assertFalse(result)

    def test_check_token_expired(self):
        auth = Auth("secret_key", "password")
        with patch("src.app.get_now_unixtime") as mock_get_now_unixtime:
            mock_get_now_unixtime.return_value = (
                datetime.utcnow() - timedelta(hours=4)
            ).timestamp()
            result, token = auth.create_token("password")
        result = auth.check_token(token)
        self.assertFalse(result)
