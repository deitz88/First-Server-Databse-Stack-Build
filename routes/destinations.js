const express = require('express');
const router = express.Router();
const destinationsCTRL = require('../controller/destinations');

router.post('/flights/:id/destinations', destinationsCTRL.create)

module.exports = router;