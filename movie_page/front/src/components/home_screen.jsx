import axios from 'axios';
import { useState, useEffect } from 'react';
import { RenderizarFilmes } from './subcomponents/renderizarFilmes.jsx'

export function HomeScreen() {
  const [filmePesquisa, setFilmePesquisa] = useState('');
  const [filmeEncontrado, setFilmeEncontrado] = useState([])

  useEffect(() => {
    //funcao para hook useEffect para resgatar filmes mais vistos da semana
    const effectTrendMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/topMovies')
        setFilmeEncontrado(response.data)
      } catch (error) {
        console.log(error, "erro no useEffect filmes da semana")
      }
    }
    effectTrendMovies()
  }, [])



  // funcao que chama api para buscar filmes com base no valor digitado no input
  const chamarApiFilmes = async () => {
    try {
      // faz a requisição ao localhost
      const apiResponse = await axios.get(`http://localhost:3000/search/${filmePesquisa}`)
      setFilmeEncontrado(apiResponse.data)

    } catch (error) {
      console.log(error, "erro no front")
    }
  }

  return (
    <div style={styles.container}>

      <header style={stylesHeader.header_container}>
        <a href="/" style={{ textDecoration: 'none', margin: "none" }}>
          <h1 style={stylesHeader.h1}>
            AbsoluteCinema
          </h1>
        </a>
        <div>

          <input type="text"
            style={stylesHeader.input}
            placeholder="Procurar filme"
            onChange={(event) => setFilmePesquisa(event.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && chamarApiFilmes()} />
          <button onClick={chamarApiFilmes} style={stylesHeader.input_button}>Buscar</button>
        </div>
      </header>

      <main style={styles.main_style}>
        <section style={styles.main_section}>

          {/* Componente de renderização dos filmes encontrados */}
          {filmeEncontrado ? <RenderizarFilmes filmesEncontrados={filmeEncontrado} /> : <p> Carregando...</p>
          }</section>
      </main>
    </div >
  );
}

// CSS in JS to container
const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray'
  },

  main_style: {
    padding: '10px',
    width: '100%',
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
    margin: '10px',
    padding: '0px'
  },
  input_button: {
    height: '3vh',
    width: '7vw',

    border: 'none',
    borderRight: '2px white solid'

  }
};