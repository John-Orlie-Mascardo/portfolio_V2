import './App.css'
import { Home, About, Techstack, Projects, Certificates, Contacts } from './pages';
import Navbar from './components/Navbar';



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
