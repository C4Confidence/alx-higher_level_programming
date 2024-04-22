#!/usr/bin/python3
"""A module that reads the states from a db"""

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

    curr.execute("SELECT * FROM states ORDER BY id ASC")

    query_rows = curr.fetchall()

    for rows in query_rows:
        print(rows)

    curr.close()
    conn.close()


if __name__ == '__main__':
    connection(sys.argv[1], sys.argv[2], sys.argv[3])
