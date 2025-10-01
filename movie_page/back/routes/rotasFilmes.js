// routes/rotasFilmes.js
const { Router } = require('express')
const { buscarFilmes } = require('../controllers/movieSearch.js')
const { trendingMovies } = require('../controllers/searchTopMovies.js')
const { detalhes } = require('../controllers/getMovieDetails.js')
const { getAlternativeMovies } = require('../controllers/searchAlternativeTitles.js')

const router = Router()

router.get('/search/:movieName', buscarFilmes)
router.get('/topMovies', trendingMovies)
router.get('/detalhes/:id', detalhes)
router.get('/filmes_alternativos/:id', getAlternativeMovies)

module.exports = router
