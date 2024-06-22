const express = require('express')
const app = express()
const port = 8888;

const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);


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

    app.get('/pokemon', (request, respond) => {
      respond.json(pokemon)
    })

    
   
  

// fire up the server
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
