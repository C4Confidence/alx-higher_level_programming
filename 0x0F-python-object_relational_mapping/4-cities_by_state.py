#!/usr/bin/python3
"""A module that reads the state in a db using user input"""

import sys
import MySQLdb


def connection(username, password, db_name):
    """The function that connects to the db"""

    conn = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=username,
        passwd=password,
        db=db_name,
        charset="utf8")

    curr = conn.cursor()

    query = """SELECT cities.id, cities.name,
    states.name FROM cities LEFT JOIN
    states on cities.state_id = states.id"""

    curr.execute(query)

    query_rows = curr.fetchall()

    for rows in query_rows:
        print(rows)

    curr.close()
    conn.close()


if __name__ == '__main__':
    connection(sys.argv[1], sys.argv[2], sys.argv[3])
