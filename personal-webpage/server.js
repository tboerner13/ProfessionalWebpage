const express = require("express"),
app = express();
const routes = require('./routes/index');
const connectDB = require('./config/db');

const PORT = 8080

connectDB();

app.set('view engine', 'ejs');

// Middleware and configs here...
app.use('/', routes);

//Start Server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
