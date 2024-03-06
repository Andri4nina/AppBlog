import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb';
import { Outlet  } from 'react-router-dom';



const Blog = () => {
  const [levels, setLevels] = useState(['Blog']);
  
  
  return (
    <section className='min-h-screen ml-64 pt-20 max-w-7xl mx-auto'>
      <BreadCrumb levels={levels}  />
      <hr className='my-5'/>
      <Outlet/>
  </section>
  )
}

export default Blog
