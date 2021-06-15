const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addToFlight,
    delete: deleteTicket,
    index
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
      flight.save(function(err){
        res.redirect(`/flights/${flight._id}`)
      })
    })
  };

  function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.id, function(err) {
      console.log('deleting button works in flights router')
        res.redirect('/tickets');
      });
    };
    
    function index(req, res) {
        Ticket.find({}, function (err, tickets) {
            res.render('tickets/index', { title: 'Add Ticket', tickets});
          })
        }