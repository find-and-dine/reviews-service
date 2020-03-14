const faker = require('faker');
const Restaurant = require('./restaurants.model.js');
const User = require('./users.model.js');
const Review = require('./reviews.model.js');

const hereForArr = ['', 'Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Coffee or tea', 'Snacks', 'Drinks', 'Late night food', 'Other'];
const travelerTypeArr = ['Couples', 'Family', 'Friends', 'Business', 'Solo'];

const seed = () => {
  for (let i = 0; i < 100; i += 1) {

    const restaurantInst = new Restaurant({
      _id: i,
      restaurantName: faker.random.word() + ' Restaurant',
      claimed: faker.random.boolean()
    });

    const userInst = new User({
      _id: i,
      username: faker.name.findName(),
      avatarURL: faker.image.avatar(),
      reviewsCount: Math.floor(Math.random() * 250),
      postsCount: Math.floor(Math.random() * 500),
      helpfulVotesCount: Math.floor(Math.random() * 250),
      loc: faker.address.city(),
      lev: Math.floor(Math.random() * 5)
    });
  }

  // Generates random number of reviews for each restaurant
  for (let i =0; i < 100; i += 1){
    const numReview = Math.floor(Math.random() * 100);
    const usersWhoReviewed = []; // prevents multiple reviews of same restaurant by same user

    for (let x = 0; x < numReview; x += 1) {
      const serviceRat = Math.floor(Math.random() * 10);
      const foodRat = Math.floor(Math.random() * 10);
      const valueRat = Math.floor(Math.random() * 10);

      // this should be refactored to be more efficient
      const reviewerId = Math.floor(Math.random() * 100);
      while (usersWhoReviewed.includes(reviewerId)) {
        reviewerId = Math.floor(Math.random() * 100);
      }

      const reviewInst = new Review({
        title: faker.random.words(),
        body: faker.lorem.paragraphs(),
        timePosted: faker.date.past(),
        monthVisited: faker.date.past(),
        hereFor: hereForArr[Math.floor(Math.random() * 11)],
        votes: Math.floor(Math.random() * 20),
        device: faker.lorem.word(),
        travelerType: travelerTypeArr[Math.floor(Math.random() * 5)],
        lang: faker.lorem.word(),
        rating: Math.floor(Math.random() * 10), // 10 accounts for half stars
        serviceRating: serviceRat,
        foodRating: foodRat,
        valueRating: valueRat,
        userId: reviewerId,
        restaurantId: i
      });
    }
  }
};

seed();
  // .then(() => {
  //   process.exit();
  // });