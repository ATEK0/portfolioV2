# from . import db
from flask_login import UserMixin
from sqlalchemy.orm import relationship

# class User(db.Model, UserMixin):
#     __tablename__ = 'users'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50))
#     surname = db.Column(db.String(50), nullable=True)
#     email = db.Column(db.String(150))
#     password = db.Column(db.String(88))
    
#     permissions = db.Column(db.Integer, default=0)

#     armazens = relationship("Armazens", secondary="user_armazem")
