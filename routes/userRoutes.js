/* need to import the express module */
const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

/* new users route */
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

/* export router - only one thing to export so module.exports */
module.exports = router;
