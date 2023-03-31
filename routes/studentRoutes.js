const express = require('express')
const studentController = require('../controller/studentController')

const router = express.Router();

router.get('/', studentController.getAllStudent)
router.post('/', studentController.addStudent)
router.post('/email', studentController.emailSender)

module.exports = router