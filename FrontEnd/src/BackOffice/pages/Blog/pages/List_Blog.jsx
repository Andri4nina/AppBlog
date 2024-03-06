import React from 'react'
import Searchbar from '../../../components/Searchbar'
import Blog_appercu from '../components/Blog_appercu'
import Blog_Aut from '../components/Blog_Aut'
import Blog_Action from '../components/Blog_Action'
import { Link } from 'react-router-dom'

const List_Blog = () => {
  return (
   <>
   <Searchbar />
   
   
   <Link to="/Blog/Formulaire" >
        <div className='relative shadow-lg w-full h-60 mt-5 bg-black-900 rounded-lg hover:shadow-none cursor-pointer'>
         <i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bx bx-plus text-slate-400 text-9xl'></i>
        </div>
   </Link>
   
   
   <div className='mt-5 flex justify-center items-center'>
       <div className='w-1/2'>
            <Blog_appercu />
       </div>
       <div className='w-1/2 flex gap-2 mx-5 justify-between'>
            <Blog_Aut />
            <Blog_Action />
       </div>
   </div>
   </>
  )
}

export default List_Blog
