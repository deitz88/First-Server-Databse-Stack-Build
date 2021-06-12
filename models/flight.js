const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const newD = new Date();

const destinationSchema = new Schema({
   airport: {
      type: String,
      values: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
      message: '{VALUE} must be ATL, DFW, DEN, LAX, or SAN'
      },
   arrival: Date
   },
   {
   timestamps: true
})


const flightSchema = new Schema({
   airline: {
      type: String,
      enum: {
         values: ['American', 'Delta', 'Southwest', 'United'],
         // message: '{VALUE} must be American, Delta, Southwest, or United'
         },
    },
   airport: {
      type: String,
      enum: {
         values: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
         // message: '{VALUE} must be ATL, DFW, DEN, LAX, or SAN'
         },
      default: 'DEN',
      },
   flightNo: {
      type: Number,
      min: [10, 'Must be between 10 and 9999, got {VALUE}'],
      max: [9999, 'Must be between 10 and 9999, got {VALUE}']
      },
   departs: {
      type: Date,
      // default: 
    },
    destinations: [destinationSchema]
   },  
   {
   timestamps: true
});
//compiles schema to export
module.exports = mongoose.model('Flight', flightSchema);