import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';

const Tache = () => {
  const [levels, setLevels] = useState(['Taches']);
  const updateLevels = (newLevel) => {
    setLevels((prevLevels) => [...prevLevels, newLevel]);
  }; 
  return (  
   <>
     <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
          <BreadCrumb levels={levels}  />
          <hr className='my-5'/>
          
          <div className=''>
          
          </div>
          <div className="overflow-y-hidden max-h-screen h-auto">
              <ul className="overflow-y-scroll overflow-x-hidden pt-5 h-5/6">
                
             
              </ul>
          </div>
     </section>
   </>
  )
}

export default Tache
