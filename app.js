const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'files')));

app.post('*', function (req, res) {
  treat400(res)
})

app.put('*', function (req, res) {
  treat400(res)
})

app.delete('*', function (req, res) {
  treat400(res)
})

// Handles any requests that don't match the ones above
app.use(function (req, res, next) {
  res.status(404).send("Desculpe, mas não conseguimos encontrar a pagina solicitada")
})

function treat400(res){
  return res.status(400).send('400: Parado aí mesmo escoria criminal!\n');
}

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('500: Algo deu errado!')
})

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);