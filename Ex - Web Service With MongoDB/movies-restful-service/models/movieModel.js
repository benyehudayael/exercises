const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    director: { type: String, required: true },
    premieredYear: { type: Number, required: true }
});

const Movie = mongoose.model('movie', movieSchema, 'movies');

module.exports = Movie;