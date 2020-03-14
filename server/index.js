const express = require('express');
const app = express();
const port = 3003;
const db = require('../database/index.js');

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('public'));

db.sync( { force: false} )
  .then(() => {
    console.log('db synced');
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));