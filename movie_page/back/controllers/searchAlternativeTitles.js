const axios = require('axios')

async function getAlternativeMovies(req, res) {
    const { id } = req.params
    try {
        const alternativeMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=pt-BR&page=1`,
            {
                params: {
                    language: 'pt-BR' || 'en-US'
                },
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_BEARER}`
                }
            }
        )
        // returning the movie list with the posters
        const alternativeMoviesWithPosters = alternativeMovies.data.results.map((filme) => ({
            ...filme,
            // adcting the path to the poster to the movie object 
            posterURL: filme.poster_path ? `https://image.tmdb.org/t/p/w500${filme.poster_path}` : null
        }
        ))
        // return the api results
        res.status(200).json(alternativeMoviesWithPosters)

    } catch (e) {
        res.status(500).json(e, "erro ao buscar filmes alternativos (backend)")
    }

}

module.exports = { getAlternativeMovies }