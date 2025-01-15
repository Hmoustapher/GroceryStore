from flask import Flask, request, jsonify
from sql_connection import get_sql_connection
import json

# DAO Imports
import products_dao
import orders_dao
import uom_dao

# Initialize Flask App
app = Flask(__name)

# Establish SQL Connection
connection = get_sql_connection()

# Routes
@app.route('/getUOM', methods=['GET'])
def get_uom():
    try:
        response = uom_dao.get_uoms(connection)
        return jsonify(response), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/insertProduct', methods=['POST'])
def insert_product():
    try:
        request_payload = json.loads(request.form['data'])
        product_id = products_dao.insert_new_product(connection, request_payload)
        return jsonify({'product_id': product_id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/getAllOrders', methods=['GET'])
def get_all_orders():
    try:
        response = orders_dao.get_all_orders(connection)
        return jsonify(response), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
