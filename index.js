const express = require('express');
const isomorphicFetch = require('isomorphic-fetch');

const app = express();
const carJson = 'https://s3.amazonaws.com/elasticbeanstalk-us-east-1-253941727413/interview/car.json';

//Make more strict.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, response) {
  isomorphicFetch(carJson)
    .then(res => res.json())
    .then(json => response.send(json));
})

app.listen(1337, () => {
  console.log('Listen on 1337')
});
