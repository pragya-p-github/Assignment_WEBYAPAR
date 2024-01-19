const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');

router.post('/login', adminController.login);
router.get('/dashboard', adminController.dashboard);
router.post('/createUser', adminController.createUser);
router.get('/viewUser/:userId', adminController.viewUser);
router.delete('/deleteUser/:userId', adminController.deleteUser);

module.exports = router;
