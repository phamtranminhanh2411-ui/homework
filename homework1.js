"use strict";
console.log("Homework 1: Shopping Cart");

const cart = [ {
    name: "Sunflower",
    price: 29000,
    quantity: 10
},

{
    name: "Rose",
    price: 25000,
    quantity: 5
},
]

function calculateTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {

        total += cart[i].price * cart[i].quantity;}
    
    return total;
}
const total = calculateTotal(cart);
console.log("Total price: " + total);

function validateCart(cart) {
    if (!Array.isArray(cart)) {
        return ("Cart must be an array");}

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (!item || typeof item.name !== "string" || typeof item.price !== "number" || typeof item.quantity !== "number") {
            return ("Invalid item in cart");
        }
    }
    return null;
}
const error = validateCart(cart);

console.log(error);

function validateRate(value, name) {

    if (
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value < 0 ||
        value > 100
    ) {

        return name + " must be a number between 0 and 100";
    }

    return null;
}

console.log(validateCart(cart)); 

function calculateCart(
    cart,
    discountRate,
    taxRate
) {

    const cartError =
        validateCart(cart);

    if (cartError) {

        return {
            error: cartError
        };
    }

    const discountError =
        validateRate(
            discountRate,
            "Discount"
        );


    if (discountError) {

        return {
            error: discountError
        };
    }

    const taxError =
        validateRate(
            taxRate,
            "Tax"
        );


    if (taxError) {

        return {
            error: taxError
        };
    }

    const total =
        calculateTotal(cart);

    const discountAmount =
        Math.round(
            total *
            discountRate /
            100
        );

    const afterDiscount =
        total -
        discountAmount;

    const taxAmount =
        Math.round(
            afterDiscount *
            taxRate /
            100
        );


    const finalTotal =
        afterDiscount +
        taxAmount;


    return {

        total: total,

        discountAmount:
            discountAmount,

        taxAmount:
            taxAmount,

        finalTotal:
            finalTotal
    };
}


console.log(
    calculateCart(cart,10,8)
);