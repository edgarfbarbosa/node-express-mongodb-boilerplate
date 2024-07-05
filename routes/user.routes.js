const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser
} = require('./../controllers/user.controller');

router.route('/').get(getAllUsers).post(postUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
