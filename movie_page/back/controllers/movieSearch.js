const axios = require("axios")
async function buscarFilmes(req, res) {

    const query = req.body.q
    const lang = req.body.lang

    // query validating
    if (!query) {
        res.status(400).send("Invalid search")
    }

    // if everything's ok, search on TMDB 
    try {
        const tmdbResponse = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query, language: lang || "pt-BR"
            },
            headers: {
                Authorization: `Bearer ${process.env.TMDB_BEARER}`
            }
        })
        // returning the movie list with the posters
        const moviesWithPosters = tmdbResponse.data.results.map((filme) => ({
            ...filme,
            // adcting the path to the poster to the movie object 
            posterURL: filme.poster_path ? `https://image.tmdb.org/t/p/w500${filme.poster_path}` : null

        }
        ))
        // return the api results
        res.status(200).json(moviesWithPosters)

    } catch (error) {
        res.status(500).json({ error: "Error searching movies" })
    }

}

module.exports = { buscarFilmes }