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
