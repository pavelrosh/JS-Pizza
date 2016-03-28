/**
 * Created by chaika on 09.02.16.
 */

var pizza_List = require('./data/pizza_List');

exports.getPizzaList = function (req, res) {
    res.send(pizza_List);
};
function base64(str) {
    return new Buffer(str).toString('base64');
}

var crypto = require('crypto');

function sha1(string) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(string);
    return sha1.digest('base64');
}

var LIQPAY_PUBLIC_KEY = 'i79244164738';
var LIQPAY_PRIVATE_KEY ='UFg2SR22PPAaWRGa9QqfdNEBIZJgbSEjgICkU0uT';

exports.createOrder = function (req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);


    var order = {
        version: 3,
        public_key: LIQPAY_PUBLIC_KEY,
        action: "pay",
        amount: 1.00,
        currency: "UAH",
        description: "Опис транзакції",
        order_id: Math.random(),
        sandbox: 1
    };

    var data = base64(JSON.stringify(order));
    var signature = sha1(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY);

    res.send({
        success: true,
        data: data,
        signature:signature
    });
}
;