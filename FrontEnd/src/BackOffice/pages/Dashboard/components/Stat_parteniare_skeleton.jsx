import React from 'react'

const Stat_parteniare_skeleton = () => {
  return (
    <>
    <div className="sm:w-1/3 p-5 shadow-lg mb-2 h-96">
              <h3 className="text-sm mb-5 text-slate-200 bg-slate-200 rounded-lg  font-semibold">Nombre de Personne impacter</h3>
              <div className="mb-5 flex justify-center items-center gap-2">
                  <div className="w-1/2">
                      <span className="text-sm font-semibold text-slate-400 bg-slate-400 rounded-lg ">Total</span><br /><br />
                      <span className='text-slate-100 bg-slate-100 rounded-lg'>55 <small></small></span><br />
                      <span className='text-slate-200 bg-slate-200 rounded-lg'><small>Partenaires</small></span>
                  </div>
                  <div className="relative w-1/2">
                     <div className='w-28 h-28 rounded-full border-8 border-slate-300'></div>
                  </div>
              </div>
              <ul>
                 
                  <li className="my-2 text-xs flex items-center justify-between">
                      <div className="flex items-center justify-around">
                          <div className="text-slate-200 bg-slate-200 rounded-lg">
                              <i className=" bx bx-user"></i>
                          </div>
                   
                          <span></span>
                      </div>
                      <div className="text-slate-300 bg-slate-300 rounded-lg float-right">Economique</div>
                  </li>
                  <li className="mb-2 text-xs flex items-center justify-between">
                      <div className="flex items-center justify-around">
                          <div className=" text-slate-400 bg-slate-400 rounded-lg">
                              <i className=" bx bxs-user"></i>
                          </div>
                          <span></span>
                      </div>
                      <div className="text-slate-400 bg-slate-400 rounded-lg float-right">Communautaires</div>
                  </li>
                  <li className="mb-2 text-xs flex items-center justify-between">
                      <div className="flex items-center justify-around">
                          <div className=" text-slate-200 bg-slate-200 rounded-lg">
                              <i className=" bx bxs-user"></i>
                          </div>
                          <span></span>
                      </div>
                      <div className="text-slate-100 bg-slate-100 rounded-lg float-right">Educatif</div>
                  </li>
              </ul>
      </div>
  </>
  )
}

export default Stat_parteniare_skeleton
