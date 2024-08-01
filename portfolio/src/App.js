
import './App.css';
import Menu from './components/menu/menu.jsx';
import About from './pages/about/about.jsx';
import ContactResume from './pages/contact-resume/contact';
import Presentation from './pages/presentation/presentation.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <ContactResume />
      <Presentation />
      <About />
    </div>
  );
}

export default App;
