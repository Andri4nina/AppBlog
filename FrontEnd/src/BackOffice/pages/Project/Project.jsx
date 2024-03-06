import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';

const Project = () => {
  const [levels, setLevels] = useState(['Project']);
  const updateLevels = (newLevel) => {
    setLevels((prevLevels) => [...prevLevels, newLevel]);
  }; 
  return (  
   <>
     <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
          <BreadCrumb levels={levels}  />
          <hr className='my-5'/>
     </section>
   </>
  )
}

export default Project
