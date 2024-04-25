import CardComponent from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavbarComponent from './components/Navbar/NavbarComponent';
import './style.scss'

function App() {

  return (
    <>
      <NavbarComponent/>
      <Hero/>
      <CardComponent/>
      <Footer/>
    </>
  )
}

export default App;
