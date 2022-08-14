import Header from './components/Header';
import Hero from './components/Hero.js';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import './App.css';
import Projects from  "./components/Project"




function App() {
  return (
  <>
       <NavBar/>
       <Header/>
      <Hero />
     <AboutMe/>
     <Projects/>
      </>
  );
}

export default App;
