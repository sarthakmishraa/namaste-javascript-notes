const cart = ["tux", "crocs", "watch", "blazer", "suit"];
// const cart = ["shoes", "shirts", "tie"]
// const cart = []

// Promise
// Promise is an object which represents the completion or failure of a asynchronous operation

// Code block 1 and Code block 2 are similar
// --------------------------------------------------------------------------
// Code block 1

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     console.log("Order ID is : " + orderId);
//     console.log("Promise state : " + promise);
//     proceedToPay(orderId);
// })
// .catch(function (err) {
//     console.log(err.message);
// });

// --------------------------------------------------------------------------
// Code block 2

createOrder(cart)
    .then(function (orderId) {
        console.log("Order ID is : " + orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPay(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        return paymentInfo;
    })
    .catch(function (err) {
        console.log(err.message);
    });

// --------------------------------------------------------------------------
// CATCH BLOCK
// The catch block only catches errors for "then" methods above it.

// If the catch block is below proceedToPay, 
// then it will only handle errors for then methods which are on top of it.

// It wont handle errors for then methods below it

// --------------------------------------------------------------------------

// Producer Code

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        console.log("promise constructor created");
        // creating an error in javascript
        if (!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "1001";
        if (orderId){
            // logic for createOrder
            setTimeout(function () {
                resolve(orderId);
            }, 2000)
        }

    });
    return pr;
}

function validateCart(cart) {
    if (cart.length != 0){
        return true;
    }
    return false;
}

function proceedToPay (orderId) {
    // const pr = new Promise(function (resolve, reject) {
    //     logic for proceedToPay
    // })
    
    // return pr;

    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}