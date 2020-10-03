import os
import csv
import json


CONTENT_DIR = os.path.join(os.path.dirname(__file__), '../content')
CSV_FILE_PATH = os.path.join(CONTENT_DIR, 'obmessage_list.csv')
JSON_FILE_PATH = os.path.join(CONTENT_DIR, 'obmessage_list.json')

COL_INDEX_FILENAME = 0
COL_INDEX_LABEL = 1
COL_INDEX_YEAR = 2
COL_INDEX_NO = 3

tmpdict = {}

with open(CSV_FILE_PATH) as f:
    csvr = csv.reader(f)
    for row in csvr:
        if row[COL_INDEX_YEAR] not in tmpdict:
            tmpdict[row[COL_INDEX_YEAR]] = []
        tmpdict[row[COL_INDEX_YEAR]].append(row)

res = []
for year in sorted(tmpdict.keys(), reverse=True):
    tmpfiles = sorted(tmpdict[year], key=lambda x: x[COL_INDEX_NO])
    files = []
    for row in tmpfiles:
        files.append({'fileName': row[COL_INDEX_FILENAME], 'lable': row[COL_INDEX_LABEL]})
    res.append({'year': int(year), 'files': files, })

with open(JSON_FILE_PATH, 'wt') as f:
    json.dump(res, f, indent=2, ensure_ascii=False)
