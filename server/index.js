const express = require('express');
const path = require('path');
const app = express();
const faker = require('faker');


app.use(express.static('../client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', '/index.html'));
});

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
var fakerImage = faker.image.imageUrl();

console.log(randomName, randomEmail, fakerImage);


app.listen(3000, () => {
  console.log('listening on port 3000');
})
