//all the required node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

//---------routes-----------//
const AuthRoutes = require('./routes/auth');
const HomeRoutes = require('./routes/home');

//Database connection---------------------------//
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log('MongoDB Connected');
});

//----------app.use-------------//
app.use(express.json());
app.use(cors());
//---------------------------------//
app.use('/', AuthRoutes);

app.get('/', (req,res) => {
    res.send("hello")
});
//node server output
app.listen(process.env.PORT || 4000);