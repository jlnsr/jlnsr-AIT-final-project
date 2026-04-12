// referenes to ORDER page
const cart = document.querySelector(".cart")
const orderForm = document.querySelector('.order-form');
orderForm.addEventListener("submit", handleOrder)

const paymentMethod = document.querySelector(".payment-method")
paymentMethod.addEventListener("onchange", changePaymentMethod)
const paymentDetails = document.querySelector(".payment-details")
const [name, contact] = document.querySelectorAll(".contact-info")
const [missingPayment, missingContact] = document.querySelectorAll(".warning")

// event listener on form itself
function handleOrder(e) {
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

    /* 
    prevent the browsesr from refreshing the page
    when form submitted (and resettings state)
    */
    // send array as payload
    for (const item of cart.children){
        const itemInput = document.createElement('input')
        itemInput.type="hidden"
        itemInput.name="orderItems[]"
        itemInput.value=item.textContent
        orderForm.appendChild(itemInput);
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