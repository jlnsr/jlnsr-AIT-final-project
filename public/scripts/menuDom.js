// this file gets DOM references to 
// menu.html when loaded in browser
/* MAP:
pubic
|_ html
    |_ menu.html
...
|_ scripts
    |_ dom.js* <--HERE
*/

import * as help from './helpers.js'

console.log("From public/scripts/menuDom.js")

// button to request /cart
const linkToCart = help.getDom("querySelector", ".to-cart", ["click", toCart])
/*const linkToCart = document.querySelector(".to-cart")
linkToCart.addEventListener("click", toCart)*/

// DYNAMIC list of selected menu items
let cartItems = [];
let numCartItems = 0;
if(document.cookie){
    getCartItems()    
}

// STATIC list of menu items
const allMenuItems = help.getDom("querySelectorAll", ".menu-item", ["click", moveItemToCart])
/*document.getElementsByClassName("menu-item")
for (const item of allMenuItems){
    item.addEventListener("click", moveItemToCart)
}*/

// Event Handlers
function moveItemToCart(e) {
    // interactivity
    e.target.classList.toggle("menu-item-clicked")
    console.log(
        (e.target.classList.contains("menu-item-clicked") 
        ? "Adding" : "Removing") + ` ${e.target.textContent}`)

    const itemName = e.target.textContent; //<-- for now
    
    if (cartItems.includes(itemName)){
        // data keeping
        help.remove(cartItems, itemName); numCartItems -= 1;
        // logging
        console.log(`Removed ${itemName} from cart, you now have:\n${
            cartItems}`)
    }else {
        // data keeping
        cartItems.push(itemName); numCartItems += 1;  
        // logging 
        console.log(`You have ${numCartItems} items in the cart:\n${
        cartItems}`) 
    }
}
/*
SOURCE: https://www.sitepoint.com/javascript-window-object/
The code below manipulates the global window object to perform some AJAX actions.
I found a helpful source that provides deep insights about the window object
and its properties. The content therein helped me design this particular solution.
*/
async function toCart(e){
    // GET /menu
    if (e.target.textContent.toLowerCase() === "go to menu"){
        window.location.href='/menu'
    }else {
        // POST to /cart, then
        // GET /cart (with items)
        await fetch('/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItems) //<-- *ARRAY of names; for now
        })
        window.location.href='/cart'    
    }
    
}

function getCartItems(){
    const raw = document.cookie.split('=')[1];
    console.log(raw);
    // cookies are sent to browser as encoded?
    // NOT as plain-text?
    const cleaned = decodeURIComponent(raw).replace(/^j:/,'');
    const prevCartItems = JSON.parse(cleaned)
    console.log(prevCartItems)
    for(const item of prevCartItems){
        const num = item.split(' ')[1]
        console.log(`.item${num}`)
        cartItems = prevCartItems;
        document.querySelector(`.item${num}`).classList.add("menu-item-clicked")
    }
    // error
}
