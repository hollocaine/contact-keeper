const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
  mongoose
    .connect(db, {
      userNewUrlParser: true,
      userCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log('Mongo Connected'))
    .catch(err => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
