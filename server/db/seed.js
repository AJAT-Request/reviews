const faker = require('faker');
const connection = require('./index.js');

// helper functions
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

// seeding Listing table in database
const rooms = [
  'Sherman Oak\'s Mansion',
  'Charles Mansion',
  'All Inclusive Garage',
  'Apple Cellar',
  'Lofty Loft',
  'Boom Room',
  'Sky Room',
  'Grand Room',
  'Beautiful 6th Floor Suite In The Tenderloin',
  'Toby\'s Guest House',
  'All Inclusive Tipi',
  'Windowless Room in Hawaii',
  'Temple of Doom Room',
  'Zildjian Loft',
  'Giants Room',
  'Edit Room',
  'Good View Room',
  'Zoom Room',
  'Data Room',
  'Broom Closet Room',
  'Dark Room for 8 People',
  'Target Theme Room',
  'Your Local Doctor\'s Office',
  'Niner\'s Theme Loft',
  'Raider\'s Theme Suite',
  'Obama\'s House',
  'The Batcave',
  'A Shack on the Moon',
  'An Underwater Dome',
  'Park Place',
  'Airbnb Headquarters',
  'Elbow Room',
  'A Tent in the Middle of the Woods',
  'The Magic Treehouse',
  'Microbrewery',
  'Hogwarts',
  'San Junipero',
  'A Quaint Cabin in Colorado',
  'Kanye West\'s Yurt at Burning Man',
  'DisneyLand\'s Haunted Mansion Ride',
  'A Tent Halfway Up Mount Everest',
  'Napa Valley Winery',
  'A Room that Elvis Stayed in One Time',
  'Inside the Hotel from the Dream in Inception',
  'Small Boat',
  'Private Island',
  'Expensive Room',
  'Cheap Room',
  'The House from Blues Clues',
  'Hot Air Balloon',
  'Stormwind City House',
  'Elwynn Forest Lodge',
  'Playboy Mansion',
  'Orgrimmar Hut',
  'Homeless Man\'s Tent',
  'Azeroth Castle',
  'Alcatraz Prison Cell',
  'Lumbridge Home',
  'Steph Curry\'s House',
  'Oracle Arena Closet',
  'Jay Z\'s Mansion',
  'Plane That Never Stops Flying Ever',
  'Galvanize Guest Suite',
  'Dunder Mifflin Closet',
  'Schrute Farms Barnyard',
  'Tinh\'s House',
  'Icelandic Rare Glacial Igloo',
  'Apple iHouse',
  'Jeff Bezos Shack',
  'SpaceX Rocket Presidential Suite',
  'Martian Yurt',
  'Compton Warehouse',
  'Venice Beachhouse',
  'Teletubbies Headquarters',
  'Gucci Mane\'s Gucci House',
  'Hack Reactor',
  'House on the prairie',
  'Berkeley Bowl',
  'Rick and Morty\'s house',
  '10 Downing Street',
  'Igloo',
  'McDonalds',
  'Taco Bell',
  'Shalimar',
  'Westworld',
  'Dante\'s Inferno',
  'Garden of Eden',
  'Mount Olympus',
  'Purgatory',
  'House of Chicken and Waffles',
  'Arjun\'s House',
  'Bowser\'s Castle',
  'Hyrule Temple',
  'Final Destination',
  'Great Wall of China',
  'Taj Mahal',
  'Tempest',
  'Tent in the backyard',
  'Paul Bunyon\'s sock',
  'Santa\'s workshop',
];

for (let i = 0; i < rooms.length; i += 1) {
  const query = 'INSERT INTO listing (name) VALUES (?)';
  connection.query(query, [rooms[i]], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully inserted listing into db');
    }
  });
}

// seeding Review table in database
for (let i = 0; i <= 3000; i += 1) {
  const month = padNumberIfNeeded(getRandomIntInclusive(1, 12));
  const day = padNumberIfNeeded(getRandomIntInclusive(1, 28));
  const review = {
    name: faker.name.firstName(),
    text: faker.lorem.paragraph(),
    image_url: faker.image.avatar(),
    date: `2018-${month}-${day}`,
    accuracy: getRandomIntInclusive(1, 5),
    communication: getRandomIntInclusive(1, 5),
    cleanliness: getRandomIntInclusive(1, 5),
    location: getRandomIntInclusive(1, 5),
    checkin: getRandomIntInclusive(1, 5),
    value: getRandomIntInclusive(1, 5),
  };
  const query = 'INSERT INTO review (listing_id, name, review_text, image_url, date_posted, accuracy_rating, communication_rating, cleanliness_rating, location_rating, checkin_rating, value_rating) VALUES ((SELECT id FROM listing ORDER BY RAND() LIMIT 1), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [review.name, review.text, review.image_url,
    review.date, review.accuracy, review.communication, review.cleanliness, review.location,
    review.checkin, review.value], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully inserted review into DB');
    }
  });
}
