const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return console.log(error);
    }
    const data = JSON.parse(body);
  
    if (data[0]) {
      callback(null, data[0].description);
      // return console.log(data[0].description);
    } else {
      callback('breed not found');
      // return console.log('Error: some sort of error likely related to breed name or some such');
    }
  });
};

module.exports = { fetchBreedDescription };