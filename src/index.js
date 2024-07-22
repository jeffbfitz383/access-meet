//const fetch = require('node-fetch');

console.log("index.js works");

fetch("http://localhost:3000/events")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching events:', error);
  }); 