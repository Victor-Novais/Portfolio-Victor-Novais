import './App.css';
import Menu from './components/menu/menu.jsx';
import About from './pages/about/about.jsx';
import ContactResume from './pages/contact-resume/contact';
import Contact from './pages/contact/contact.jsx';
import Portfolio from './pages/portfolio/portfolio.jsx';
import Presentation from './pages/presentation/presentation.jsx';
import Skills from './pages/skills/skills.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <div id="home">
        <Presentation />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ContactResume />
    </div>
  );
}

export default App;
