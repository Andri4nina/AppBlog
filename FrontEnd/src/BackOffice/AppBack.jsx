import React from 'react'
import Sidebar from './components/Sidebar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './AppBack.css'
import User from './pages/Users/User'
import Dashboard from './pages/Dashboard/Dashboard'
import Archive from './pages/Archive/Archive'
import Blog from './pages/Blog/Blog'
import Galerie from './pages/Galerie/Galerie'
import Parametre from './pages/Parametre/Parametre'
import Partenaire from './pages/Partenaire/Partenaire'
import Project from './pages/Project/Project'
import Tache from './pages/TaskManagement/Tache'
import Historique from './pages/Historique/Historique';
import List_user from './pages/Users/Pages/List_user';
import Form_user from './pages/Users/Pages/Form_user';
import Profil_user from './pages/Users/Pages/Profil_user';
import Footer_Back_office from './components/Footer_Back_office';
import List_Blog from './pages/Blog/pages/List_Blog';
import Form_blog from './pages/Blog/pages/Form_blog';
import Vue_blog from './pages/Blog/pages/Vue_blog';
import List_part from './pages/Partenaire/pages/List_part';
import Form_part from './pages/Partenaire/pages/Form_part';
import Detail_part from './pages/Partenaire/pages/Detail_part';
const AppBack = () => {
  return (
    <>
      <Sidebar />
    
        <Routes>
          <Route index element={<Dashboard />} />
          
          <Route path="/Blog" element={<Blog />} >
              <Route index element={<List_Blog />} />
              <Route path="Formulaire" element={<Form_blog />} />
              <Route path="Appercu" element={<Vue_blog />} />
          </Route>
          
          <Route path="/Utilisateur" element={<User />}>
              <Route index element={<List_user />} />
              <Route path="Formulaire" element={<Form_user />} />
              <Route path="Profil" element={<Profil_user />} />
          </Route>
           
            <Route path="/Archive" element={<Archive />} />
          
            <Route path="/Galerie" element={<Galerie />} />
            <Route path="/Historique" element={<Historique />} />
            <Route path="/Parametre" element={<Parametre />} />
            <Route path="/Partenaire" element={<Partenaire />} >
                <Route index element={<List_part />} />
                <Route path="Formulaire" element={<Form_part />} />
                <Route path="Profil" element={<Detail_part />} />
            </Route>
            <Route path="/Project" element={<Project />} />
            <Route path="/Tache" element={<Tache />} />
         
          
        </Routes>
      <Footer_Back_office />
    </>
  )
}

export default AppBack
