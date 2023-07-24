const mongoose = require('mongoose');

const connectDB = () => {
    const mongoURI = 'mongodb://127.0.0.1:27017/moviesDB';
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message);
            process.exit(1);
        });
};

module.exports = connectDB;