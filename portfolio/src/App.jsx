
import { FaGithub, FaLinkedin, FaDownload, FaCanadianMapleLeaf } from "react-icons/fa"; import { } from "react-icons/fa";
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
            <img id="profile-pic" src="/eu.jpg" alt="Minha foto" />
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
        <footer>
          <span>© Pedro Henrique da Luz – 2025</span>
        </footer>
      </header>

      <div id="main-content">
        <main className="content">
          <section className="about-me">
            <h2 className="section-title">QUEM EU SOU?</h2>
            <p className="section-text">
              Ola! Meu nome é Pedro Henrique, tenho 22 anos e sou desenvolvedor full-stack entusiasta da tecnologia. No momento, estou estudando Desenvolvimento de Sistemas no SENAI e possuo experiência em desenvolvimento para web e mobile. Estou constantemente em busca de aprender novas tecnologias e melhorar minhas habilidades para desenvolver soluções criativas.
            </p>
            <p className="section-text">And I also have an intermediate English proficiency. <FaCanadianMapleLeaf size={16} /> </p>
          </section>
        </main>

        <main className="content">
          <section className="about-me">
            <h2 className="section-title">PRÓXIMOS PASSOS</h2>
            <p className="section-text">
              Futuramente, pretendo me aprofundar mais em desenvolvimento mobile, especialmente em React Native, Kotlin, Java e suas bibliotecas.
              <p>
                Além disso, quero iniciar um bacharelado em Engenharia de Software para ter uma base mais sólida na área de desenvolvimento.
              </p>
            </p>
          </section>
        </main>

        <main className="content">
          <section className="about-me">
            <h2 className="section-title">O QUE EU FAÇO ATUALMENTE?</h2>
            <p className="section-text">
              Atualmente atuo em uma fábrica de máquinas de reciclagem como operador de máquina e programador CNC, o que me deu experiência prática em ambientes de produção e de trabalho em equipe. <p>
                Também estou desenvolvendo um sistema web para gerenciar a produção e o estoque de uma fábrica de veículos, o que me permite aplicar minhas habilidades de desenvolvimento em um contexto real.
              </p>
            </p>
          </section>
        </main>
        <main className="content">
          <section className="about-me">
            <h2 className="section-title">MEU OBJETIVO</h2>
            <p className="section-text">
              Meu objetivo atual é ingressar na área através de estágio ou uma oportunidade como desenvolvedor júnior, onde eu possa contribuir com minhas habilidades e aprender com profissionais experientes. Estou aberto a novos desafios e ansioso para crescer na minha carreira como desenvolvedor.
            </p>
          </section>
        </main>
        <main className="content">
          <section className="about-me">
            <h2 className="section-title">MEUS PROJETOS:</h2>
            <p className="section-text">
              Tenho alguns projetos pessoais bem interessantes, porém nenhum deles está hospedado online no momento.
            </p>
          </section>
        </main>
        <main className="content">
          <section className="about-me">
            <h2 className="section-title">PROJETOS QUE PARTICIPEI:</h2>
            <p className="section-text">
              Durante minha jornada acadêmica, desenvolvi diversos projetos práticos. Um dos mais notáveis foi um sistema de gerenciamento de estacionamentos, onde criei uma interface profissional e funcionalidades robustas para otimizar o cadastro de usuários e o controle de vagas. Para isso, atuei como desenvolvedor full-stack, utilizando React.JS no front-end e Node.js no back-end. A segurança dos dados foi garantida com a autenticação de usuários via JWT (JSON Web Token), e o Supabase foi usado como banco de dados através da ORM Sequelize para gerenciar as informações de forma estruturada. Esses projetos me permitiram aplicar meus conhecimentos teóricos em situações reais, aprimorando minhas habilidades técnicas e de trabalho em equipe.
            </p>
          </section>
        </main>
      </div>


    </div >
  )
}

export default App
