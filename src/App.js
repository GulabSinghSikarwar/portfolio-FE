import './App.css';
import Navbar from './components/Navbar';
import './components/resources/css/styles.css'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/portfolio/Portfolio';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Navbar  */}

      
      <Navbar />

      <Header />
      {/* about section */}
      <About />

      {/* Services or Skills  */}
      <Skills />

      {/*  call  to action  */}
      <CallToAction />
      {/* Portfolio  */}
      <Portfolio />


      {/* Contact  */}

      <ContactForm />


      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
