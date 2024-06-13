// How functions work in javascript and variable environment

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 5;
    console.log(x);
}

function b() {
    var x = 10;
    console.log(x);
}

/*

|                          |
|                          |
|                          |
|__________________________|

Stack (empty)

|                          |
|                          |
| global execution context |
|__________________________|

Stack (line 6)
x : undefined
a : func a() definition
b : func b() definition

|                          |
| func a execution context |
| global execution context |
|__________________________|

Stack (executes a)

|                          |
| func b execution context |
| global execution context |
|__________________________|

Stack (executes b)

|                          |
|                          |
| global execution context |
|__________________________|

Stack (line 9)

|                          |
|                          |
|                          |
|__________________________|

Stack becomes empty when it reaches the end of the code

*/