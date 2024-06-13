// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // async

// // async keyword is used to make a function asynchronous
// // when we make a function asynchronous, it always returns a promise

// // if we return a promise, it returns that as it is.
// // otherwise it wraps the value that we return in a promise and then returns it

// async function getData() {
//     return "Learning JavaScript from Akshay Saini's youtube channel";
// }

// const dataPromise = getData();

// console.log(dataPromise);

// // Output = Promise { "Learning JavaScript from Akshay Saini's youtube channel" }

// dataPromise
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// // Output = Learning JavaScript from Akshay Saini's youtube channel

// ---------------------------------------------------------------------------------------------------------

// const pr = new Promise((resolve, reject) => {
//     resolve("Output from promise pr");
// })

// async function getData() {
//     return pr;
// }

// const dataPromise = getData();

// console.log(dataPromise);

// dataPromise
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// // Output = Promise { <pending> }
// // Output from promise pr

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // async await

// // async await is used to handle promises
// // "await" keyword can only be used inside an async function
// // we write "await" keyword in front of a promise

// const pr = new Promise((resolve, reject) => {
//     resolve("Promise resolved value");
// })

// async function getData() {
//     const value = await pr;
//     console.log(value);
// }

// getData();

// // Output = Promise resolved value

// ---------------------------------------------------------------------------------------------------------

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value");
//     }, 5000);
// })

// async function getData() {
//     const value = await pr;
//     console.log(value);
// }

// getData();

// // Output = Promise resolved value

// ---------------------------------------------------------------------------------------------------------

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value");
//     }, 3000);
// })

// function getData() {
//     pr.then((res) => console.log(res));
//     console.log("This will get printed first");
// }

// getData();

// // Output = This will get printed first
// // (After 3 seconds) Promise resolved value

// // JS engine does not wait for promise to resolve, it moves on and executes the code after that.
// // Once the promise gets settled, it prints the result

// ---------------------------------------------------------------------------------------------------------

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value");
//     }, 3000);
// })

// async function getData() {
//     const value = await pr
//     console.log(value);
//     console.log("This will get printed second as we use async await");
// }

// getData();

// // Output = (After 3 seconds)Promise resolved value
// // This will get printed second as we use async await

// // When we use async await, JS engine waits for the promise to get settled

// ---------------------------------------------------------------------------------------------------------

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value");
//     }, 3000);
// })

// async function getData() {

//     console.log("FIRST LINE");

//     const value1 = await pr
//     console.log(value1);
//     console.log("This will get printed second");

//     const value2 = await pr
//     console.log(value2);
//     console.log("This will get printed third");
// }

// getData();

// // Output = FIRST LINE
// // (After 3 seconds)
// // Promise resolved value
// // This will get printed second
// // Promise resolved value
// // This will get printed third

// // When we use async await, JS engine waits for both the promises to get settled

// ---------------------------------------------------------------------------------------------------------

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First Promise");
//     }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Second Promise");
//     }, 2000);
// });

// async function getData() {
//     console.log("FIRST LINE OF getData");

//     const value1 = await p1;
//     console.log(value1);

//     const value2 = await p2;
//     console.log(value2);
// }

// getData();

// // Promises are computed simultanelouly and they are returned which ever gets settled first.

// // if p1 takes 5 seconds
// // and p2 takes 2 seconds

// // as they execute in this order p1 then p2
// // so p1 will get printed first then p2 but by the time p1 is settled, p2 will be ready


// // if p1 takes 4 seconds
// // and p2 takes 6 seconds

// // as they execute in this order p1 then p2
// // so p1 will get printed first then p2


// // Explanation (BTS)
/*
When JS engine sees "await" keyword, it suspends the function and settles that promise.
After settling that promise, it continues the execution of the function from where it left.

In the above example where p1 takes 4 sec and p2 takes 6 sec
after 4 seconds p1 prints and then when JS engine get to await for p2,
it waits for 2 seconds to complete waiting of 6 seconds for p2

And in the example where p1 takes 5 sec and p2 takes 2 sec
after 5 seconds p1 prints and then when JS engine get to await for p2,
it prints p2 as p2 would have been already been settled
*/

// ---------------------------------------------------------------------------------------------------------

// API_URL = "https://api.github.com/users/sarthakmishraa"

// async function getData() {
//     const data = await fetch(API_URL);

//     const jsonValue = await data.json()

//     console.log(jsonValue);
// }

// getData();

// ---------------------------------------------------------------------------------------------------------

// // Error Handling

// API_URL = "https://api.github.com/users/sarthakmishrasssa"

// async function getData() {

//     try{
//         const data = await fetch(API_URL);

//         const jsonValue = await data.json()

//         console.log(jsonValue);
//     }
//     catch (err) {
//         console.log(err);
//     }
    
// }

// getData();

// // Output when error is thrown
// /*
// {
// message: 'Not Found',
// documentation_url: 'https://docs.github.com/rest/users/users#get-a-user'
// }
// */

// // When await fetch(API_URL) gets an error, it does not continues by going to the next line
// // rather it throws the error to catch block

// ---------------------------------------------------------------------------------------------------------

// // Another(traditional) way to handle errors using .catch()

// API_URL = "https://api.github.com/users/sarthakmishraa"

// async function getData() {
//     const data = await fetch(API_URL);

//     const jsonValue = await data.json()

//     console.log(jsonValue);
// }

// getData().catch((err) => {
//     console.log(err);
// });

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------