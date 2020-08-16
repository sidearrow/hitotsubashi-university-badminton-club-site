import os
import shutil
from ftplib import FTP, error_perm
from logging import basicConfig, getLogger, DEBUG, StreamHandler

handler = StreamHandler()
handler.setLevel(level=DEBUG)

logger = getLogger(__name__)
logger.setLevel(level=DEBUG)
logger.addHandler(handler)

'''
FTP_HOST = ''
FTP_USER = ''
FTP_PASS = ''
'''
FTP_HOST = 'ftp.lolipop.jp'
FTP_USER = 'main.jp-hit-u-bad'
FTP_PASS = 'issei1219'

FTP.encoding = 'utf-8'

IGNORE_DIR_LIST = ['/files']
IGNORE_FILE_LIST = ['/.htpasswd']

ROOT_DIR = os.path.dirname(__file__)

HTPASSWD = '''AuthType Basic
AuthUserFile /home/users/1/main.jp-hit-u-bad/web/.htpasswd
AuthName "Please enter your ID and password"
Require valid-user
'''


class FtpClient:
    def __init__(self):
        logger.debug('Connecting server ...')
        self.ftp = FTP(host=FTP_HOST, user=FTP_USER, passwd=FTP_PASS)
        logger.debug('Success to connect server')

    def make_dir(self, path):
        try:
            self.ftp.mkd(path)
            logger.debug('Create Dir: {}'.format(path))
        except error_perm as e:
            pass

    def upload_file(self, local_path: str, remote_path: str):
        self.ftp.storbinary('STOR {}'.format(remote_path), open(local_path, 'rb'))
        logger.debug('Upload: {} -> {}'.format(local_path, remote_path))

    def iter_files(self, dir: str, ignore_dir_list: list, ignore_file_list: list):
        for (name, props) in self.ftp.mlsd(dir):
            if name in ['.', '..']:
                continue
            path = os.path.join(dir, name)
            if props['type'] == 'dir':
                if path in ignore_dir_list:
                    continue
                for res in self.iter_files(path, ignore_dir_list, ignore_file_list):
                    yield res
                yield (path, True)
            if props['type'] == 'file':
                if path in ignore_file_list:
                    continue
                yield (path, False)

    def delete_file(self, path):
        self.ftp.delete(path)
        logger.debug('Delete file: {}'.format(path))

    def delete_dir(self, path):
        self.ftp.rmd(path)
        logger.debug('Delete dir: {}'.format(path))


def iter_files_local(path: str):
    for (dirpath, dirnames, filenames) in os.walk(path):
        yield (dirpath, True)
        for filename in filenames:
            yield (os.path.join(dirpath, filename), False)


ftp_client = FtpClient()

with open('./out/mizutori/.htaccess', 'w') as f:
    f.write(HTPASSWD)

for (name, is_dir) in ftp_client.iter_files('/', IGNORE_DIR_LIST, IGNORE_FILE_LIST):
    if is_dir:
        ftp_client.delete_dir(name)
    else:
        ftp_client.delete_file(name)

for (local_path, is_dir) in iter_files_local(os.path.join(ROOT_DIR, 'out')):
    remote_path = os.path.join('.', local_path.lstrip('out').lstrip('/'))
    if is_dir:
        ftp_client.make_dir(remote_path)
    else:
        ftp_client.upload_file(local_path, remote_path)
