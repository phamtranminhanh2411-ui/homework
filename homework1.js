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