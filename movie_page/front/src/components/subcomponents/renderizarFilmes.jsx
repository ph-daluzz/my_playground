import { useNavigate } from 'react-router-dom';


export function RenderizarFilmes({ filmesEncontrados }) {

  //navigator
  const navigate = useNavigate()

  // filtrar filmes para não haver renderização duplicada nos IDs
  const filmesUnicos = filmesEncontrados.filter(
    (filme, index, self) =>
      index === self.findIndex(filmeVerificado => filmeVerificado.id === filme.id)
  );

  return (
    <div style={styles.container_filmes}>
      {filmesUnicos.map(filme => (
        <div key={filme.id} style={styles.card_filme}>
          <img src={filme.posterURL} alt={filme.title} style={styles.poster} />
          <h3 style={styles.titulo_filme}>{filme.title}</h3>

          <button onClick={() => {
            console.log(`id navegado: ${filme.id}`)
            navigate(`/movie_details/${filme.id}`)
          }}
            style={styles.botao_assistir}>
            <strong>VER DETALHES</strong>
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container_filmes: {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },

  card_filme: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(49, 49, 49, 0.1)',
  },

  poster: {
    width: '100%',
    height: '300px',
    borderRadius: '10px',
    objectFit: 'scale-down',
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
