console.log("First statement");
console.log("Second statement");
console.log("Third statement");

console.log("First statement");

// This code runs after 5 secs
setTimeout(function () {
    console.log("Second statement");
}, 5000);

console.log("Third statement");


const cart = ["pen", "eraser", "pencil"]

api.createOrder(cart, function () {
    
    api.proceedToPay(function () {
    
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})

// Code grows horizontally
// The above example shows a callback hell where developer has no control over the execution of code.
// This structure is also known as pyramind of doom

// 2 problems

// Callback Hell
// When a function is passed as an argument to another function, it becomes a callback function.
// This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

// Inversion of control

// We have a order in the above example but there is no surity whether createOrder will create an order and
// call our function back
// It might also happen that createOrder method could be written wrong.