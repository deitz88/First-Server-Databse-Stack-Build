const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    arrCreate,
    delete: deleteFlight
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res) {
    Flight.find({}, function(err, flights) { // the callback is after the db is like okay we did our thing
      console.log(flights)
      // now lets respond to the clinet
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) { 
    if (err) return res.redirect('/flights/new');
    console.log(flight);
    res.redirect('/flights');
  })
};

function arrCreate(req, res) {
  const flight = new Destination(req.body);
  flight.save(function(err) { 
    if (err) return res.redirect('/flights/:id');
    console.log(flight);
    res.redirect('/flights:id');
  })
};

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err) {
    console.log('deleting button works in flights router')
      res.redirect('/flights');
    });
  };

  function show(req, res) {
    Flight.findById(req.params.id).populate('ticket').exec(function(err, flight) { 
        Ticket.find(
          {_id: {$nin: flight.ticket}},
          function(err, ticket){
            res.render('flights/show', { title: 'Flight Detail', flight, ticket});
          }
        )
      })
  }