const fs = require('fs');
/* express = function which on calling will add a load of methods to our app 
variable below. */
const express = require('express');
const app = express();

/* express.json is middleware - middelware can modify the incoming request data.
middleware is between req and res. step the request goes through whilst being processed. */
app.use(express.json());

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

/* get route - retrieve data from server */
app.get('/api/v1/tours', (req, res) => {
  /* when someone hits route, send back all the tours. tours is the resource */
  res.status(200).json({
    /* JSend formatting standard for what to send back */
    status: 'success',
    /* gettings results results cause its an array with multiple objects */
    results: tours.length,
    data: {
      tours,
    },
  });
});

/* Responding to URL parameters */
/* :id -> creating a varialbe like this */
app.get('/api/v1/tours/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

/* post route - this is the request we now want to handle. As spoke about
in rest api lecture, url is exactly the same - no matter if we want to get all the tours
or if we want to create a new tour. url is the same - only thing that changes is the http
method. */
/* get to get all the tours, post to create a new tour */
app.post('/api/v1/tours', (req, res) => {
  /* post request can send data from the client to the server, and this data = ideally 
  available on the request. req object holds all the data / information about the request that 
  was done */
  /* want to create newId on the end, so get length of tour using length - 1 then ->
  do + 1 to add it onto end. */
  const newId = tours[tours.length - 1].id + 1;
  /* could have done req.body.id = newId but didn't want to mutate the body object */
  const newTour = Object.assign({ id: newId }, req.body);
  /* tours is array of 9 tours we have at this point, push new tour into it */
  tours.push(newTour);

  /* persist it into the file? We are in callback function that'll run in the event loop
  and we can never block event loop so don't use synchronous one. */
  fs.writeFile(
    /* overwriting the file below */
    `${__dirname}/dev-data/data/tours-simple.json`,
    /* data we want to overwrite is tours - remember stringify this object */
    JSON.stringify(tours),
    /* callback function with write file just has error */
    (err) => {
      /* send newly created object as response. status code of 201 - means created */
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

const port = 3000;
/* to app.listen passing in port created in variable above and a callback 
function. This callback function will be called as soon as the server starts 
listening */
/* start listening after all routes are defined */
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
