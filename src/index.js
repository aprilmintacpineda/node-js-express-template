require('dotenv').config();

const app = require('express')();
const database = require('./database');

app.get('/', function (req, res) {
  database.query('SELECT * FROM `users`')
    .then(() => {
      res.send('hello world');
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
