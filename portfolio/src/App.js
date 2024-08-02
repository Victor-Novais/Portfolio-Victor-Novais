
import './App.css';
import Menu from './components/menu/menu.jsx';
import About from './pages/about/about.jsx';
import ContactResume from './pages/contact-resume/contact';
import Presentation from './pages/presentation/presentation.jsx';
import Skills from './pages/skills/skills.jsx';

function App() {
  return (
    <div className="App">
      <Presentation />
      <About />
      <Skills />
      <Menu />
      <ContactResume />
    </div>
  );
}

export default App;
