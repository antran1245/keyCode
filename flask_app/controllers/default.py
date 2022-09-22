from flask_app import app
from flask import render_template, request
import requests

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/number', methods=['POST'])
def number():
    URL = "http://numbersapi.com/"
    info = request.form['data']
    req = requests.get(URL+info, headers={'content-type': 'application/json'})
    return req.json()