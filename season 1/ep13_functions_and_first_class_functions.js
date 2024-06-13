// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// function statement
a();

function a() {
    console.log("a called");
}


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// function expression
var x = function b() {
    console.log("b called");
}

x();

/*
difference between function statement and function expression is that
hoisting is possible for function statement i.e. call a() before a definiton
*/

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// anonymous function
/*
function with no names are anonymous functions
they should be function expressions otherwise we will get syntax error
*/
var y = function () {
    console.log("anonymous function");
}

y();

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// named function expression
/*
function expression with function having names are named function expression
*/
var z = function c() {
    console.log("named function expression");
}

z();

/*
if I call c() in named function expression example, i get reference error that c is not defined
I can use c() inside c's block scope, but not outside 
*/

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// parameters and arguments

/*
parameters - when we define a function and pass values/variable to it (), they are known as parameters

arguments - when we call a function and pass values/variable to it (), they are known as arguments
*/

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// first class functions / first class citizens
/*
ability to use functions as values is first class functions
*/

// function d(param1) {
//     console.log(param1);
//     console.log("d called");
// }

// d(function () {
//     console.log("passed in d() as a parameter");
// });

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------