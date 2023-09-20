from flask import Blueprint, render_template, request, flash, jsonify, url_for, send_file, redirect
from flask_login import login_required, current_user, logout_user

from unidecode import unidecode

from werkzeug.utils import secure_filename

import os
import pandas as pd


# from . import db

# from .models import User

cities = Blueprint('cities', __name__)


@cities.route('/getcity/<path:countryCode>', methods=["GET"])
def homeP(countryCode):
    
    arrayList = []
    
    data = pd.read_csv("worldcities.csv")

    for index, row in data.iterrows():
        if row['iso2'] == countryCode:
            arrayList.append(row['city'])
    
    return jsonify(sorted(arrayList))



