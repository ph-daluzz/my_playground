import axios from 'axios';
import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react';
import { Details } from './subcomponents/renderMovieDetails'

export function MovieDetails() {
    const { id } = useParams()
    const [filme, setFilme] = useState(null)

    useEffect(() => {
        async function resgatarFilme() {
            try {
                const filme_resgatado = await axios.get(`http://localhost:3000/detalhes/${id}`)
                setFilme(filme_resgatado.data)
            } catch (erro) {
                console.log(erro)
            }
        }
        resgatarFilme()
    }, [])


    return (
        <div style={styles.container}>
            <header style={stylesHeader.header_container}>
                <a href="/" style={{ textDecoration: 'none', margin: "none" }}>
                    <h1 style={stylesHeader.h1}>
                        AbsoluteCinema
                    </h1>
                </a>
            </header>

            <div>
                <Details movie={filme} />
            </div>
        </div >
    )

}

// CSS in JS to container
const styles = {
    container: {
        minHeight: '100vh',
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
        position: 'sticky',
        top: '0px'

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