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