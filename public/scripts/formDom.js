import * as help from './helpers.js'
// referenes to ORDER page
const [cart, paymentDetails, emptyCart, missingPayment, missingContact, orderForm, paymentMethod] = [
    [".cart"], [".payment-details"],
    [".empty-cart"], [".invalid-payment"], [".invalid-contact"], // warnings
    [".order-form", ["submit", handleOrder]], 
    [".payment-method", ["onchange", changePaymentMethod]]
].map(args => help.getDom("querySelector", ...args))
// HOF 3 (map)
// read DOM values
let cartItems = cart.children
let noCartItems = help.isEmpty(cartItems)
cart.classList[
    noCartItems ? 'add' : 'remove']('hidden')
let paymentNumber = paymentDetails.value

/*
const cart = document.querySelector(".cart")
const orderForm = document.querySelector('.order-form');
orderForm.addEventListener("submit", handleOrder)

const paymentMethod = document.querySelector(".payment-method")
paymentMethod.addEventListener("onchange", changePaymentMethod)
const paymentDetails = document.querySelector(".payment-details")
*/
const [name, contact] = document.querySelectorAll(".contact-info")
/*const [missingPayment, missingContact] = [
    [".missing-payment", ".missing-contact"]].map(args => help.getDom("querySelector"))
document.querySelectorAll(".missing-payment")*/

// event listener on form itself
function handleOrder(e) {
    //Stability: simple validation on user input to prevent application from crashing
    //30:--
    // 1. No Cart Items
    if(noCartItems){
        emptyCart.classList.remove('hidden')
        e.preventDefault()
        return
    }
    emptyCart.classList.add('hidden')
    // 2. Missing Fields
    let complete = true;
    if (paymentDetails.value === ''){
        missingPayment.classList.remove('hidden');
        console.log("MUST submit payment!");
        complete = false;
    }else { missingPayment.classList.add('hidden'); }
    if (!name.value || !contact.value){
        missingContact.classList.remove('hidden')
        console.log("MUST submit contact details!");
        complete = false;
    }else { missingContact.classList.add('hidden') }
    if (!complete){ 
        e.preventDefault()
        return  
    }
    // 3. Invalid input
    if(paymentNumber.search(/\D/g)){
        missingPayment.classList.remove('hidden')
        missingPayment.textContent = "Invalid payment number (all digits, no spaces or other characters)"
    }else {
        missingPayment.classList.add('hidden')
        missingPayment.textContent = "Must submit payment details"
    }

    // send array as payload
    for (const item of cartItems){
        help.createElement(
            'input', orderForm,
            {
                "type":"hidden",
                "name":"orderItems[]",
                "value":item.textContent
            }
        )
        /*const itemInput = document.createElement('input')
        itemInput.type="hidden"
        itemInput.name="orderItems[]"
        itemInput.value=item.textContent
        orderForm.appendChild(itemInput);*/
    }    
    orderForm.submit();
    // to prevent re-submission of payment credentials
}

function changePaymentMethod(e) {
    const value = e.target.value.toLowerCase()
    paymentDetails.placeholder = (value === "card") ? 
        "Card Number e.g. 123" : "Paypal Address"
    // WORKING: No
}