from flask import Flask, render_template
from flask_login import current_user
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from os import path

from werkzeug.security import generate_password_hash

from flask_login import LoginManager


cors = CORS()
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = 'EIgKcwiAndmX3qL6sMDCVQABJOY12rGeQXsY9Ri9S9h41ivryU'
    
    # app.config['SQLALCHEMY_DATABASE_URI'] = "mssql+pyodbc://@AFONSOALMEIDA\SQLEXPRESS/hitsTeste?trusted_connection=yes&driver=ODBC+Driver+17+for+SQL+Server" # para usar com SQLServer Local
    
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://<username>:<password>@<server>/hitsTest?driver=ODBC+Driver+17+for+SQL+Server' # para usar com SQLServer Online
    
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://codebyat_atekoKing:video_GAMER0109@185.12.116.140:3306/codebyat_portfolio' # para usar com MySQL Online
    
    cors.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    
    
    
    from .home import home
    from .cities import cities
    from .download import download

    
    app.register_blueprint(home, url_prefix="/")
    app.register_blueprint(cities, url_prefix="/")
    app.register_blueprint(download, url_prefix="/")

    
    @app.errorhandler(404)
    def not_found_error(error):
        return 'deu erro 404', 404
    
    
    # from .models import User

    # Create the database tables
    with app.app_context():
        db.create_all()

    # login_manager = LoginManager()
    # login_manager.login_view = "auth.login"
    # login_manager.init_app(app)
    
    
    
    # @login_manager.user_loader
    # def load_user(id):
    #     return User.query.get(int(id))
    
    
    return app
