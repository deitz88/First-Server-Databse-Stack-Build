const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    arrCreate
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

//   function create(req, res) {
//     Flight.create(req.body, function(err, doc){
//         if(err) return res.render('flights/new');
//         //the response should always be in callback function i.e. the redirect. (res)
//         res.redirect('flights/');
//     })
// }
function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Detail', flight });
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