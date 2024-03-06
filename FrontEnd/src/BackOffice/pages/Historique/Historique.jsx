import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';

const Historique = () => {
  const [levels, setLevels] = useState(['Historique']);
  const updateLevels = (newLevel) => {
    setLevels((prevLevels) => [...prevLevels, newLevel]);
  }; 
  return (  
   <>
     <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
          <BreadCrumb levels={levels}  />
          <hr className='my-5'/>
          
        
            <div class=" p-5 flex justify-around border-b-2 ">
                <div class="w-1/6">
                    12/12/2023
                </div>
                <div class="w-5/6 text-slate-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellat voluptate voluptates laborum minima quasi suscipit 
                    iure error recusandae quaerat exercitationem corporis non culpa, 
                    quia, inventore praesentium quidem labore dolorem? Sequi.
                </div>
        
            </div>
      
     
       
     </section>
   </>
  )
}

export default Historique
