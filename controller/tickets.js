const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addToFlight
  };
  
  function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
      res.redirect('/tickets/new');
    });
  }
  
  function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
      res.render('tickets/new', { title: 'Add Ticket', tickets});
    })
  }
  
  function addToFlight(req, res){

    Flight.findById(req.params.id, function(err, flight){
      flight.ticket.push(req.body.ticketId);
      //after selecting and adding, need to save.
      flight.save(function(err){
        res.redirect(`/flights/${flight._id}`)
      })
    })
  };