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

# Log if the query was executed successfully
        print("Query executed successfully.")

        response = []
        for (product_id, name, uom_id, price_per_unit, uom_name) in cursor:
            response.append({
                'product_id': product_id,
                'name': name,
                'uom_id': uom_id,
                'price_per_unit': price_per_unit,
                'uom_name': uom_name
            })

        # Return the data
        return response 

except Exception as e:
        # Log any errors that occur
        print(f"An error occurred: {e}")
        return []

    finally:
        # Ensure the cursor is closed
        if cursor:
            cursor.close()

def insert_new_product(connection, product):
    cursor = connection.cursor()
    query = ("INSERT INTO products "
             "(name, uom_id, price_per_unit)"
             "VALUES (%s, %s, %s)")
    data = (product['product_name'], product['uom_id'], product['price_per_unit'])

    cursor.execute(query, data)
    connection.commit()

    return cursor.lastrowid
