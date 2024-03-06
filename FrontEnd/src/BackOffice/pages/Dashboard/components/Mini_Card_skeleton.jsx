import React from 'react'

const Mini_Card_skeleton = () => {
  return (
    <>
    <div className="w-full sm:w-1/2 h-1/3 p-5 shadow-lg mb-2">
        <div className="mb-5 bg-slate-200 w-5 rounded-lg text-slate-200 ">
            <i className=" bx bx-task"></i>
        </div>
        <span className="mt-5 text-sm font-semibold bg-slate-300  text-slate-300  rounded-lg">Les projects  terminer</span><br />
        <span className="mt-5 text-sm font-semibold bg-slate-400  text-slate-400  rounded-lg">  terminer</span>
        <div className="mt-8">
            <div className="font-semibold text-base bg-slate-100 w-8 text-slate-100  rounded-lg ">
               50
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Mini_Card_skeleton
