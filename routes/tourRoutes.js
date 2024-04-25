/* need to import the express module */
const express = require('express');

/* calling it router rather than tourRouter because of convention */
const router = express.Router();

/* below only want route / cause we're in the router anyway */
router.route('/').get(getAllTours).post(createTour);
/* below only want id  cause we're in the router anyway */
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

/* export router - only one thing to export so module.exports */
module.exports = router;
