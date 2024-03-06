import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';
import Tab_Archive from './components/Tab_Archive';

const Archive = () => {
  const [levels, setLevels] = useState(['Archives']);
  const updateLevels = (newLevel) => {
    setLevels((prevLevels) => [...prevLevels, newLevel]);
  }; 
  return (  
   <>
     <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
          <BreadCrumb levels={levels}  />
          <hr className='my-5'/>
          
         
          <Tab_Archive />
          <Tab_Archive />
          <Tab_Archive />
     </section>
   </>
  )
}

export default Archive
