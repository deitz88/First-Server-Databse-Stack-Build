const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controller/tickets');

router.get('/tickets/new', ticketsCtrl.new);
router.get('/tickets', ticketsCtrl.index)
router.post('/tickets', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight)
router.post('/tickets/:id', ticketsCtrl.delete)
module.exports = router;