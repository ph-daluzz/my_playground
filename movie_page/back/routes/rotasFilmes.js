// routes/rotasFilmes.js
const { Router } = require('express')
const { buscarFilmes } = require('../controllers/movieSearch.js')
const { trendingMovies } = require('../controllers/searchTopMovies.js')

const router = Router()

router.get('/search/:movieName', buscarFilmes)
router.get('/topMovies', trendingMovies)

module.exports = router
