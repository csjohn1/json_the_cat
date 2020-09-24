const request = require('request');
const fetch = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${fetch}`, (error, response, body) => {

  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  
  if (data[0]) {
    return console.log(data[0].description);
  } else {
    return console.log('Error: some sort of error likely related to breed name or some such');
  }
});
