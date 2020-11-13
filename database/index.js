const mongoose = require('mongoose');

// Reminder: change localhost to database
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

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
    contributions: Number,
    location: String,
    level: Number,
    votes: Number,
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
