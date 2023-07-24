const Movie = require('../models/movieModel');

async function createMovie(movie) {
    try {
        return await movie.save();
    } catch (error) {
        throw error;
    }
}

async function getMovies() {
    try {
        return await Movie.find({});
    } catch (error) {
        throw error;
    }
}

async function getMovieById(id) {
    try {
        return await Movie.findById({ _id: id });
    } catch (error) {
        throw error;
    }
}

async function updateMovie(movieId, movieData) {
    try {
        return await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
    } catch (error) {
        throw error;
    }
}

async function deleteMovie(movieId) {
    try {
        return await Movie.findByIdAndDelete(movieId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
};
