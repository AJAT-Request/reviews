const faker = require('faker');
// const moment = require('moment');
const connection = require('./index.js');

const getRandomIntInclusive = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const padNumberIfNeeded = (number) => {
  if (number.toString().length === 1) {
    return `0${number}`;
  }
  return number;
};

for (let i = 0; i <= 100; i += 1) {
  const month = padNumberIfNeeded(getRandomIntInclusive(1, 12));
  const day = padNumberIfNeeded(getRandomIntInclusive(1, 30));
  const review = {
    name: faker.name.firstName(),
    text: 'Lorem ipsum',
    image_url: faker.image.avatar(),
    date: `2018-${month}-${day}`,
    accuracy: getRandomIntInclusive(1, 5),
    communication: getRandomIntInclusive(1, 5),
    cleanliness: getRandomIntInclusive(1, 5),
    location: getRandomIntInclusive(1, 5),
    checkin: getRandomIntInclusive(1, 5),
    value: getRandomIntInclusive(1, 5),
  };
  const query = 'INSERT INTO review (name, review_text, image_url, date_posted, accuracy_rating, communication_rating, cleanliness_rating, location_rating, checkin_rating, value_rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [review.name, review.text, review.image_url, review.date,
    review.accuracy, review.communication, review.cleanliness, review.location,
    review.checkin, review.value], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully inserted into DB');
    }
  });
}
