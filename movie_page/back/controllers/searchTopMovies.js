const axios = require('axios')
async function trendingMovies(req, res) {
    try {
        const trendMovies = await axios.get('https://api.themoviedb.org/3/trending/movie/day',
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
        const trendinMoviesWithPosters = trendMovies.data.results.map((filme) => ({
            ...filme,
            // adcting the path to the poster to the movie object 
            posterURL: filme.poster_path ? `https://image.tmdb.org/t/p/w500${filme.poster_path}` : null
        }
        ))
        // return the api results
        res.status(200).json(trendinMoviesWithPosters)
    } catch (error) {
        console.log(error, "erro ao resgatar trending movies")
        res.status(500).json({ error: "Error searching trending movies" })
    }

}
module.exports = { trendingMovies }

