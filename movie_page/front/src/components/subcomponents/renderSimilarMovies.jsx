import { useNavigate } from "react-router-dom"

export function Similar({ movie_list }) {
    const navigate = useNavigate()

    if (movie_list.length === 0) {
        return <p>Carregando filmes similares...</p>
    }

    return (
        <div style={styles.similar_movie_list}>
            {movie_list.map(filme => (
                <div key={filme.id} >
                    <div style={styles.card_movie}>
                        <p>{filme.title}</p>
                        <img src={filme.posterURL} alt="img poster" style={styles.img_similar_movie} />
                        <button onClick={() => {
                            navigate(`/movie_details/${filme.id}`)
                        }}>ACESSAR</button>
                    </div>
                </div>
            ))
            }
        </div >
    )

}


const styles = {
    similar_movie_list: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        gap: '10px',
        padding: '5px',

        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: '10px',
        marginTop: '20px',

        width: '100%',
        height: 'fit-content',
    },

    img_similar_movie: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',

    },

    card_movie: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',

        padding: '10px',
        width: '150px',
    }
}