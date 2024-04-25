/* need to import the express module */
const express = require('express');
/* tourController now effectively an object */
const tourController = require('./../controllers/tourController');

/* calling it router rather than tourRouter because of convention */
const router = express.Router();

/* below only want route / cause we're in the router anyway */
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
/* below only want id  cause we're in the router anyway */
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

/* export router - only one thing to export so module.exports */
module.exports = router;
