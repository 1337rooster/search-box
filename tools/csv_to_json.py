import csv
import json
import sys

def main():
  json_result = list()
  headers = list()
  first = True
  for row in csv.reader(iter(sys.stdin.readline, '')):
    if first:
      for i in range(len(row)):
        headers.append(row[i])
      first = False
      continue
    json_dict = dict()
    for i in range(len(row)):
      json_dict[headers[i]] = row[i].decode('utf-8')
    json_result.append(json_dict)
  print json.dumps(json_result, indent=2, sort_keys=True)


if __name__ == '__main__':
  main()