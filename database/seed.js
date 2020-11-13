const faker = require('faker');
const Review = require('../database/index.js');

const hereForArr = ['', 'Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Coffee or tea', 'Snacks', 'Drinks', 'Late night food', 'Other'];
const travelerTypeArr = ['', 'Couples', 'Family', 'Friends', 'Business', 'Solo'];
const languageArr = ['', 'French', 'English', 'German', 'Spanish'];

const seed = () => {
  // generate reviews for 30 restaurants
  for (let i = 0; i < 100; i += 1) {
    const reviewNum = Math.floor(Math.random() * 101);
    const claimed = faker.random.boolean();
    const restaurantName = `${faker.random.word()} Restaurant`;

    // generate reviewNum reviews for each restaurant
    for (let x = 0; x < reviewNum; x += 1) {
      const timePosted = faker.date.past();
      let visited = faker.date.past();
      while (timePosted < visited) {
        visited = faker.date.past();
      }
      visited = new Date(visited);
      const review = new Review({
        restaurant: {
          restaurantId: i,
          restaurantName,
          claimed,
        },
        user: {
          userId: Math.floor(Math.random() * 100),
          name: faker.name.findName(),
          avatarURL: faker.image.avatar(),
          reviewsCount: Math.floor(Math.random() * 100),
          contributions: Math.floor(Math.random() * 100),
          location: faker.address.city(),
          level: Math.floor(Math.random() * 5),
          votes: Math.floor(Math.random() * 200),
        },
        title: faker.random.words(),
        body: faker.lorem.paragraphs(),
        timePosted,
        monthVisited: `${faker.date.month()} ${visited.getFullYear()}`,
        hereFor: hereForArr[Math.floor(Math.random() * 11)],
        votes: Math.floor(Math.random() * 150),
        device: faker.lorem.word(),
        travelerType: travelerTypeArr[Math.floor(Math.random() * 5)],
        language: languageArr[Math.floor(Math.random() * 5)],
        rating: Math.floor(Math.random() * 4) + 1,
        serviceRating: Math.floor(Math.random() * 4) + 1,
        foodRating: Math.floor(Math.random() * 4) + 1,
        valueRating: Math.floor(Math.random() * 4) + 1,
      });
      review.save((err) => {
        if (err) console.log(err);
      });
    }
  }
}

seed();
