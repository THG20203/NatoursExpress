const tourRouter = express.Router();

/* below only want route / cause we're in the router anyway */
tourRouter.route('/').get(getAllTours).post(createTour);
/* below only want id  cause we're in the router anyway */
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);
