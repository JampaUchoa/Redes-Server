const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'files')));

// Handles any requests that don't match the ones above
app.use(function (req, res, next) {
  res.status(404).send("Desculpe, mas não conseguimos encontrar a pagina solicitada")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('500: Algo deu errado!')
})

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);