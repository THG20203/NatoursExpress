const fs = require('fs');
/* express = function which on calling will add a load of methods to our app 
variable below. */
const express = require('express');
const app = express();

/* Define routes. First define route url. Callback function after /
this callback needs request and response */
/* Node is about requests and responses. */
/* app.get('/', (req, res) => {
  /* what we want to do is send back data very quickly */
/* with json method, we can pass in an object */
/* res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
}); */

/* route for post method */
/* app.post('/', (req, res) => {
  res.send('You can post to this endpoint');
}); */

/* before send data need to read it, do it before route handler */
/* {__dirname} where the current script is located - so main folder */
/* JSON.parse so data we have in here will be converted to an array of javascript objects */
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  /* when someone hits route, send back all the tours. tours is the resource */
  res.status(200).json({
    /* JSend formatting standard for what to send back */
    status: 'success',
    data: {
      tours,
    },
  });
});

const port = 3000;

/* to app.listen passing in port created in variable above and a callback 
function. This callback function will be called as soon as the server starts 
listening */
/* start listening after all routes are defined */
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
