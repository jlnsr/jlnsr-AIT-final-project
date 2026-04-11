// DOM elememnts
const numberItems = document.getElementById('number');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
for (const button of addToCartButtons) {
    button.addEventListener('click', function(e) {
        // alias
        t = e.target;
        // toggle visual indicator for items added to cart, on-off
        t.
            nextElementSibling.
            classList.toggle('hidden');
        // toggle text
        const content = ["Add to cart", "Remove from cart"]
        const old = t.innerText;
        if (old == content[0]) {
            // switch from add to remove
            t.innerText = content[1];
            // increase number of items in cart
            numberItems.innerText = parseInt(numberItems.innerText) + 1;
        }else {
            t.innerText = content[0];
            numberItems.innerText = parseInt(numberItems.innerText) - 1;
        }
        // apply visual indicator to container
        t.parentElement.classList.toggle('selected-menu-item');
    });
}
const paymentDetails = document.getElementById('payment-details');
const paymentWarning = document.getElementById('payment-warning');
// elements in shoppingCart.html page
const cartItems = document.querySelectorAll('.cart-item');
const orderForm = document.getElementById('order-form');
const orderStatus = document.getElementById('order-status');
const submitOrder = document.getElementById('submit-order');

// event listener on form itself
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (paymentDetails.value === ''){
        paymentWarning.classList.remove('hidden');
        console.log("MUST submit payment!");
        return;
    }

    paymentWarning.classList.toggle('hidden');
    /* 
    prevent the browsesr from refreshing the page
    when form submitted (and resettings state)
    */
    const orderItems = document.createElement('input');
    orderItems.type = 'hidden';
    orderItems.name = 'orderItems';
    // list or comma-separated string??
    for (const item of cartItems){
        // the h1 that names the item (FOR NOW)
        orderItems.value += item.children[0].innerText
    }
    orderForm.appendChild(orderItems);
    
    orderForm.submit();
    // to prevent re-submission of payment credentials
});