import os
import csv
import json


CONTENT_DIR = os.path.join(os.path.dirname(__file__), '../content')
CSV_FILE_PATH = os.path.join(CONTENT_DIR, 'member.csv')
JSON_FILE_PATH = os.path.join(CONTENT_DIR, 'member.json')

res = []
with open(CSV_FILE_PATH) as f:
    csvr = csv.reader(f)
    for i, row in enumerate(csvr):
        if i == 0:
            continue
        res.append({
            'familyName': row[0],
            'firstName': row[1],
            'gender': row[2],
            'admissionYear': int(row[3]),
            'faculty': row[4],
            'positions': [] if row[5] == '' else [pos.strip() for pos in row[5].split(',')],
            'highschool': row[6],
        })

with open(JSON_FILE_PATH, 'wt') as f:
    json.dump(res, f, ensure_ascii=False, sort_keys=True, indent=2)
