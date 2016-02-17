/**
 * Created by chaika on 25.01.16.
 */
$(function(){
    $('.btn').click(function(){
        alert("Button: " + $(this).text());
        return false;
    });
});
$(document).ready(function(){

    var LIST = $(".pizzabar");    //кошик для піци
    var name_pizza;
    var price_pizza;
    var PIZZA_TEMPLATE=$('.new_pizza_small').html(); //шаблон замовлено піци small

    $('.small').click(function(){
        name_pizza= $(this).find('.caption').text();
        price_pizza=$(this).parent().find('.smpizza_price').text();
        addToCart(name_pizza,price_pizza);
    });

    function addToCart(name_pizza,price_pizza) {
        var node = $(PIZZA_TEMPLATE); //сворив новий елемет з піцою
        node.find('.nazva').text(name_pizza);
        node.find('.price').text(price_pizza);
        LIST.append(node);

        updateCart();
    }
  //  addToCart("Piccolo","150грн");
});
