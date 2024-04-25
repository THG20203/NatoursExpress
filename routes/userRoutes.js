/* need to import the express module */
const express = require('express');

const router = express.Router();

/* new users route */
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

/* export router - only one thing to export so module.exports */
module.exports = router;
