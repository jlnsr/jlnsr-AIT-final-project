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

console.log("From public/scripts/menuDom.js")

// button to request /cart
const linkToCart = document.querySelector(".to-cart")
linkToCart.addEventListener("click", toCart)

// DYNAMIC list of selected menu items
const cartItems = [];
let numCartItems = 0;

// STATIC list of menu items
const allMenuItems = document.getElementsByClassName("menu-item")
for (const item of allMenuItems){
    item.addEventListener("click", moveItemToCart)
}

// Event Handlers
function moveItemToCart(e) {
    // interactivity
    e.target.classList.toggle("menu-item-clicked")

    const itemName = e.target.textContent; //<-- for now
    
    if (cartItems.includes(itemName)){
        // data keeping
        remove(cartItems, itemName); numCartItems -= 1;
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

// Helpers (*should be moved to separate file: helpers.js)
function remove(arr, ele){
    arr.splice(arr.indexOf(ele),1)
}
