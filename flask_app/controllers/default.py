from flask_app import app

@app.route('/')
def main():
    return "<p>Server is running.</p>"