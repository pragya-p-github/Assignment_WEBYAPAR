const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.post('/login', userController.login);
router.post('/submitDetails', userController.submitDetails);
router.get('/viewDetails/:userId', userController.viewDetails);

module.exports = router;
