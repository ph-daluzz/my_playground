export function RenderizarFilmes({ filmesEncontrados }) {
    // filtrar filmes para não haver renderização duplicada nos IDs
    const filmesUnicos = filmesEncontrados.filter(
        (filme, index, self) =>
            index === self.findIndex(filmeVerificado => filmeVerificado.imdbID === filme.imdbID)
    );

    return (
        <div style={styles.container_filmes}>
            {filmesUnicos.map(filme => (
                <div key={filme.imdbID} style={styles.card_filme}>
                    <img src={filme.Poster} alt={filme.Title} style={styles.poster} />
                    <h3 style={styles.titulo_filme}>{filme.Title}</h3>
                    <p>{filme.Year}</p>
                    <button style={styles.botao_assistir}><strong>VER TRAILER</strong></button>
                </div>
            ))}
        </div>
    );
}

const styles = {
  container_filmes: {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },

  card_filme: {
    backgroundColor: 'white',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-around',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },

  poster: {
    width: '100%',
    height: '300px',
    borderRadius: '5px',
    objectFit: 'cover',
    marginBottom: '5px',
  },

  titulo_filme: {
    textAlign: 'center',
    margin: '10px 0 4px 0',
    fontSize: '1.1rem',
  },

  ano_filme: {
    margin: 0,
    fontSize: '0.9rem',
    color: 'gray',
  },

  botao_assistir: {
    cursor: 'pointer',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderTop: '1px solid #ccc',
    backgroundColor: '#f44336',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '0 0 10px 10px',
    transition: 'background-color 0.3s',
  },
};
;
