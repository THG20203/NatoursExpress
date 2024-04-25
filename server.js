const app = require('./app');

/* This is our starting file where everything starts - here where we listen to our
server */
const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
