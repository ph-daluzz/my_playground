export function Details({ movie }) {
    if (!movie) return <p>Carregando...</p>
    return (
        <div style={{
            ...styles.background.base,
            backgroundImage: `
          linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2)),
          url(${movie.backdropURL})
        `
        }}>
            <h1>{movie.title}</h1>
        </div>
    )

}

const styles = {
    background: {
        base: {
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '40px',
            color: 'white'
        }
    },
    title: {
        fontSize: '3rem',
        margin: 0
    },
    overview: {
        fontSize: '1.2rem',
        maxWidth: '600px'
    }
}