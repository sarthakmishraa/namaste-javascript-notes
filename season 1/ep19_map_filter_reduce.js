// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// // map()

/*
An array is passed in map() and then it applies the operation 
to the array to each values passed to it.
Operation is a function
*/

// const array = [5, 1, 3, 2, 6];

// console.log(array);

// function double (x) {
//     return 2*x;
// }

// console.log(array.map(double));


// function triple (x) {
//     return 3*x;
// }

// console.log(array.map(triple));

// function binary(x) {
//     return x.toString(2);
// }

// console.log(array.map(binary));

// // using function inside map()

// console.log(array.map(function binary(x) {
//     return x.toString(2);
// }));

// // using arrow function

// console.log(array.map((x) => x.toString(2)));

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// filter

/*
We pass a condition/operation in filter(),
so the values in the array that satisfies the condition are move forward in the result.
This condition/operation is a function that is passed in filter()
*/

// const array = [5, 1, 3, 2, 6];

// function isOdd (x) {
//     return x%2;
// }

// function isEven (x) {
//     return x%2===0;
// }

// // using higher order function

// console.log(array.filter(isOdd));
// console.log(array.filter(isEven));

// // passing functions directly in filter()

// console.log(array.filter(function isOdd(x){
//     return x%2;
// }));

// console.log(array.filter(function isOdd(x){
//     return x%2===0;
// }));

// // passing anonymous functions directly in filter()

// console.log(array.filter(function (x){
//     return x%2;
// }));

// console.log(array.filter(function (x){
//     return x%2===0;
// }));

// // using arrow functions

// console.log(array.filter((x) => x%2));
// console.log(array.filter((x) => x%2===0));

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// reduce

/*
We pass an array in reduce() and we get one value out of it

reduce((accumulator, current)=> {}, arg2)

For reduce(arg1, arg2)

arg1 is the function passed

arg2 is the initial value of the accumulator

*/

// const array = [5, 1, 3, 2, 6];

// const sum = array.reduce((accumulator, current) => {
//     accumulator = accumulator + current;
//     return accumulator;
// }, 0)

// console.log(sum);

// const max = array.reduce((accumulator, current) => {
//     if(accumulator < current){
//         accumulator = current;
//     }
//     return accumulator
// })

// console.log(max);

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

const users = [
    {firstName: "sarthak", lastName: "mishra", age: 24},
    {firstName: "ayushman", lastName: "vashistha", age: 24},
    {firstName: "videh", lastName: "verma", age: 25},
    {firstName: "macdonald", lastName: "trumph", age: 75}
];

// // sample use case of map

// // printing firstname, lastname and age of all the users

// const output = users.map((x) => x.firstName + " " + x.lastName + " is " + x.age + " years old.");

// console.log(output);

// ------------------------------------------------------------------------------------------------------------

// // printing firstname, lastname and age of all the users whose age is 24

// const ageFilterOutput = users.filter((x) => {
//     if(x.age === 24) {
//         console.log(x.firstName + " " + x.lastName + " is "+ x.age + " years old");
//     }
// })

// console.log(ageFilterOutput);

// ------------------------------------------------------------------------------------------------------------

// // printing no of users with a particular age

// const ageCountOutput = users.reduce((accumulator, current) => {
//     if(accumulator[current.age]){
//         accumulator[current.age] += 1;
//     }
//     else {
//         accumulator[current.age] = 1
//     }

//     return accumulator;
// }, {});

// console.log(ageCountOutput);

// ------------------------------------------------------------------------------------------------------------

// // printing no of users with a particular age using filter() and map()

// const firstNameWithAgeCondition = users.filter((x) => x.age<30).map((x) => x.firstName)

// console.log(firstNameWithAgeCondition);

// ------------------------------------------------------------------------------------------------------------

// printing no of users with a particular age using reduce()

const firstNameWithAgeConditionUsingReduce = users.reduce((acc, curr) => {
    if (curr.age<30){
        acc.push(curr.firstName);
    }
    return acc
}, [])

console.log(firstNameWithAgeConditionUsingReduce);