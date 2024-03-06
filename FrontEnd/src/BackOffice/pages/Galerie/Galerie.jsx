import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Photo_galery from './Components/Photo_galery';


const Galerie = () => {

  const [levels, setLevels] = useState(['Galeries']);

  return (
    <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
    <BreadCrumb levels={levels}  />
    <hr className='my-5'/>
      <div className="flex p-1 gallery">
        <Photo_galery />
      </div>
</section>
  )
}

export default Galerie
