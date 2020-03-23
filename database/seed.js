const faker = require('faker');
const Review = require('../database/index.js');

const hereForArr = ['', 'Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Coffee or tea', 'Snacks', 'Drinks', 'Late night food', 'Other'];
const travelerTypeArr = ['', 'Couples', 'Family', 'Friends', 'Business', 'Solo'];

// Stretch goal: Make it so same user can't leave multiple reviews
// and highest userId equals total number of users minus 1

const seed = () => {
  // generate data for 100 restaurants
  for (let i = 0; i < 100; i += 1) {
    // generate between 0 and 200 reviews for each restaurant
    const reviewNum = Math.floor(Math.random() * 200);
    const claimed = faker.random.boolean();
    const restaurantName = `${faker.random.word()} Restaurant`;
    const timePosted = faker.date.past();
    let visited = faker.date.past();
    while (timePosted < visited) {
      visited = faker.date.past();
    }
    visited = new Date(visited);
    for (let x = 0; x < reviewNum; x += 1) {
      const visited = faker.date.past(25);
      const review = new Review({
        restaurant: {
          restaurantId: i,
          restaurantName,
          claimed,
        },
        user: {
          userId: Math.floor(Math.random() * 300),
          name: faker.name.findName(),
          avatarURL: faker.image.avatar(),
          reviewsCount: Math.floor(Math.random() * 250),
          postsCount: Math.floor(Math.random() * 500),
          location: faker.address.city(),
          level: Math.floor(Math.random() * 5),
        },
        title: faker.random.words(),
        body: faker.lorem.paragraphs(),
        timePosted,
        monthVisited: `${faker.date.month()} ${visited.getFullYear()}`,
        hereFor: hereForArr[Math.floor(Math.random() * 11)],
        votes: Math.floor(Math.random() * 20),
        device: faker.lorem.word(),
        travelerType: travelerTypeArr[Math.floor(Math.random() * 6)],
        lang: faker.lorem.word(),
        rating: Math.floor(Math.random() * 4) + 1,
        serviceRating: Math.floor(Math.random() * 4) + 1,
        foodRating: Math.floor(Math.random() * 4) + 1,
        valueRating: Math.floor(Math.random() * 4) + 1,
        helpfulVotesCount: Math.floor(Math.random() * 250),
      });

      review.save((err) => {
        if (err) { console.log(err); }
      });
    }
  }
};

seed();
