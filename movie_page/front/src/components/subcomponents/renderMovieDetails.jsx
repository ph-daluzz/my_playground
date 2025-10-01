import axios from 'axios';
import { useEffect, useState } from "react"
import { Similar } from './renderSimilarMovies';

export function Details({ movie }) {
    const [alternativeMovies, setAlternativeMovies] = useState([])
    // buscar filmes recomendados 
    useEffect(() => {
        if (!movie) {
            return
        }
        const filmesAlternativos = async () => {
            try {
                const filmes = await axios.get(`http://localhost:3000/filmes_alternativos/${movie.id}`)
                console.log(filmes.data)
                setAlternativeMovies(filmes.data)
            } catch (e) {
                console.log(e, "erro no front, filmes alternativos")
            }
        }
        filmesAlternativos()
    }, [movie])

    if (!movie) return <p>Carregando...</p>
    return (
        <div style={{
            ...styles.background.base
        }}>
            <div style={styles.container_actions}>
                <img src={movie.posterURL} alt="cover filme" style={styles.imagePoster} />
                <div style={styles.movie_description}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div>
                        <button style={styles.watch_trailer_button}>Ver trailer</button>
                    </div>
                </div>
            </div>
            <Similar movie_list={alternativeMovies} />
        </div>
    )

}

const styles = {
    background: {
        base: {
            width: '100%',

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',

            display: 'flex',
            flexDirection: 'column',
            paddingTop: '60px',
            paddingLeft: '20px',
            paddingRight: '20px',
            boxSizing: 'border-box',
            color: 'white',
        }
    },

    container_actions: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",

        width: 'fit-content',
        minWidth: '70vh',

        padding: '10px',
        border: "2px solid rgba(247, 247, 247, 0.2)",
        borderRadius: '10px',

        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginBottom: '50px'
    },

    movie_description: {
        width: '70vh',
        height: '100%',

        padding: '10px',

        display: 'flex',
        alignItems: "center",
        flexDirection: "column",

    },
    imagePoster: {
        width: '350px',
        height: 'auto',
        borderRadius: '10px'
    },

    title: {
        fontSize: '3rem',
        margin: 0
    },

    watch_trailer_button: {
        height: '5vh',
        width: '15vh'
    }

}