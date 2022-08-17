

import './App.css';
import Project from './components/Project'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Technologys  from './components/Technologys';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import NavBar from './components/NavBar';








function App() {
  return (
    <>
      <NavBar/>
      
   <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/Projects' element={<Project/>}/>
    <Route path='/Technologys' element={<Technologys/>}/>
    <Route path='/Contacts' element={<ContactMe/>}/>
   </Routes>
  
     <Footer />

     
    </>
  );
}

export default App;
