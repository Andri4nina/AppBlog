import React from 'react'

const Blog_Action = () => {
  return (
   <>
    <div className='w-full'>
        <div className=' flex justify-between items-center border-b h-12'>
            <p className='flex justify-center items-center text-slate-400'>Publier</p>
            <div class="flex justify-end items-center  prvlg-switcher">
                <input type="hidden" name='hidden_id' />
                <input class="form-checkbox" type="checkbox" id="publier" name="status"/>
                <label class="ml-2" for="publier"></label>
            </div>
        </div>
       
        <div className='flex justify-between  gap-5  border-b h-12'>
        <p className='flex justify-center items-center text-slate-400'>Action</p>
        <div className='flex justify-end items-center gap-5'>
        <div className='w-auto'>
                <input type="hidden" name="the_user" />
                <button class="border px-2 py-1 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white font-bold ">
                <i class="bx bx-pen"></i></button>            
            </div>
            <div className='w-auto'>
                <input type="hidden" name="the_user" />
                <button class="border px-2 py-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white font-bold ">
                <i class="bx bx-trash"></i></button>            
            </div>
            
        </div>
           
            
        </div>
    </div>
   
   </>
  )
}

export default Blog_Action
