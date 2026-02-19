import "./App.css";
import { Home, About, Techstack, Projects, Certificates, Contacts } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MainLayout() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Techstack />
      <Projects />
      <Certificates />
      <Contacts />
      <Footer />
    </div>
  );
}
