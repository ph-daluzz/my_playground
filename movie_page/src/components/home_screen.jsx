import axios from 'axios';
import { useState } from 'react';
import { RenderizarFilmes } from './subcomponents/renderizarFilmes.jsx'

export function HomeScreen() {
  const [filmePesquisa, setFilmePesquisa] = useState('');
  const [filmeEncontrado, setFilmeEncontrado] = useState([])


  const handleMovieSearch = (event) => {
    if (!filmePesquisa.trim())
      return

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

      <header style={stylesHeader.header_container}>
        <h1 style={stylesHeader.h1}>
          AbsoluteCinema
        </h1>
        <div>

          <input type="text"
            style={stylesHeader.input}
            placeholder="Procurar filme"
            onChange={(event) => setFilmePesquisa(event.target.value)} />
          <button onClick={handleMovieSearch} style={stylesHeader.input_button}>Buscar</button>
        </div>
      </header>

      <main style={styles.main_style}>
        <section style={styles.main_section}>
          <section style={styles.main_section_sidebar}>
            <p>Selecione um filtro</p>
          </section>
          {/* Componente de renderização dos filmes encontrados */}
          <RenderizarFilmes filmesEncontrados={filmeEncontrado} />
        </section>
      </main>
    </div>
  );
}

// CSS in JS to container
const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  main_style: {
    padding: '10px',
    width: '100%',
    backgroundColor: 'lightgray'
  },

  main_section: {
    display: 'flex',
    justifyContent: 'start',

  },

  main_section_sidebar: {
    backgroundColor: 'white',

    display: 'flex',
    justifyContent: 'center',

    width: '250px',
    maxHeight: '70vh',

    boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',

    padding: '10px',
    margin: '0px 15px 10px 0px',
    borderRadius: '5px'

  }
};


// CSS in JS to header
const stylesHeader = {

  header_container: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#530000ff',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  input: {
    marginLeft: '2vw',
    height: '2vh',
    width: '60vw',
    padding: '0.5vh',
    borderRadius: '4px',
    border: '1px solid #ffffffff',
  },
  h1: {
    color: 'red',
  },
  input_button: {
    height: '3vh',
    width: '7vw',

    border: 'none',
    borderRight: '2px white solid'

  }
};