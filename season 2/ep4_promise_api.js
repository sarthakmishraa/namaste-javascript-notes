// ---------------------------------------------------------------------------------------------------------

// Promise.all()

// promise.all() takes iterable (arrays) as input which are promises.
// Returns all the result of promise and gives out an array if all gets resolved
// If any promise fails, throws error, does not wait for other promise 

// Either ALL or NONE

// example
// [val1, val2, val3] = promise.all([p1, p2, p3]])
// p1 takes 3 seconds
// p2 takes 1 seconds
// p3 takes 2 seconds
// [val1, val2, val3] is the output

// if all promises resolves, we get array output which has results from p1, p2 and p3.
// promise.all() in this case takes 3 seconds to execute

// But if p2 fails then we get error as output in 1 sec, promise.all() does not wait 
// for the other promises to run, it throws an error which it got from p2.

// But if p3 fails then we get error as output in 2 secs, promise.all() does not wait 
// for the first promises to run, it throws an error in 2 seconds which it got from p3.

// ---------------------------------------------------------------------------------------------------------

// Promise.allSettled()

// promise.allSettled() takes iterable (arrays) as input which are promises.
// Returns all the result of promise and gives out an array if all gets resolved
// If any promise fails, wait for other promises then returns all outputs (mix of resolved and rejected)

// example
// [val1, val2, val3] = Promise.allSettled([p1, p2, p3])
// p1 takes 3 seconds
// p2 takes 1 seconds
// p3 takes 2 seconds
// [val1, val2, val3] is the output

// If all of them gets successful, we get same results just like promise.all() {[val1, val2, val3]}

// But if one of the promise gets rejected, then it will not return error of the rejected promise. It will
// wait for all the promises to run and get their output (resolve or rejected)

// lets say in this example Promise.allSettled([p1, p2, p3])
// p2 gets rejected
// After 3 seconds all the promises will get settled.
// We will get this as output : [val1, err, val3]

// The output of promise.allSettled() will be an array of the same no of promises we passed in

// ---------------------------------------------------------------------------------------------------------

// Promise.race()

// promise.race() takes iterable (arrays) as input which are promises.
// Returns the result of promise which gets settled first (can be resolved or rejected)

// example
// val = Promise.race([p1, p2, p3])
// p1 takes 3 seconds
// p2 takes 1 seconds
// p3 takes 2 seconds
// val is the output

// The promise which gets settled first is the output of promsie.race([p1, p2, p3])
// It can be resolved or it can be rejected

// In our example p2 will be the output in 1 second if it gets resolved

// If p2 gets rejected, then error is thrown after 1 second. This error is the same error thrown by p2.

// ---------------------------------------------------------------------------------------------------------

// Promise.any()

// promise.any() takes iterable (arrays) as input which are promises.
// The promise which gets "resolved" first is the output of promsie.any([p1, p2, p3])

// Seeking for first success

// example
// val = Promise.any([p1, p2, p3])
// p1 takes 3 seconds
// p2 takes 1 seconds
// p3 takes 2 seconds
// val is the output

// In our example p2 will be the output in 1 second if it gets resolved

// If p2 gets rejected, then p3 will be the output 
// as it is the next candidate which gets resolved after p2.

// If all the promises gets rejected, then returned resutl will be an aggregated error.
// This aggregated error will be an array of all the errors thrown by every promise.
// [err1, err2, err3] = promise.any([p1, p2, p3]) // If all promises gets rejected

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------


// // Implementation for Promise.all()

// // All success

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000);
// })

// Promise.all([p1, p2, p3])
// .then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// // Output = [ 'P1 Success', 'P2 Success', 'P3 Success' ]

// ---------------------------------------------------------------------------------------------------------

// // p2 fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fail"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000);
// })

// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // Output = P2 Fail

// ---------------------------------------------------------------------------------------------------------

// // p3 fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P3 Fails"), 2000);
// })

// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res);0
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // Output = P3 Fails (after 2 seconds)

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // Implementation for Promise.allSettled()

// // All success

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P2 Success"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P2 Success"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // Output = [
// //   { status: 'fulfilled', value: 'P1 Success' },
// //   { status: 'fulfilled', value: 'P2 Success' },
// //   { status: 'fulfilled', value: 'P2 Success' }
// // ]

// ---------------------------------------------------------------------------------------------------------

// // p2 fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P2 Fails"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P2 Success"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // Output = [
// //     { status: 'fulfilled', value: 'P1 Success' },
// //     { status: 'rejected', reason: 'P2 Fails' },
// //     { status: 'fulfilled', value: 'P2 Success' }
// //   ]

// ---------------------------------------------------------------------------------------------------------

// // p1 and p2 fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P1 Fails"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P2 Fails"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P2 Success"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // Output = [
// //     { status: 'rejected', reason: 'P1 Fails' },
// //     { status: 'rejected', reason: 'P2 Fails' },
// //     { status: 'fulfilled', value: 'P2 Success' }
// //   ]

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // Implementation for Promise.race()

// // All success

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000);
// })

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // Output = P2 Success

// ---------------------------------------------------------------------------------------------------------

// // P2 fails

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fails"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000);
// })

// Promise.race([p1, p2, p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// // Output = P2 Fails

// ---------------------------------------------------------------------------------------------------------

// // P1 and P2 fails

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P1 Fails"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fails"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000);
// })

// Promise.race([p1, p2, p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// // Output = P2 Fails

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // Implementation for Promise.any()

// // All success

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P2 Success"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P3 Success"), 2000);
// });

// Promise.any([p1, p2, p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // Output = P2 Success

// ---------------------------------------------------------------------------------------------------------

// // P2 Fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P2 Fails"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P3 Success"), 2000);
// });

// Promise.any([p1, p2, p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // Output = P3 Success

// ---------------------------------------------------------------------------------------------------------

// // P2 and P3 Fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("P1 Success"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P2 Fails"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P3 Fails"), 2000);
// });

// Promise.any([p1, p2, p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // Output = P1 Success

// ---------------------------------------------------------------------------------------------------------

// // P1, P2 and P3 Fails

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P1 Fails"), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P2 Fails"), 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("P3 Fails"), 2000);
// });

// Promise.any([p1, p2, p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // Output = [AggregateError: All promises were rejected] {
// //     [errors]: [ 'P1 Fails', 'P2 Fails', 'P3 Fails' ]
// //   }

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------