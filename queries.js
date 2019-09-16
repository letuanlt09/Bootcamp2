/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
  mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  Listing.find({'name':'Library West'},function(err,listings){
    if(err){
      console.log("findLibraryWest err");
      throw err;
    }
    console.log(listings);

  });

  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.findOneAndRemove({'code':'CABL'},function(err){
    if(err){
      console.log("removeCable err");
      throw err;
    }
    console.log('Remove successfully');
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({'name':'Phelps Laboratory'},{'address':"1953 Museum Rd, Gainesville, FL 32603"},function(err,listFound){
    if(err){
      console.log("updatePhelpsLab err");
      throw err;
    }
    console.log('Update successfully');
  });

  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find(function(err,listings){
    if(err){
      console.log("retrieveAllListings err");
      throw err;
    }
    console.log(listings);
  })
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
