
from flask import *
from flask_login import *

from server import app, db
from server.models import *

@app.route("/api")
def index():
    return {"status": "success", "message": "hello api"}

@app.post("/api/login")
def login():
    data = request.get_json()
    user_name, user_pswd = data["user_name"], data["user_pswd"]
    if not user_name or not user_pswd:
        return {"status": "error", "message": "Invalid json."}

    user: User = User.query.filter(user_name=user_name).first()
    if user.user_name == user_name and user.validate_password(user_pswd):
        login_user(user, remember=True)
        return {'status': 'success'}
    else:
        return {'status': 'error'}

@app.post("/api/logout")
@login_required
def logout():
    logout_user()
    return {'status': 'success'}
