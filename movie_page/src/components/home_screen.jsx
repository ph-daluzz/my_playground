import axios from 'axios';
import { useState } from 'react';
import { RenderizarFilmes } from './subcomponents/renderizarFilmes.jsx'

export function HomeScreen() {
  const [filmePesquisa, setFilmePesquisa] = useState('');
  const [filmeEncontrado, setFilmeEncontrado] = useState([])


  const handleMovieSearch = (event) => {
    axios.get(`${process.env.REACT_APP_API_URL}&s=${filmePesquisa}`)
      .then(response => {
        // coloca os filmes encontrados na variável de estado
        setFilmeEncontrado(response.data.Search)
        console.log(filmeEncontrado)


      })
      .catch(error => {
        console.error('Erro ao resgatar informações do filme!', error);
      });
  }

  return (
    <div style={styles.container}>

      <header style={stylesHeader.headerContainer}>
        <h1 style={stylesHeader.h1}>
          AbsoluteCinema
        </h1>
        <input type="text"
          style={stylesHeader.input}
          placeholder="Procurar filme"
          onChange={(event) => setFilmePesquisa(event.target.value)} />

        <button onClick={handleMovieSearch}>Buscar</button>
      </header>

      <main style={styles.mainStyle}>
        <h2>Conteúdo principal</h2>
        {/* Componente de renderização dos filmes encontrados */}
        <RenderizarFilmes filmesEncontrados={filmeEncontrado} />
      </main>
    </div>
  );
}

// CSS in JS to container
const styles = {
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};


// CSS in JS to header
const stylesHeader = {
  headerContainer: {
    width: '100%',
    padding: '1vh',
    backgroundColor: '#530000ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginLeft: '2vw',
    height: '5vh',
    width: '20vw',
    padding: '0.5vh',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  h1: {
    color: 'red',
  }
};