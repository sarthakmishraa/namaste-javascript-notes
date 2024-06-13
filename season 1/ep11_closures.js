// closures
/*
A closure is the combination of a function bundled together (enclosed) with references
to its surrounding state (the lexical environment).

closures = function + its surrounding state references(variables, const)

In other words, a closure gives you access to an outer function's scope
from an inner function.

In JavaScript, closures are created every time a function is created, at function creation time.
*/



// // example 1

// console.log("Hello this is my fifth episode program of namaste javascript season 1");

// function x() {

//     var a = 100;
//     function y() {

//         var b = 200;
//         function z() {
//             console.log(a, b);
//         }
//         return z;
//         // z();
//     }
//     return y;
//     // y();
// }

// y_needstobecalled = x();
// z_needstobecalled = y_needstobecalled();
// z_needstobecalled();

// console.log(y_needstobecalled);
// console.log(z_needstobecalled);



// // example 2

// function a() {
//     var x = 10, y = 20;
//     return function b() {
//       console.log(x);
//       console.log(y);
//     }
// }

// a()();



// // example 3

// function outer() {
//     var x = 1;

//     function inner() {
//         console.log(x);
//     }
//     inner();

// }

// outer();