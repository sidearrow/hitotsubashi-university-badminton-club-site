import csv

data = []
with open("input.csv") as f:
    r = csv.reader(f)
    for i, row in enumerate(r):
        if i == 0:
            continue
        _row = [None]
        for i, col in enumerate(row):
            if i == 5:
                col = col.replace("、", ",")
                poss = col.split(",")
                now = []
                old = []
                for pos in poss:
                    if "元" in pos:
                        pos = pos.lstrip("元")
                        pos = pos.strip()
                        old.append(pos)
                    else:
                        now.append(pos)
                _row.append(",".join(now))
                _row.append(",".join(old))
                continue
            if col == "m":
                col = "男性"
            if col == "f":
                col = "女性"
            _row.append(col)
        _row[6], _row[7], _row[8] = _row[8], _row[6], _row[7]
        data.append(_row)

with open("aaa.csv", "w") as f:
    w = csv.writer(f)
    w.writerows(data)
