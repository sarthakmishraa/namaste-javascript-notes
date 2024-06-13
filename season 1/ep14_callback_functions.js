// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// callback functions

/*
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.
*/

setTimeout(function () {
    console.log("anonymous function called with a setTimeout of 3 seconds")
}, 3000);

function a(b) {
    console.log("a called");
    b();
}

a(function b() {
    console.log("b called");
})

// in this example b() is a callback function
// we call the outer function

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------