import React from 'react'

const Global_Card_skeleton = () => {
  return (
    <>
        <div className="w-1/2 p-5 shadow-lg mb-2 ">
                    <div className="bg-slate-200 w-9 mb-5 text-3xl font-bold text-slate-200 rounded-lg">
                        <i className="bx bx-group"></i>
                    </div>
                    <br/>
                    <span className="mt-5  bg-slate-400  text-slate-400 rounded-lg font-semibold">Nombre de visiteur</span>
                    <br/> <br/> <br/>
        
                    <div className="mt-8">
                        <div className="font-semibold text-base bg-slate-400  text-slate-400 rounded-lg  ">
                            500
                        </div>
                        <div className="text-sm mt-5 w-32 bg-slate-300  text-slate-300 rounded-lg ">
                            +50 Aujourd'hui
                        </div>
                    </div>
        </div>
    </>
  )
}

export default Global_Card_skeleton
