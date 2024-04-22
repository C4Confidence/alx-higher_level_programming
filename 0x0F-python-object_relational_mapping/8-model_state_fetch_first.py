#!/usr/bin/python3
"""Start link class to table in database"""
import sys
from model_state import Base, State
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine


def list_states(username, password, db_name):
    """list_states function"""

    engine = create_engine(
        'mysql+mysqldb://{}:{}@localhost/{}'
        .format(username, password, db_name))

    Session = sessionmaker(bind=engine)

    session = Session()

    all_states = session.query(State).first()

    if all_states:
        print(f"{all_states.id}: {all_states.name}")
    else:
        print("Nothing")

    session.close()


if __name__ == "__main__":
    list_states(sys.argv[1], sys.argv[2], sys.argv[3])
