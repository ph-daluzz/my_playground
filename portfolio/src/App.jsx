
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import './App.css'

function App() {
  const baixarCurriculo = () => {
    const link = document.createElement('a');
    link.href = '/components/PEDRO_HENRIQUE_DA_LUZ_CURRICULO.pdf'; // Caminho para o arquivo PDF no diretório public
    link.download = 'PEDRO_HENRIQUE_DA_LUZ_CURRICULO.pdf'; // Nome do arquivo ao ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleGitHubClick = () => {
    window.open('https://github.com/ph-daluzz', '_blank');
  }
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pedro-henrique-a50ab4252', '_blank');
  } 
  return (
    <div className="container">

      <header id="header">
        <a href="https://www.instagram.com/ph.daluzz" target="_blank" rel="noopener noreferrer">
          <div id="img-container">
            <img id="profile-pic" src="./components/eu.jpg" alt="Minha foto" />
          </div>
        </a>
        <div id="header-titles">
          <h1 id='header-title'>Pedro Henrique da Luz</h1>
          <h2 id='header-subtitle2'>dev mobile/web full-stack</h2>
        </div>

        <nav id="nav-bar">
          <button className='nav-button' onClick={handleGitHubClick} ><FaGithub size={24} />
            GitHub</button>
          <button className='nav-button' onClick={handleLinkedInClick} ><FaLinkedin size={24} />
            LinkedIn</button>
          <button className='nav-button' onClick={baixarCurriculo} ><FaDownload size={24} />
            Currículo</button>
        </nav>
      </header>

      <div id="main-content">
        <main id="content">
          <section className="about-me">
            <h2 className="section-title">QUEM EU SOU?</h2>
            <p className="section-text">
              Olá! Meu nome é Pedro Henrique, tenho 22 anos e sou um desenvolvedor full-stack apaixonado por tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no SENAI e tenho experiência em desenvolvimento web e mobile. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para criar soluções inovadoras.
            </p>
          </section>
        </main>

        <main id="content">
          <section className="about-me">
            <h2 className="section-title">O QUE EU FAÇO ATUALMENTE?</h2>
            <p className="section-text">
              Atualmente atuo em uma fábrica de máquinas de reciclagem como operador de máquina e programador CNC, o que me deu experiência prática em ambientes de produção e de trabalho em equipe. Além disso, estou desenvolvendo um sistema web para gestão de estacionamentos com controles de acessos, o que me permite aplicar minhas habilidades de desenvolvimento em projetos reais.
            </p>
          </section>
        </main>
        <main id="content">
          <section className="about-me">
            <h2 className="section-title">MEU OBJETIVO</h2>
            <p className="section-text">
              Meu objetivo atual é ingressar na área através de estágio ou uma oportunidade como desenvolvedor júnior, onde eu possa contribuir com minhas habilidades e aprender com profissionais experientes. Estou aberto a novos desafios e ansioso para crescer na minha carreira como desenvolvedor.
            </p>
          </section>
        </main>
        <main id="content">
          <section className="about-me">
            <h2 className="section-title">MEUS PROJETOS</h2>
            <p className="section-text">
              Atualmente, estou trabalhando em alguns projetos pessoais que me permitem aplicar e aprimorar minhas habilidades de desenvolvimento. Porem, nenhum deles está hospedado online no momento. Estou focado em aprender novas tecnologias e melhorar minhas habilidades para futuros projetos.
            </p>
          </section>
        </main>
      </div>

    </div >
  )
}

export default App
