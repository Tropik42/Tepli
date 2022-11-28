import React,{useContext, useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom';
import {About} from './pages/About'	
import {Catalog} from './pages/Catalog'	
import {Contacts} from './pages/Contacts'	
import {Index} from './pages/Index'
import {News} from './pages/News'	
import {Price} from './pages/Price'	
import {Auth} from './pages/Auth'
import {Registration} from './pages/Registration';
import {SingleNews} from "./pages/SingleNews";
import './App.css';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthContext} from './hoc/AuthProvider'
import {observer} from 'mobx-react-lite';
import {check} from './http/userApi';
import {RequireMain} from './hoc/RequireMain';

const App = observer(()=>{
  const {user} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    check().then(token =>{
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  },[user])
  if(loading){return console.log('загрузка')}
  return (	
    <div className="container pt-4">
        <Routes>	
          <Route path="/" element={<Index/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/news/:id" element={<SingleNews/>} />
          <Route path="/catalog" element={
            <RequireAuth>
              <Catalog/>
            </RequireAuth>
           } />
          <Route path="/price" element={<Price/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/auth" element={
            <RequireMain>
            <Auth/>
            </RequireMain>
          } />
          <Route path="/registration" element={
            <RequireMain>
            <Registration/>
            </RequireMain>
          } />
        </Routes>	
    </div>	

  );	
});

export default App;
