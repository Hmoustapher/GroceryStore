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
