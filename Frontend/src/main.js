/**
 * Created by chaika on 25.01.16.
 */

$(function () {
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');

    var Pizza_List = require('./Pizza_List');

    require('./googleMap');

    var API = require('./API');


    API.getPizzaList(function (err, pizza_list) {
        if (err) {
            return console.error(err);
        }
        console.log("Pizza_List", pizza_list);
        PizzaCart.initialiseCart();
        PizzaMenu.initialiseMenu();
    });


    $('#all').click(function () {
        PizzaMenu.initialiseMenu();
    });

    $('#home').click(function () {
        window.location = "http://localhost:5050/";
    });

    $('#icon').click(function () {
        window.location.reload();
    });

    $('#meat').click(function () {
        var filter = PizzaMenu.PizzaFilter.Meat;
        PizzaMenu.filterPizza(filter);
    });

    $('#seafood').click(function () {
        var filter = PizzaMenu.PizzaFilter.Seafood;
        PizzaMenu.filterPizza(filter);
    });

    $('#vega').click(function () {
        var filter = PizzaMenu.PizzaFilter.Vega;
        PizzaMenu.filterPizza(filter);
    });

    $(".reset").click(function () {
        PizzaCart.totalReset();
        PizzaCart.updateCart();
    });
    var order_page = false;

    $('.order').click(function () {
        window.location = "http://localhost:5050/order.html";
       order_page=true;
    });

    if(order_page){
        $('.minus').hide();
    }

    var fname = $(".fname");
    var num = $(".num");
    var ad = $(".ad");
    var right_input = false;

    $("#forename").focusout(function () {
        if ($("#forename").val() == "" || /^[0-9]+$/.test($("#forename").val())) {
            right_input = false;
            fname.find(".status").attr("class", "has-error");
            fname.find(".help-block").css("display", "inline");
            fname.find("#forename").after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        } else {
            right_input = true;
            fname.find(".status").attr("class", "has-success");
            fname.find("#forename").after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
        }
    });

    $("#forename").focusin(function () {
        fname.find(".has-error").attr("class", "status");
        fname.find(".has-success").attr("class", "status");
        fname.find(".glyphicon-remove").css("display", "none");
        fname.find(".glyphicon-ok").css("display", "none");
        fname.find(".help-block").css("display", "none");
    });

    $("#number").focusout(function () {
        if ($("#number").val() == "" || ($("#number").val().includes("+380")) == false || $("#number").val().length != 13 || !/[0-9]+/.test($("#number").val())) {
            right_input = false;
            num.find(".status").attr("class", "has-error");
            num.find(".help-block").css("display", "inline");
            num.find("#number").after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        } else {
            right_input = true;
            num.find(".status").attr("class", "has-success");
            num.find("#number").after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
        }
    });

    $("#number").focusin(function () {
        num.find(".has-error").attr("class", "status");
        num.find(".has-success").attr("class", "status");
        num.find(".glyphicon-remove").css("display", "none");
        num.find(".glyphicon-ok").css("display", "none");
        num.find(".help-block").css("display", "none");
    });

    $("#address").focusin(function () {
        ad.find(".has-error").attr("class", "status");
        ad.find(".glyphicon-remove").css("display", "none");
    });

    $('.next').click(function () {
        if (right_input) {
            API.createOrder(
                {
                    name: $("#forename").val(),
                    phone: $("#phone").val(),
                    addres: $("#address").val(),
                    pizza: PizzaCart.getPizzaInCart()
                },
                function (err, result) {
                    if (err) {
                        alert("Can't create order");
                    } else {
                        LiqPayCheckout.init({
                            data: result.data,
                            signature: result.signature,
                            embedTo: "#liqpay",
                            mode: "popup"
                        }).on("liqpay.callback", function (data) {
                            console.log(data.status);
                            console.log(data);
                        }).on("liqpay.ready", function (data) {

                        }).on("liqpay.close", function (data) {
                            window.location = "http://localhost:5050/";
                        });
                    }
                });
        } else {
            $(".help-block").css("display", "inline");
            $(".status").attr("class", "has-error");
            ad.find("#number").after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        }
    })
});