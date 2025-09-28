const axios = require('axios')
async function detalhes(req, res) {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json("nenhum id informado para o back")
        }
        const resposta = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                language: "pt-BR"
            },
            headers: {
                Authorization: `Bearer ${process.env.TMDB_BEARER}`
            }
        })
        const filmeComImgs = {
            ...resposta.data,
            posterURL: resposta.data.poster_path ? `https://image.tmdb.org/t/p/w500${resposta.data.poster_path}` : null,
            backdropURL: resposta.data.backdrop_path ? `https://image.tmdb.org/t/p/original${resposta.data.backdrop_path}` : null
        };
        res.status(200).json(filmeComImgs)
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
}

module.exports = { detalhes }