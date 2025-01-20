// Define your API endpoints here
var productListApiUrl = 'http://127.0.0.1:5000/getProducts';
var uomListApiUrl = 'http://127.0.0.1:5000/getUOM';
var productSaveApiUrl = 'http://127.0.0.1:5000/insertProduct';
var productDeleteApiUrl = 'http://127.0.0.1:5000/deleteProduct';
var orderListApiUrl = 'http://127.0.0.1:5000/getAllOrders';
var orderSaveApiUrl = 'http://127.0.0.1:5000/insertOrder';

// For product dropdown in order
var productsApiUrl = 'https://fakestoreapi.com/products';

function callApi(method, url, data) {
    $.ajax({
        method: method,
        url: url,
        data: data,
        success: function(msg) {
            // Handle success case, e.g., update UI
            console.log("API call successful", msg);
            // window.location.reload(); // Uncomment if you want to reload the page upon success
        },
        error: function(xhr, status, error) {
            console.error("API call failed with status: " + status + ", Error: " + error);
        }
    });
}
