
import './App.css'

function App() {
  return (
    <>
      <div id="header">
        <a href="https://www.instagram.com/ph.daluzz" target="_blank" rel="noopener noreferrer">
          <div id="img-container">
            <img id="profile-pic" src="./components/eu.jpg" alt="Minha foto" />
          </div>
        </a>
        <div id="img-name-header">
          <h1 id='header-title'>Pedro Henrique da Luz</h1>
          <h2 id='header-subtitle'>Eu não sou o futuro, mas quero ser parte dele</h2>
          <h3 id='header-subtitle2'>dev mobile/web full-stack</h3>
        </div>
      </div>

      <div id="main-content">

        <div id="container-desc-pessoal">
          <div className="section" id="sobre-mim">
            <p className='section-title'>Sobre mim</p>
          </div>

          <div id='container-interesses'>
            <div id="interesse-profissional">
              <p>Meu objetivo profissional</p>
            </div>
            <div id="interesse-profissional">
              <p>Meu objetivo profissional</p>
            </div>
            <div id="interesse-profissional">
              <p>Meu objetivo pessoal</p>
            </div>
          </div>
        </div>

        <div className="section" id="meus-projetos">
          <p className='section-title'>Meus projetos</p>
        </div>
      </div>

    </>
  )
}

export default App
