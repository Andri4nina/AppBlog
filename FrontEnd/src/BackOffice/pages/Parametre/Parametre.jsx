import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';
import User_parametre_form from './components/User_parametre_form';

const Parametre = () => {
  const [levels, setLevels] = useState(['Parametre']);
  const updateLevels = (newLevel) => {
    setLevels((prevLevels) => [...prevLevels, newLevel]);
  }; 
  return (  
   <>
     <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
          <BreadCrumb levels={levels}  />
          <hr className='my-5'/>
          <User_parametre_form /> 
     </section>
   </>
  )
}

export default Parametre
