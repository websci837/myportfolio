from flask import Flask
import time
from flask_cors import CORS
from flask import jsonify

print("app started")
time.sleep(5)

app = Flask(__name__)
CORS(app)
# if __name__ == "__main__":
#     app.run( debug=False, host="localhost", port=5000)

@app.route('/portfolio_backend', methods=['GET'])
def portfolio_backend():
    # Your route logic here
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

@app.route('/portfolio_backend')
def portfolio_backend():
    # Your route logic here
    return jsonify({"message": "Hello from Flask!"})

@app.route('/')
def main():
    return jsonify (
        {"likes":"34"}
    )

