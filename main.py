from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

@app.route('/attached_assets/<path:path>')
def send_attached_assets(path):
    return send_from_directory('attached_assets', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)