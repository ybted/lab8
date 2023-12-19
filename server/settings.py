
import os

here = os.path.dirname(__file__)
SQLALCHEMY_DATABASE_URI = f"sqlite:///" + os.path.join(here, "db.sqlite3")