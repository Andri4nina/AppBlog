import React from 'react'

const Searchbar = () => {
  return (
    <>
    <div className='w-11/12  flex'>
        <input type="search " className='w-11/12 border-b outline-none' placeholder='Chercher'  />
        <button className='flex justify-around items-center border-2 border-green-500 text-green-500 px-10 py-2 hover:bg-green-500 hover:text-white transition-colors '><i className='bx bx-search-alt'></i>
        <span className='hidden md:block'>Chercher</span></button>
    </div>
    
    
    
    </>
  )
}

export default Searchbar
