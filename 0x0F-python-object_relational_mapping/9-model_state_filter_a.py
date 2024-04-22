#!/usr/bin/python3
"""
Lists all State objects that contain the letter a from the database
"""

from sys import argv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State


def main(username, password, dbname):
    """Function get all srats that conntain the letter a"""
    db_url = f"""mysql+mysqldb://{username}:{password}@localhost:3306/{dbname}"""
    engine = create_engine(db_url)

    Session = sessionmaker(bind=engine)
    session = Session()

    states = session.query(State).filter(State.name.like('%a%')).all()

    for rows in states:
        print(f"{rows.id}: {rows.name}")
    session.close()


if __name__ == '__main__':
    main(argv[1], argv[2], argv[3])
