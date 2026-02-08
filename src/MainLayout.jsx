import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Techstack from './pages/Techstack';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contacts from './pages/Contacts';



export default function MainLayout() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Techstack />
      <Projects />
      <Certificates />
      <Contacts />
    </div>
  );
}
