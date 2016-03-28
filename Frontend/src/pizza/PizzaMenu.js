/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');

//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");

var items = 0;

function showPizzaList(list) {
    //Очищаємо старі піци в кошику
    $pizza_list.html("");

    $('.badge-lp').text(items);

    //Онволення однієї піци
    function showOnePizza(pizza) {
        var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);

        $node.find(".buy-big").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        });
        $node.find(".buy-small").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
        });

        $pizza_list.append($node);
    }

    list.forEach(showOnePizza);
}

function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
    var pizza_shown = [];

    Pizza_List.forEach(function (pizza) {

        //Якщо піца відповідає фільтру
        if (pizza.type == filter) {
            pizza_shown.push(pizza);
            items += 1;
        }
    });

    //Показати відфільтровані піци
    showPizzaList(pizza_shown);
    items = 0;
}

function initialiseMenu(server_list) {
    //Показуємо усі піци
    items = 8;
    showPizzaList(Pizza_List)
    items = 0;
}

var PizzaFilter = {
    Meat: "М'ясна",
    Seafood: "З морепродуктами",
    Vega: "Вега"
};

exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;

exports.PizzaFilter = PizzaFilter;