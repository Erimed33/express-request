const express = require('express')
const app = express()
// const port = 8888;

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

 //Search pokemon by name

 app.get('/pokemon/search/:name', (req, res) => {

  // name request
  const nameToFind  = req.params.name.toLowerCase()

// find pokemon in the array in object
  const foundPokemon = pokemon.find(p => p.name.toLowerCase() === nameToFind.toLowerCase())

  if (!foundPokemon) {
    res.status(404).send(`sorry no pokemon with name: ${nameToFind}`)
  
  } else {

    res.send(foundPokemon)
  }
})


app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})
// route to home
app.get('/bugs', (request, response) => {
    response.send(`
      <h1>99 little bugs in the code</h1>
      <a href="/bugs/101">pull one down, patch it around</a>
    `);
  });

  // route for bug count
  app.get('/bugs/:numberOfBugs', (request, response) => {
    const numberOfBugs = parseInt(request.params.numberOfBugs, 10)
    if (numberOfBugs > 200) {
        response.send(`
          <h1>${numberOfBugs} little bugs in the code</h1>
          <a href="/bugs">Start over</a>
        `);
      } else {
        response.send(`
          <h1>${numberOfBugs} little bugs in the code</h1>
          <a href="/bugs/${numberOfBugs + 2}">pull one down, patch it around</a>
        `);
      }
    });


    // POKE-EXPRESS ROUTE!
    app.get('/pokemon', (request, respond) => {
      respond.json(pokemon)
    })
// looking up pokemon with an index
    app.get('/pokemon/:indexOfArray', (request, respond) => {
      const indexOfArray = parseInt(request.params.indexOfArray, 10)
      // if someone puts a number less than 0 or a word return sorry string
      if (isNaN(indexOfArray) || indexOfArray < 0 || indexOfArray >= pokemon.length) {
       respond.send(
        `<h1>sorry, no pokemon found at /pokemon[${indexOfArray}]</h1>`)
      } else {
        const selectedIndexPokemon = pokemon[indexOfArray]
      respond.send(selectedIndexPokemon)

      }
    })


   
    
   
  
module.exports = app
