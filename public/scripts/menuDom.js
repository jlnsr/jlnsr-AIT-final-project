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
GOAL: Collect the items selected in the /menu page and use them to
dynamically populate the /cart page. The selected items are saved to an 
array, and the objective is to send this array as payload to the /cart url.
PROBLEM: How to send data as paylod with a request that is not made
through a form.
RESEARCH FINDING(S):
• Anchor tags are only for navigation purposes, forcing the browser
to make a GET request to the href specified. This request cannot be configured.
• Use the Fetch api to configure a request to send specific data, via POST method. The server saves
this data (on a per-session basis), and, when recieving a subsequent GET method to the same endpoint,
sends the saved data to the template. In order to force the browser to navigate to a new page, we use
window.location.href = '/new-endpoint'.
"
SOURCE: https://www.sitepoint.com/javascript-window-object/
The window.location property is an object that contains information about the URL of the current page. 
It contains a number of properties that provide information about different fragments of the URL.
The href property returns the full URL as a string.
This property is a read/write property, which means it can also be changed by assignment. 
If this is done, the page will be reloaded using the new property.
"
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
