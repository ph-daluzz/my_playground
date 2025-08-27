
import './App.css'
import { Target, User, Leaf } from "lucide-react";

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

            <div className="interesse-profissional">
              <p className='interesse-profissional-titulo'><Target size={20} className="icon" /> Meu objetivo profissional</p>
              <p className='interesse-profissional-descricao'>Meu objetivo profissional é atuar no desenvolvimento de software, com foco em aplicações mobile, sempre evoluindo tecnicamente e colaborando em projetos desafiadores. Também estou aberto a oportunidades em front e back-end.</p>
            </div>
            <div className="sobre-mim">
              <p className='sobre-mim-titulo'> <User size={20} className="icon" />Sobre mim</p>
              <p className='sobre-mim-descricao'>Sou apaixonado por tecnologia desde criança, sempre curioso sobre como as coisas funcionam por trás das telas. Essa curiosidade me levou a estudar Desenvolvimento de Software no SENAI de São José, onde tenho evoluído como profissional e sigo em busca do meu sonho de trabalhar com tecnologia.
              </p>
              <p className='sobre-mim-descricao'>Atualmente atuo em uma fábrica de máquinas de reciclagem como operador de máquina e programador CNC, o que me deu experiência prática em ambientes de produção e de trabalho em equipe.</p>
            </div>

            <div className="interesse-pessoal">
              <p className='interesse-pessoal-titulo'><Leaf size={20} className="icon" />Meu objetivo pessoal</p>
              <p className='interesse-pessoal-descricao'>Meu objetivo pessoal é manter equilíbrio entre vida profissional e pessoal, dedicando tempo a família, amigos e hobbies. Gosto de aprender continuamente, seja em cursos, leituras ou experiências práticas, porque acredito que crescer como pessoa me ajuda a evoluir também como profissional.</p>
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
