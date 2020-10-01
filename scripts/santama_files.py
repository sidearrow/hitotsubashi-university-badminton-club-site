import os
import json

BASE_DIR = os.path.join(
    os.path.dirname(
        os.path.abspath(__file__)
    ),
    '../public/files/santama'
)

YEARS = [2015, 2016, 2017, 2018, 2019]

LABELNAMES = {
    'info': '大会情報',
    'msa': '男子シングルス（Aクラス）',
    'mda': '男子ダブルス（Aクラス）',
    'msb': '男子シングルス（Bクラス）',
    'mdb': '男子ダブルス（Bクラス）',
    'ws': '女子シングルス',
    'wd': '女子ダブルス',
}


def get_year_dict(year: int, files: list) -> dict:
    return {
        'year': year,
        'label': '第 {} 回（{} 年度）'.format(year - 1965, year),
        'files': files,
    }


def get_file_dict(filename: str, label: str) -> dict:
    return {
        'filename': filename,
        'label': label,
    }


def sort_files(files: list) -> list:
    res = []
    for k in LABELNAMES.keys():
        for file in files:
            if file['filename'].split('.')[0].split('_')[1] == k:
                res.append(file)
                break
    return res


res = []

for year in YEARS:
    dir = os.path.join(BASE_DIR, str(year))
    filenames = os.listdir(dir)
    files = []
    for filename in filenames:
        filename_split_res = filename.split('.')[0].split('_')
        labelname = LABELNAMES[filename_split_res[1]]
        if len(filename_split_res) == 3 and filename_split_res[2] == 'result':
            labelname += '結果'
        files.append(get_file_dict(filename, labelname))
    res.append(get_year_dict(year, sort_files(files)))

with open('./santama_files.json', 'wt') as f:
    json.dump(res, f, indent=2, ensure_ascii=False)
