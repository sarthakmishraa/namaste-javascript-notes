// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // this keyword

"use strict";
// ---------------------------------------------------------------------------------------------------------
// // this keyword in global space

/* 
in global space, "this" keyword is a window object

in case of browsers, global object is window thats why it is a window object

"this" keyword in global space will always have a value of global object
*/

// console.log(this);

// ---------------------------------------------------------------------------------------------------------
// // this keyword in function


/*
inside a function, the value of this keyword depends on strict/non-strict mode

in strict mode it is "undefined"
in non-strict mode it is a global object (JS replaces "this" keyword to global object)

The reason for the behaviour is 
*/
// function function1 () {
//     console.log(this);
// }

// function1();

// ---------------------------------------------------------------------------------------------------------
// // this keyword value depends on how this is called (window)


// // strict mode
// function1(); // undefined
// window.function1(); // window/global

// ---------------------------------------------------------------------------------------------------------
// // this keyword value inside a object's method

/*
difference between function and a method
When we define a function in an object, it is called a method.

Like below in obj object, function1 is defined so function1 is now a method
*/


/*
when we are inside a method, the value of "this" keyword is the object
where the method is present

Example in obj object, function1 is defined
Now when we do console log of "this"
It prints the values of obj object as output as shown below

Similarly this.a prints value of a for this which is obj object in our example
*/

// const obj = {
//     a: 10,
//     function1: function() {
//         console.log(this);
//         console.log(this.a);
//     }
// }

// obj.function1();

// // Output = { a: 10, function1: [Function: function1] }

// ---------------------------------------------------------------------------------------------------------
// // call apply and bind methods (sharing methods)

// we use these three methods when we have to share methods

/*
In this example shown below, I have 2 objects student1 and student2

I want to use printName method to print student2

I will use call() to call student1's method and use it for student2

student1.printName.call(student2); in this line the value of "this" is now student2
so we get student2 as output

*/

// const student1 = {
//     name: "Sarthak",
//     printName: function() {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// const student2 = {
//     name: "Ayushman",
// }

// student1.printName();
// student1.printName.call(student2);

// ---------------------------------------------------------------------------------------------------------
// // "this" keyword inside arrow functions

// // Inside arrow functions "this" keyword acts like it is in enclosing lexical contexts

// const obj1 = {
//     a: 10,
//     x: () => {
//         console.log(this);
//     },
// };

// obj1.x();

// // "this" keyword inside nested arrow functions

// const obj2 = {
//     b: 15,
//     x: function () {
//         const y = () => {
//             console.log(this);
//         };
//         y();
//     },
// };

// obj2.x();

/*
whenever we see an arrow function, the value of "this" keyword is the enclosing lexical context

in the above example, console.log(this) in arrow function will behave like
it was in function x() like this:
x: function () {
    console.log(this);
    }

*/

// function outer_func(){
//     console.log("This is inside outer function");
//     const inner_arrow_func = () => {
//         console.log("This is inside inner arrow function");
//         console.log(this);
//     }
// }

// outer_func();

// // Output = This is inside outer function

// ---------------------------------------------------------------------------------------------------------
// // "this" keyword inside DOM

/*
The value is reference to the HTML element
*/