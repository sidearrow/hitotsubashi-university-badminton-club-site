import csv

data = []
with open("content/obmessage.csv") as f:
    csvr = csv.reader(f)
    for row in csvr:
        year = None
        sort_no_year = None
        name = None
        filename = None
        for i, col in enumerate(row):
            if i == 0:
                filename = col
                continue
            if i == 1:
                col = col.replace("年", ".")
                col = col.replace("第", "")
                col = col.replace("月", "")
                col = col.replace(" ", "")
                name = col
                continue
            if i == 2:
                year = col
                continue
            if i == 3:
                sort_no_year = col
                continue
        filename = "obmessage/{}/{}".format(year, filename)
        data.append([None, year, sort_no_year, name, filename])

with open("obmessage.csv", "w") as f:
    csvw = csv.writer(f)
    csvw.writerows(data)
