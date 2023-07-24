const express = require('express');
const router = express.Router();
const movieBLL = require('../bll/movieBLL');
const Movie = require('../models/movieModel');

router.post('/', async (req, res) => {
    try {
        const { name, director, premieredYear } = req.body;
        const movie = new Movie({ name, director, premieredYear });
        const savedMovie = await movieBLL.createMovie(movie);
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the movie.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const movies = await movieBLL.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const movie = await movieBLL.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found.' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the movie.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const movie = await movieBLL.updateMovie(req.params.id, req.body);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found.' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the movie.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const movie = await movieBLL.deleteMovie(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found.' });
        }
        res.json({ message: 'Movie deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the movie.' });
    }
});

module.exports = router;
