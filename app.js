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

/* route for post method */
app.post('/', (req, res) => {
  res.send('You can post to this endpoint');
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

//// SERVER DEFINITIONS
/* GET: This method is used to RETRIEVE DATA from the server. It should not 
change the state of the server and should be idempotent, meaning calling it 
once or several times successively should have the same effect 
(no side effects). */
/* GET requests are often used to fetch documents, web pages, and data 
from APIs. */

/* POST: This method is used to SEND DATA to the server to create or 
update a resource. POST requests are often used when submitting form 
data or uploading a file. Unlike GET requests, POST requests do change 
the server state and are not idempotent. */

/* req (Request): This object represents the HTTP request and has 
properties for the request query string, parameters, body, HTTP headers, 
etc. Essentially, req is how you access anything INCOMING to your server, 
such as user data in forms, JSON payloads, or parameters in the URL. */

/* res (Response): This object represents the HTTP response that an 
Express app SENDS when it receives an HTTP request. You manipulate the 
res object to define what the response will be to the client, 
whether it's setting headers, sending response codes, or outputting 
response body content. */

/* API is a set of rules and specifications that allows one application 
to interact with another. When dealing with web APIs, it usually 
involves sending requests over HTTP and receiving responses. 
For example, my Express app is a simple API that can respond to 
HTTP GET and POST requests. */

/* API - Application Programming Interface - piece of software that can be used
by another piece of software in order to make applications talk to each other. */

/* Application can be other things */

/* REST 
Representational State Transfer, is an architectural style 
that defines a set of constraints and properties based on HTTP.
- Seperate API into logical resources
resources are objects or representation of something, which
data associated to it. Any information that can be named can be
a resource. 

- Expose structured resource based URL's
example of this:
https://www.natours.com/addNewTour
-> all of it is URL
-> addNewTour bit is the endpoint 

Endpoints should contain only resources (nouns), and use HTTP 
methods for actions.

- Use HTTP methods (verbs)

How should endpoint look in practice?
/addNewTour -> POST /tours send data to survey - create new resources. no id, server will work out id for resource
/getTour -> GET /tours/7 (note tours - plural) 7 would be for tour id GET would be for read method
/updateTour -> PUT /tours/7 (client is meant to send entire updated object)
            -> PATCH /tours/7 -> (patch = only the part of the object that has been changed)

PUT & PATCH = update existing resource. Sending data like POST

/deleteTour -> DELETE /tours/7 

POST, GET, PUT, PATCH, DELETE -> HTTPS methods to allow client to perform four basic CRUD operations
Create, Read, Update and Delete

/getToursByUser -> GET  /users/3/tours
/deleteToursByUser -> DELETE    /users/3/tours/9

- Send data as JSON (usually) 
JSON is lightweight data interchange format used by web apis coded in any programming languages
json is formatting - jsend status success failure or error then data object (enveloping)

-Be stateless 
All state is handled on the client. This means that each request must contain all the information
necessary to process a certain request. The server should not have to remember previous requests.
*/
