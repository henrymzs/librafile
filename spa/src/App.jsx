import './App.css';
import Card from './components/card/Card.jsx';
import Options from './components/options/Options.jsx';

function App() {
  
  return (
    <>
      <header className='header'>
        <div className='logo-text'>
          <img className='image-logo' src="../public/open-book.png" alt="Livro Aberto" />
          <h1>Sistema de Biblioteca</h1>
        </div>
        <p>Gerencie seu acervo de livros de forma simples eficiente</p>
      </header>


      <Card name={'Total de Livros'} valueBook={10} image={"../../public/book-card.png"} acessibility={'Imagem de um livro aberto'} />
      <Card variant='disponivel' name={'Disponíveis'} valueBook={20} image={"../../public/check-mark.png"} acessibility={'Imagem de um check'} />
      <Card variant='indisponivel' name={'Indisponíveis'} valueBook={30} image={"../../public/unavailable.png"} acessibility={'Imagem de sinal de bloqueio'} />

      <Options />
    </>
  )
}

export default App
