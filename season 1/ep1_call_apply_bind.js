// call, apply and bind methods

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// // function borrowing using call()

/*
we use call() method when we want to use a function with other object
we share the function with the below syntax

"obj1.function_name.call(obj2)"

Here obj1 has function_name and we want to call that function for obj2
*/

// let name1 = {
//     firstName: "Sarthak",
//     lastName: "Mishra",
//     printName: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// let name2 = {
//     firstName: "Ayushman",
//     lastName: "Vashishtha"
// }

// name1.printName.call(name2);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // using call() method

// let name1 = {
//     firstName: "Sarthak",
//     lastName: "Mishra",
// }

// let name2 = {
//     firstName: "Ayushman",
//     lastName: "Vashishtha"
// }

// let printName = function () {
//     console.log(this.firstName + " " + this.lastName);
// }

// printName.call(name1);
// printName.call(name2);

// ---------------------------------------------------------------------------------------------------------

// // using call() method with parameters

// let name1 = {
//     firstName: "Sarthak",
//     lastName: "Mishra",
// }

// let name2 = {
//     firstName: "Ayushman",
//     lastName: "Vashishtha"
// }

// let printName = function (hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
// }

// printName.call(name1, "Indore", "Madhya Pradesh");
// printName.call(name2, "Ghaziabad", "Uttar Pradesh");

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// // using apply() method

// /*
// apply() method is very similar as call() method with parameters
// when using apply() method, we give an array which has parameters
// unlike comma seperated parameters in call() method
// */

// let name1 = {
//     firstName: "Sarthak",
//     lastName: "Mishra",
// }

// let name2 = {
//     firstName: "Ayushman",
//     lastName: "Vashishtha"
// }

// let printName = function (hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
// }

// printName.apply(name1, ["Indore", "Madhya Pradesh"]);
// printName.apply(name2, ["Ghaziabad", "Uttar Pradesh"]);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// using bind() method

/*
when we use bind() method, it takes the function and parameters that we pass in
then store them in a variable
use bind() instead of call()

we can invoke this copy later whenever we want
*/

let name1 = {
    firstName: "Sarthak",
    lastName: "Mishra",
}

let name2 = {
    firstName: "Ayushman",
    lastName: "Vashishtha"
}

let printName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

let printMyName = printName.bind(name1, "Indore", "Madhya Pradesh");

console.log(printMyName);
printMyName();

/*
Output =
[Function: bound printName]
Sarthak Mishra from Indore, Madhya Pradesh
*/