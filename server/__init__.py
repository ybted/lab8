
from flask import Flask
from werkzeug.exceptions import HTTPException

app = Flask(__name__)
app.config.from_pyfile("settings.py")

from server.models import db, User
from flask_login import LoginManager

db.init_app(app)

login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

from .views import *