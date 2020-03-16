const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/guilttrip_reviews', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

// Stretch goal #1: Add functionality for Staff Responses and Photos
// Stretch goal #2: Create separate documents for User, Staff, Staff Response, Photo, User,
// and Restaurant
const reviewSchema = new mongoose.Schema({
  restaurant: {
    restaurantId: Number,
    restaurantName: String,
    claimed: Boolean,
  },
  user: {
    userId: Number,
    name: String,
    avatarURL: String,
    reviewsCount: Number,
    postsCount: Number,
    helpfulVotesCount: Number,
    location: String,
    level: Number,
  },
  title: String,
  body: String,
  timePosted: Date,
  monthVisited: String,
  hereFor: String,
  votes: Number,
  device: String,
  travelerType: String,
  language: String,
  rating: Number,
  serviceRating: Number,
  foodRating: Number,
  valueRating: Number,
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
