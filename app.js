const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();
/* First middleware - morgan */
/* in morgan function can specify how we want the login to look like, going to 
use dev */
app.use(morgan('dev'));

/* express.json returns a function - then added to middle stack. */
app.use(express.json());

/* First CUSTOM middleware function */
/* next has to be third argument to the function */
app.use((req, res, next) => {
  /* so we have something that means we know the middleware is working */
  console.log('Hello form middleware');
  /* call next function so next part of req, res cycle = triggered */
  next();
});

/* Second CUSTOM middleware function */
app.use((req, res, next) => {
  /* when request happened? */
  /* newDate is right now, then date function toISOSTring convert to readable string */
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllUsers = (req, res) => {
  /* for now send back message this route is not implemented */
  /* still sending back a json object with a status of error and a message */
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const userRouter = express.Router();

/* new users route */
app.route('/').get(getAllUsers).post(createUser);
app.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

/* mounting the routers */
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
