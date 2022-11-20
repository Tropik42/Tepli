import React from 'react'	
import {Route, Routes} from 'react-router-dom';
import {About} from './pages/About'	
import {Catalog} from './pages/Catalog'	
import {Contacts} from './pages/Contacts'	
import {Index} from './pages/Index'
import {News} from './pages/News'	
import {Price} from './pages/Price'	
import {Auth} from './pages/Auth'
import {Registration} from './pages/Registration';
import {SingleNewsPage} from "./pages/SingleNewsPage";
import './App.css'

function App() {	
  return (	
    <div className="container pt-4">	
        <Routes>	
         <Route path="/" element={<Index/>} />	
         <Route path="/about" element={<About/>} />	
         <Route path="/news" element={<News/>}/>
         <Route path="/news/:id" element={<SingleNewsPage/>} />
         <Route path="/catalog" element={<Catalog/>} />
         <Route path="/price" element={<Price/>} />
         <Route path="/contacts" element={<Contacts/>} />
         <Route path="/auth" element={<Auth/>} />	
         <Route path="/registration" element={<Registration/>} />
        </Routes>	
    </div>	

  );	
}	

export default App;
