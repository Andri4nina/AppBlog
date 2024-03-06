import React from 'react'

const Task_list_dash_skeleton = () => {
  return (
    <>
    <div className="sm:w-1/3 p-5 shadow-lg mb-2 h-96">
         <h3 className="text-sm mb-5 font-semibold bg-slate-400 w-40 rounded-lg text-slate-400 ">Listes des taches</h3>
         <div className="overflow-y-hidden h-full">
             <ul className="overflow-y-scroll h-5/6">
                 <li className="bg-slate-200 text-slate-200 rounded-md p-5 text-xs mt-2 flex justify-between task-agree">
                     <div>Publier un blog</div>
                 </li>
         
                 <li className="bg-slate-300 text-slate-300 rounded-md text-xs p-5 mt-2 flex justify-between task-agree">
                     <div>Creer un blog</div>
                 </li> 
                 <li className="bg-slate-200 text-slate-200 rounded-md p-5 text-xs mt-2 flex justify-between task-agree">
                     <div>Publier un blog</div>
                 </li>
         
                 <li className="bg-slate-100 text-slate-100 rounded-md text-xs p-5 mt-2 flex justify-between task-agree">
                     <div>Creer un blog</div>
                 </li> 
             </ul>
         </div>
     </div> 
    </>
  )
}

export default Task_list_dash_skeleton
