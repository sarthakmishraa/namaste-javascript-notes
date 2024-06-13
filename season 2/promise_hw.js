const cart = ["tux", "crocs", "watch", "blazer", "suit"];

//      4 APIs
// 1) createOrder
// 2) proceedToPayment
// 3) showOrderSummary
// 4) updateWallet

createOrder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (orderId) {
    return showOrderSummary(orderId);
})
.then(function (orderId) {
    return updateWallet(orderId);
})
.then(function (orderId) {
    console.log(orderId);
})
.catch(function (err) {
    console.log(err.message);
});


// -------------------------------------------------- 1st API --------------------------------------------------

function createOrder (cart) {
    // logic for createOrder
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "101";
        if (orderId) {
            resolve(orderId);
        }
    });

    return pr;
}

function validateCart(cart) {
    if(cart.length != 0){
        return true;
    }
    return false;
}

// -------------------------------------------------- 2nd API --------------------------------------------------

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if(orderId) {
            console.log("Payment Successful");
            resolve(orderId);
        }
        if(!orderId){
            const err = new Error("Payment failed. Contact your bank for more details.");
            reject(err);
        }
    })
}

// -------------------------------------------------- 3rd API --------------------------------------------------

function showOrderSummary(orderId) {
    return new Promise(function (resolve, reject) {
        // cart = "";
        if (cart) {
            console.log("Order : " + orderId);
            resolve();
        }
        if (!cart) {
            const err = new Error("Empty cart, No items. Thus no order summary");
            reject(err);
        }
    })
}

// -------------------------------------------------- 4th API --------------------------------------------------

function updateWallet(orderId) {
    return new Promise(function (resolve, reject) {
        orderId = "22";
        if (orderId) {
            resolve("Wallet updated for " + orderId)
        }
        if (!orderId) {
            const err = new Error("Cannot update wallet");
            reject(err);
        }
    })
}