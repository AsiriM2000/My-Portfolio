$(document).ready(function () {
    generateOrderID();
});

function loadAllCustomersForOption() {
    $("#selectCustomerID").empty();
    for (let cus of customers) {
        $("#selectCustomerID").append(`<option>${cus.id}</option>`);
    }

}

$("#selectCustomerID").click(function () {
    let id = $("#selectCustomerID").val();
    let search = searchCustomer(id);
    $("#orderCustomerName").val(search.name);
});

function loadAllItemForOption() {
    $("#selectItemCode").empty();
    for (let item of items) {
        $("#selectItemCode").append(`<option>${item.code}</option>`);
    }

}

$("#selectItemCode").click(function () {
    let code = $("#selectItemCode").val();
    let search = searchItem(code);
    $("#itemDescription").val(search.itemName);
    $("#qtyOnHand").val(search.qty);
    $("#unitPrice").val(search.unitPrice);
});

$("#addItem").click(function () {
    let oId = $("#orderID").val();
    let cusId = $("#selectCustomerID").val();
    let cusName = $("#orderCustomerName").val();
    let itemCode = $("#selectItemCode").val();
    let itemName = $("#itemDescription").val();
    let qtyOnHand = $("#qtyOnHand").val();
    let unitPrice = $("#unitPrice").val();
    let qty = $("#qty").val();

    var order = saveOrder(oId, cusId, cusName, itemCode, itemName, qtyOnHand, unitPrice, qty);

    orders.push(order);


    loadAllOrder();
    cleatOrderData();
    itemQtyLoad(itemCode, qty);

});

function loadAllOrder() {
    $("#tblOrder").empty();

    for (var order of orders) {
        let total = order.qty * order.price;
        $("#total").text(total);
        $("#subtotal").text(total);
        var all = `<tr><td>${order.id}</td><td>${order.code}</td><td>${order.itemName}</td><td>${order.price}</td><td>${order.qty}</td><td>${total}</td>
                       
                    </tr>`;
        $("#tblOrder").append(all);
    }
    removeItemInOrder();
}

function itemQtyLoad(ItemCode, Qty) {
    for (var item of items) {
        if (item.code == ItemCode) {
            item.qty = item.qty - Qty;
            return true;
        } else {
            return false;
        }
    }

}

function cleatOrderData() {

    $("#selectCustomerID").val("");
    $("#orderCustomerName").val("");
    $("#selectItemCode").val("");
    $("#itemDescription").val("");
    $("#qtyOnHand").val("");
    $("#unitPrice").val("");
    $("#qty").val("");

}

$("#btnSubmitOrder").click(function () {
    let oId = $("#orderID").val();
    let date = $("#txtOrderDate").val();
    let id = $("#tblOrder>tr").children(":eq(0)").text();
    let code = $("#tblOrder>tr").children(":eq(1)").text();
    let unitPrice = $("#tblOrder>tr").children(":eq(3)").text();
    let qty = $("#tblOrder>tr").children(":eq(4)").text();
    let total = $("#tblOrder>tr").children(":eq(5)").text();

    let orderDetailAll = orderDetail(oId, date, id, code, unitPrice, qty, total);


    orderDetails.push(orderDetailAll);
    qtyItem();
    clearOrder();

});

function generateOrderID() {
    $("#orderID").val("OID-001");
}

function date() {
    let date = new Date();
    let value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    $("#txtDate").text(value);

}

function clearOrder() {
    orders.splice(0, orders.length);
    $("#tblOrder").empty();
}

function removeItemInOrder() {
    $("#tblOrder>tr").on('dblclick', function () {
        orders.splice(0, orders.length);
        $("#tblOrder").empty();
    });
}

function qtyItem(){
    let Oqty = $("#qty").val();
    let itemCode = $("#selectItemCode").val();
    let item = searchItem(itemCode);
    let manageQty = item.qty-Oqty;
    if (item != null){
        item.qty = manageQty;
        loadAllItems();
        return true;
    }else {
        return false;
    }
}