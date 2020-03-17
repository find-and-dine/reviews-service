const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3003;

// Stretch goal: refactor to use query parameters instead
// of path parameters

// get all reviews for a given restaurant
app.get('/api/reviews/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;
  db.find({ 'restaurant.restaurantId': restaurantId }, (err, data) => {
    if (err) {
      res.send(404);
    } else {
      res.send(data);
    }
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
