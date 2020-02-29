import csv
import json

file_path_history = './in/league_result_history.csv'
file_path_team = './in/league_result_team.csv'
file_path_individual = './in/league_result_individual.csv'
out_dir = './out'


def output_json(data, file_name: str):
    with open(f'{out_dir}/{file_name}', mode='w', encoding='utf-8') as f:
        json.dump(res[league_id], f, ensure_ascii=False, indent=4)


res = {}
with open(file_path_team, encoding='utf-8') as f:
    csv_reader = csv.DictReader(f)
    for row in csv_reader:
        res.setdefault(row.get('league_id'), {
            'summary': [],
            'detail': [],
        })

        resultDetail = []
        for i in range(1, 7):
            i = str(i)
            if row['wl' + i] == '' and row['remarks' + i] == '':
                resultDetail.append(None)
                continue

            resultDetail.append({
                'isWin': row['wl' + i] == '1',
                'winNum': int(row['w' + i]),
                'loseNum': int(row['l' + i]),
                'remarks': row['remarks' + i],
            })

        res[row.get('league_id')]['summary'].append({
            'name': row['name'],
            'nameShort': row['name_short'],
            'resultDetail': resultDetail,
        })

with open(file_path_individual, encoding='utf-8') as f:
    csv_reader = csv.DictReader(f)
    for row in csv_reader:
        if row['league_id'] not in res:
            continue
        if len(res[row['league_id']]['detail']) < int(row['no1']):
            res[row['league_id']]['detail'].append({
                'callageName': row['callage_name'],
                'winNum': int(row['w']),
                'loseNum': int(row['l']),
                'games': [],
            })

        score = [
            [int(row['s11']), int(row['s12'])],
            [int(row['s21']), int(row['s22'])],
        ]
        if row['s31'] != '':
            score.append([int(row['s31']), int(row['s32'])])
        res[row['league_id']]['detail'][int(row['no1']) - 1]['games'].append({
            'name1': [row['name11']] if row['name12'] == '' else [row['name11'], row['name12']],
            'name2': [row['name21']] if row['name22'] == '' else [row['name21'], row['name22']],
            'isMc1': row['mc1'] == '1',
            'isMc2': row['mc2'] == '1',
            'winNum': int(row['s01']),
            'loseNum': int(row['s02']),
            'score': score,
        })


for league_id in res:
    output_json(res, f'league_result_detail_{league_id}.json')
