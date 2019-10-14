const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;
const mongoDB = 'mongodb+srv://hamzab96:Queenmary_2019@cluster0-neevy.mongodb.net/personalblog?retryWrites=true&w=majority';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("In the internal server!!!");
});

const blogRoute = require('./backend/routes/blogRoute');
app.use("/blogs", blogRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/backend', (req, res) => {
  res.send({ express: 'Backend connected' });
});