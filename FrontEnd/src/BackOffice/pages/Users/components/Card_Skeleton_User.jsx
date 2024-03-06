import React from 'react'

const Card_Skeleton_User = () => {
  return (
   <> 
     <div className="group relative flex  w-11/12  h-36 shadow-lg  mt-5  transition peer">
        <div className="pl-4 bg-slate-400 w-1/3"></div>
        <div className="py-8 px-6">
          <div>
            <h2 className="w-24 rounded-lg bg-slate-300 content-center text-slate-300">A</h2>
            <p className="my-2 w-40 rounded-lg bg-slate-200 content-center text-slate-200">A</p>
            <p className=" w-60 rounded-lg bg-slate-100 content-center text-slate-100">A</p>  
          </div>
        </div>
      
      </div>
   
   
   </>
  )
}

export default Card_Skeleton_User
