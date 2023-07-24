const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./configs/db')

const app = express();
const port = 3000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

const moviesRouter = require('./routes/movieRoutes');
app.use('/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
