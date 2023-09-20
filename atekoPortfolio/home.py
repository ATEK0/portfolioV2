from flask import Blueprint, render_template, request, flash, jsonify, url_for, send_file, redirect
from flask_login import login_required, current_user, logout_user

from unidecode import unidecode

from werkzeug.utils import secure_filename

import os

# from . import db

# from .models import User

home = Blueprint('home', __name__)


@home.route('/', methods=["GET"])
def homeP():
    return redirect(url_for('home.homePage'))

@home.route('/home', methods=["GET"])
def homePage():
    return render_template("/home/index.html")

@home.route('/projects/portfolioV1', methods=["GET"])
def projectPortfolioV1():
    
    return render_template("/pfV1/index.html")


