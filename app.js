/* express = function which on calling will add a load of methods to our app 
variable below. */
const express = require('express');
const app = express();

const port = 3000;

/* Define routes. First define route url. Callback function after /
this callback needs request and response */
/* Node is about requests and responses. */
app.get('/', (req, res) => {
  /* what we want to do is send back data very quickly */
  /* with json method, we can pass in an object */
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

/* to app.listen passing in port created in variable above and a callback 
function. This callback function will be called as soon as the server starts 
listening */
/* start listening after all routes are defined */
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
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
