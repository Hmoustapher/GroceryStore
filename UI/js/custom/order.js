var productPrices = {};

$(function () {
    // Fetch products for dropdown in order form
    $.get(productListApiUrl, function (response) {
        productPrices = {};
        if (response && response.length > 0) {
            var options = '<option value="">--Select--</option>';
            response.forEach(function(product) {
                options += `<option value="${product.product_id}">${product.name}</option>`;
                productPrices[product.product_id] = parseFloat(product.price_per_unit);
            });
            $(".product-box").find("select").append(options);
        }
    });
});

$("#addMoreButton").click(function () {
    var row = $(".product-box").html();
    $(".product-box-extra").append(row);
    $(".product-box-extra .remove-row").last().show();
    $(".product-box-extra .product-price").last().val('0.0');
    $(".product-box-extra .product-qty").last().val('1');
    $(".product-box-extra .product-total").last().val('0.0');
    calculateValue();  // Recalculate totals after adding a new row
});

// Event delegation for dynamically added elements
$(document).on("click", ".remove-row", function (){
    $(this).closest('.row').remove();
    calculateValue();
});

$(document).on("change", ".cart-product", function (){
    var product_id = $(this).val();
    var price = productPrices[product_id] || 0;

    $(this).closest('.row').find('#product_price').val(price.toFixed(2));
    calculateValue();
});

$(document).on("change", ".product-qty", function (e){
    calculateValue();
});

$("#saveOrder").on("click", function(){
    var formData = $("form").serializeArray();
    var requestPayload = {
        customer_name: $("#customerName").val(),
        total: $("#product_grand_total").val(),
        order_details: []
    };

    formData.forEach(function(element) {
        var lastElement = requestPayload.order_details[requestPayload.order_details.length - 1];

        switch(element.name) {
            case 'product':
                requestPayload.order_details.push({
                    product_id: element.value,
                    quantity: null,
                    total_price: null
                });                
                break;
            case 'qty':
                if (lastElement) lastElement.quantity = element.value;
                break;
            case 'item_total':
                if (lastElement) lastElement.total_price = element.value;
                break;
        }
    });

    callApi("POST", orderSaveApiUrl, {
        'data': JSON.stringify(requestPayload)
    });
});
