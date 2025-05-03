// 1. Import needed packages
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');


// 2. Initialize the Express app
const app = express();

//This is for contact Page
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3. Set the view engine to EJS
app.set('view engine', 'ejs');

// 4. Set the views folder
app.set('views', path.join(__dirname, 'views'));

// 5. Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// 6. Set up your routes
const mainRoutes = require('./routes/index.js');
app.use('/', mainRoutes);

// 7. Connect database
connectDB();

// 8. Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

