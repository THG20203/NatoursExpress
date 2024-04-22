/* express = function which on calling will add a load of methods to our app 
variable below. */
const express = require("express");

const port = 3000;
/* to app.listen passing in port created in variable above and a callback 
function. This callback function will be called as soon as the server starts 
listening */ 
app.listen(port, () => {

});

///// CALLBACK FUNCTION DEFINITION 
/* A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of 
 routine or action */
 /* Callbacks are often used in asynchronous programming, such as in handling 
 events, server requests, or delays (like timeouts). */

///// SYNCHRONOUS JAVASCRIPT 
/* Synchronous programming in JavaScript refers to the straightforward execution
of code in sequence. Each statement completes before the next one begins. This 
blocking nature means that code that takes a long time to execute can block the 
thread, making the user interface unresponsive. */

///// ASYNCHRONOUS JAVASCRIPT 
/* Asynchronous programming allows certain operations, like accessing the network, 
reading files, or querying a database, to be executed in parallel with 
other operations without stopping or blocking the main thread. This is 
achieved using callbacks, promises, async/await, or other abstractions. */