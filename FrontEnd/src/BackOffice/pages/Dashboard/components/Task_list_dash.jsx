import React from 'react'

const Task_list_dash = () => {
  return (
   <>
   <div className="sm:w-1/3 p-5 shadow-lg mb-2 h-96">
        <h3 className="text-sm mb-5 font-semibold">Listes des taches</h3>
        <div className="overflow-y-hidden h-full">
            <ul className="overflow-y-scroll h-5/6">
            <li className="bg-red-400 rounded-md p-5 text-xs mt-2 flex justify-between task-agree">
                <div>Publier un blog</div>
                <form action method="POST" >
                  
                    <input type="hidden" name="the_user" value=" "/>
 
                    <button ><i className="text-gray-500 bx bx-check"></i></button>
                </form>
            </li>
        
                <li className="bg-slate-200 rounded-md text-xs p-5 mt-2 flex justify-between task-agree">
                    <div>Creer un blog</div>
                    <form action method="POST" >
                      
                        <button ><i className="text-gray-500 bx bx-check"></i></button>
                    </form>
                </li> 
            </ul>
        </div>
    </div> 
   </>
  )
}

export default Task_list_dash
