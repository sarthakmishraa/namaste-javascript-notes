/*
calculate(arr, logic) method is a higher order function, it takes a logic() method
Reusability of code is there in the above logic
*/

// radius = [3, 1, 2, 4];

// const logicArea = function(radius) {
//     return Math.PI * radius * radius;
// }

// const logicCircumference = function(radius) {
//     return 2 * Math.PI * radius;
// }

// const logicDiameter = function(radius) {
//     return 2 * radius;
// }

// const calculate = function (radius, logic) {
//     const output = []
//     for (let i=0; i< radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, logicArea));
// console.log(calculate(radius, logicCircumference));
// console.log(calculate(radius, logicDiameter));

/*
Array.prototype.function_name makes a function to be used like this:
array.function(args)

when using Array.prototype.function_name, "this" keyword in the function definition
points to the array

*/

const radius = [3, 1, 2, 4];

const logicArea = function(radius) {
    return Math.PI * radius * radius;
}

const logicCircumference = function(radius) {
    return 2 * Math.PI * radius;
}

const logicDiameter = function(radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (logic) {
    const output = []
    for (let i=0; i< this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(logicArea));
console.log(radius.calculate(logicCircumference));
console.log(radius.calculate(logicDiameter));

/*
// Area
const calculateArea = function (radius) {
    const output = []
    for (let i=0; i< radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));

// Circumference
const calculateCircumference = function (radius) {
    const output = []
    for (let i=0; i< radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius));

// Diameter
const calculateDiameter = function (radius) {
    const output = []
    for (let i=0; i< radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius));
*/