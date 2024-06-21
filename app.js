const express = require('express')
const app = express()
const port = 8888;


app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// fire up the server
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
