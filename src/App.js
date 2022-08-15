

import './App.css';
import Project from './components/Project'
import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';






function App() {
  return (
    <>
      
      
   <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/Projects' element={<Project/>}/>
    
   </Routes>
   
     

     
    </>
  );
}

export default App;
