$(function () {
    // Fetch orders and populate table
    $.get(orderListApiUrl, function(response) {
        if (response && response.length > 0) {
            var table = '';
            var totalCost = 0;
            response.forEach(function(order) {
                var parsedOrder = orderParser(order);
                totalCost += parsedOrder.cost;
                table += `
                    <tr>
                        <td>${parsedOrder.date}</td>
                        <td>${parsedOrder.orderNo}</td>
                        <td>${parsedOrder.customerName}</td>
                        <td>${parsedOrder.cost.toFixed(2)} Rs</td>
                    </tr>`;
            });
            table += `<tr><td colspan="3" style="text-align: end"><b>Total</b></td><td><b>${totalCost.toFixed(2)} Rs</b></td></tr>`;
            $("table").find('tbody').html(table);
        } else {
            $("table").find('tbody').html('<tr><td colspan="4">No orders found.</td></tr>');
        }
    });
});
