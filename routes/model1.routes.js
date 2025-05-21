const express = require('express');
const myModel = require('../models/model1');
const router = express.Router();
router.get('/module1',myModel);
// 
module.exports = router;