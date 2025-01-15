import datetime
import mysql.connector

__cnx = None

def get_sql_connection():
    """
    Establishes a connection to the MySQL database.
    """
    print("Opening MySQL connection")
    global __cnx
    if __cnx is None:
        __cnx = mysql.connector.connect(
            user='root',
            password='root',
            host='127.0.0.1',
            database='gs'
        )
    return __cnx

