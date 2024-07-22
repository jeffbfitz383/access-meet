//const fetch = require('node-fetch');

console.log("index.js works");

fetch("http://localhost:3000/events")
  .then(response => response.json())
  .then(json => {
    eventData = json

    eventData.forEach(event => {
        createEventCards(event);
    });
  })
    
 
  
  .catch(error => {
    console.error('Error fetching events:', error);
  }); 

  function createEventCards(event) {
    console.log("hello")
  }