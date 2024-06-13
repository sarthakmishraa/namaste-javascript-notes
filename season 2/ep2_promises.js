const cart = ["shoes", "shirts", "tie"]

// Promise
// Promise is an object which represents eventual completion or failure of asynchronous operations


// code block 1
const promise = createOrder(cart)

promise.then(function() {
    proceedToPay(orderId)
})


// code block 2
createOrder(cart).then(function (orderId) {
    proceedToPay(orderId)
})

// code block 1 is same as code block 2

// ------------------------------------------------------------------------------------------

// promise chaining

createOrder(cart)
.then(function (orderId) {
    return proceedToPay(orderId);
})
.then(function (orderId) {
    return showOrderSummary(orderId);
})
.then(function (paymentInfo) {
    return updateWallet(paymentInfo)
})
// DO NOT FORGET TO RETURN THE PROMISE USING 'return' KEYWORD


// Using arrow functions

createOrder(cart)
    .then(orderId => proceedToPay(orderId))
    .then(payemntInfo => showOrderSummary(payemntInfo))
    .then(payemntInfo => updateWallet(paymentInfo));