import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';
import { Outlet  } from 'react-router-dom';
const Partenaire = () => {
  const [levels, setLevels] = useState(['Partenaire']);

  const updateLevels = (newLevel) => {
    setLevels((prevLevels) => [...prevLevels, newLevel]);
  }; 
  return (  
   <>
   <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
        <BreadCrumb levels={levels}  />
        <hr className='my-5'/>
        
        
        <Outlet />
        
   </section>
   </>
  )
}

export default Partenaire
