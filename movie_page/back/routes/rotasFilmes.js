// routes/rotasFilmes.js
const { Router } = require('express')
const { buscarFilmes } = require('../controllers/movieSearch.js')

const router = Router()

router.get('/search', buscarFilmes)

module.exports = router
