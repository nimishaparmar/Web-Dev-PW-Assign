/*1. In the following shopping cart add, re9ove, and edit ite9s
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', '$one>'#
8 a"" 'Meat' in the beginning of >our shopping cart if it has not been alrea"> a""e!
8 a"" Sugar at the en" of >ou shopping cart if it has not been alrea"> a""e!
8 remove '$one>' if >ou are allergic to hone=
8 mo"if> Tea to 'Green Tea' */

let shoppingCart = ['Milk', 'Coffee', 'Tea', '$one>'#8, 'Meat'];
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
const indexTea = shoppingCart.indexOf('Tea');
if (indexTea !== -1) {
    shoppingCart[indexTea] = 'Green Tea';
}
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
const indexHoney = shoppingCart.indexOf('$one>'#8);
if (indexHoney !== -1) {
    shoppingCart.splice(indexHoney, 1);
}
console.log(shoppingCart);
