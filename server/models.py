
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

db: SQLAlchemy = SQLAlchemy()

class User(db.Model, UserMixin):
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(32))
    user_pswd_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def validate_password(self, password) -> bool:
        return check_password_hash(self.password_hash, password)

    def to_json(self):
        return {'user_id': self.id, 'user_name': self.user_name}


class Creator(db.Model, UserMixin):
    creator_id = db.Column(db.Integer, primary_key=True)
    creator_name = db.Column(db.String(32))
    creator_pswd_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def validate_password(self, password) -> bool:
        return check_password_hash(self.password_hash, password)

    def to_json(self):
        return {'creator_id': self.id, 'creator_name': self.user_name}


class Content(db.Model):
    content_id = db.Column(db.Integer, primary_key=True)
    creator = db.relationship("Creator", backref=db.backref('contents'))
    title = db.Column(db.String(128))
    digest = db.Column(db.String())


class Like(db.Model):
    like_id = db.Column(db.Integer, primary_key=True)
    user = db.relationship("User", backref=db.backref('likes'))

