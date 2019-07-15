<<<<<<< HEAD
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
connectDB();
//Init middleware
app.use(express.json({ extended: false }));
//app.get('/', (req, res) => res.json({ msg: 'Welcome here to the API' }));

//Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
=======
<<<<<<< HEAD
const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
//Init middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.json({ msg: 'Welcome here to the API' }));

//Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
=======
const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
//Init middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.json({ msg: 'Welcome here to the API' }));

//Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
>>>>>>> d6a39df102bc2c80b90e33a3f593e9fd66874318
>>>>>>> c3bf2e9760416230d95a8463188e8c9266996bae
