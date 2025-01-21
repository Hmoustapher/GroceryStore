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

function calculateValue() {
    var total = 0;
    $(".product-item").each(function(index) {
        var qty = parseFloat($(this).find('.product-qty').val() || 0);
        var price = parseFloat($(this).find('#product_price').val() || 0);
        var itemTotal = price * qty;
        $(this).find('#item_total').val(itemTotal.toFixed(2));
        total += itemTotal;
    });
    $("#product_grand_total").val(total.toFixed(2));
}

function orderParser(order) {
    return {
        id: order.id,
        date: order.datetime,
        orderNo: order.order_id,
        customerName: order.customer_name,
        cost: parseFloat(order.total) || 0
    };
}

function productParser(product) {
    return {
        id: product.product_id,
        name: product.name,
        unit: product.unit,
        price: parseFloat(product.price_per_unit) || 0
    };
}

function productDropParser(product) {
    return {
        id: product.id,
        name: product.title
    };
}

// To enable Bootstrap tooltip globally
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
