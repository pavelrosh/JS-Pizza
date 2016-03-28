/**
 * Created by diana on 12.01.16.
 */

var pizza_info = [
    {
        id: 1,
        icon: 'assets/images/pizza_1.jpg',
        title: 'Amateur',
        type: "М'ясна",
        content: {
            meat: ['Шинка', 'курка'],
            additional: ['гриби','сир моцарелла'],
            vegetables: ['перець болгарський', 'брокколі', 'кукуруза'],
            sauce: ['фірмови соус']
        },

        both_sizes: true,
        small_size: {
            weight: 480,
            size: 30,
            price: 99
        },
        big_size: {
            weight: 790,
            size: 45,
            price: 139
        },
        is_new: true
    },

    {
        id: 2,
        icon: 'assets/images/pizza_2.jpg',
        title: 'Capri',
        type: 'З морепродуктами',
        content: {
            seafood: ['Тигрові креветки','крабовы палички','мідії'],
            additional: ['сир моцарелла'],
            vegetables: ['брокколі', 'зелень', 'горошок'],
            sauce: ['соус Песто']
        },

        both_sizes: true,
        small_size: {
            weight: 450,
            size: 30,
            price: 126
        },
        big_size: {
            weight: 680,
            size: 45,
            price: 199
        },
        is_popular: true
    },

    {
        id: 3,
        icon: 'assets/images/pizza_3.jpg',
        title: 'Delux',
        type: "М'ясна",
        content: {
            meat: ['Салямі'],
            additional: ['гриби','сир моцарелла','сир чеддер'],
            vegetables: ['зелень', 'помідори'],
            sauce: ['фірмовий соус']
        },

        both_sizes: true,
        small_size: {
            weight: 350,
            size: 30,
            price: 89
        },
        big_size: {
            weight: 500,
            size: 45,
            price: 135
        }
    },

    {
        id: 4,
        icon: 'assets/images/pizza_4.jpg',
        title: 'Domino',
        type: "М'ясна",
        content: {
            meat: ['Свинина'],
            vegetables: ['горошок', 'перець болгарський', 'брокколі', 'зелень'],
            additional: ['сир моцарелла', 'приправа від Шеф-кухаря']
        },

        both_sizes: true,
        small_size: {
            weight: 360,
            size: 30,
            price: 105
        },
        big_size: {
            weight: 560,
            size: 45,
            price: 169
        }
    },

    {
        id: 5,
        icon: 'assets/images/pizza_5.jpg',
        title: 'Hawaiian',
        type: 'Вега',
        content: {
            vegetables: ['Горошок', 'перець болгарський', 'брокколі', 'зелень'],
            additional: ['сир моцарелла','пармезан','сир брі']
        },

        big_size_only: true,
        big_size: {
            weight: 530,
            size: 50,
            price: 199
        }
    },

    {
        id: 6,
        icon: 'assets/images/pizza_6.jpg',
        title: 'Milan',
        type: "М'ясна",
        content: {
            meat: ['Італійська шинка'],
            vegetables: ['брокколі', 'перець зелений болгарський', 'зелень','гриби'],
            sauce: ['фірмовий соус','сир чеддер']
        },

        both_sizes: true,
        small_size: {
            weight: 450,
            size: 30,
            price: 119
        },
        big_size: {
            weight: 730,
            size: 45,
            price: 205
        }
    },

    {
        id: 7,
        icon: 'assets/images/pizza_7.jpg',
        title: 'Italian',
        type: "М'ясна",
        content: {
            meat: ['Яловичина', 'бекон','салямі'],
            seafood: ['креветки'],
            vegetables: ['брокколі', 'зелень'],
            sauce: ['соус карі','сир пармезан','сир моцарелла']
        },

        small_size_only: true,
        small_size: {
            weight: 320,
            size: 30,
            price: 89
        }
    },

    {
        id: 8,
        icon: 'assets/images/pizza_8.jpg',
        title: 'Pepperoni',
        type: 'Вега',
        content: {
            vegetables: ['Брокколі', 'мікс-овочі', 'помідори', 'гриби'],
            additional: ['ананаси','болгарський перець'],
            sauce: ['фірмовий соус']
        },

        both_sizes: true,
        small_size: {
            weight: 650,
            size: 40,
            price: 129
        },
        big_size: {
            weight: 1050,
            size: 55,
            price: 239
        }
    }
];

module.exports = pizza_info;