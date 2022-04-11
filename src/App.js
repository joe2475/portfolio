import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/about.page';
import Navigation from './routes/navigation.component';
import HomePage from './components/homepage.component.jsx';
import {Routes, Route} from 'react-router-dom';
import ParticlesBg from "particles-bg";
import Resume from './pages/resume.page';
import Project from './pages/project.page';
import * as ReactDOM from "react-dom"

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Navigation/>}>
         <Route index element={<HomePage/>}></Route>
         <Route path='about' element = {<About/>}></Route>
         <Route path='project' element={<Project/>}></Route>
         <Route path='resume' element={<Resume/>}></Route>
       </Route>

     </Routes>
    
    </div>
  );
}

export default App;
