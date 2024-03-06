import React from 'react'
import AppBack from './BackOffice/AppBack'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import User from './BackOffice/pages/Users/User';
import Form_user from './BackOffice/pages/Users/Pages/Form_user';
import List_user from './BackOffice/pages/Users/Pages/List_user';
import Profil_user from './BackOffice/pages/Users/Pages/Profil_user';






const App = () => {
  return (
    <Router>
      <Routes>
        {/* BackOffice */}
        <Route path="/*" element={<AppBack />} />
 
        
      </Routes>
  </Router>
   
  )
}

export default App
