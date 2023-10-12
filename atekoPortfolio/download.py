from flask import Blueprint, render_template, request, flash, jsonify, url_for, send_file, redirect
from flask_login import login_required, current_user, logout_user

from unidecode import unidecode

from werkzeug.utils import secure_filename

import os

# from . import db

# from .models import User

download = Blueprint('download', __name__)


@download.route('/downloadCV', methods=["GET"])
def downloadPDF():
    return send_file("D:\ATEKO\portfolioV2\inPython\\atekoPortfolio\static\\assets\CV-AfonsoAlmeida.pdf", as_attachment=True)



