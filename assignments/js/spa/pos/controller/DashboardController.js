$("#home").click(function () {
    $("#dashboardContent").css("display","inline")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","none")
});

$("#customer,#Dcustomer").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","flex")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","none")
});

$("#item,#Ditem").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","flex")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","none");
});

$("#orders,#Dorder").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","flex")
    $("#orderDetailContent").css("display","none");
});

$("#order-Detail,#DOrder-detail").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","flex");
});

