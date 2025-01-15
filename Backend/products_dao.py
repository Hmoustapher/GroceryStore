from sql_connection import get_sql_connection

def get_all_products(connection):
    try:
        cursor = connection.cursor()
        query = """
            SELECT products.product_id, products.name, products.uom_id, products.price_per_unit, uom.uom_name
            FROM products
            INNER JOIN uom
            ON products.uom_id = uom.uom_id
        """
        cursor.execute(query)

