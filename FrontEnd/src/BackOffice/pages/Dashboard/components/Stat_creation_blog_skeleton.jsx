import React from 'react'

const Stat_creation_blog_skeleton = () => {
  return (
    <>
    <div className="shadow-lg p-5 w-full lg:w-4/6 dash-card mb-2"> 
              <div className="mb-5 block sm:flex gap-2">
                  <div className="sm:w-2/3 sm:border-r ">
                  <h3 className="font-semibold text-base bg-slate-200 text-slate-200 rounded-lg w-44 mb-5">Statistique de blog</h3>
                      <div className='h-52 grid grid-cols-10 items-end gap-0'>
                        <div className='h-full w-5 bg-slate-400 rounded-lg'>
                        </div>
                        <div className='h-20 w-5 bg-slate-300 rounded-lg'>
                        </div>
                        <div className='h-40 w-5 bg-slate-100 rounded-lg'>
                        </div>
                        <div className='h-28 w-5 bg-slate-200 rounded-lg'>
                        </div>
                        <div className='h-full w-5 bg-slate-300 rounded-lg'>
                        </div>
                        <div className='h-5 w-5 bg-slate-400 rounded-lg'>
                        </div>
                        <div className='h-14 w-5 bg-slate-300 rounded-lg'>
                        </div>
                        <div className='h-36 w-5 bg-slate-100 rounded-lg'>
                        </div>
                        <div className='h-52 w-5 bg-slate-200 rounded-lg'>
                        </div>
                        <div className='h-10 w-5 bg-slate-300 rounded-lg'>
                        </div>
                      </div>      
                  </div>
                  <div className="mx-auto w-1/3 relative">
                  <h3 className="font-semibold text-base bg-slate-200 text-slate-200 rounded-lg w-44 mb-5">Statistique de blog</h3>
                      <div  className="relative border-slate-300 border-8 rounded-full w-28 h-28 mx-auto"><span className="absolute top-1/2 left-1/2 bg-slate-300 rounded-lg text-slate-300 -translate-x-1/2 -translate-y-1/2 text-base">75%</span>
                    </div>
                      
  
                      <div className="mt-10 flex justify-center gap-2">
                          <div className="flex items-center justify-center gap-2">
                              <div className="text-slate-500 bg-slate-500 rounded-lg w-5 ">
                                  <i className=" bx bxs-group"></i>
                              </div>
                              <p className="bg-slate-200 text-slate-200 rounded-lg text-sm">2021</p>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                          <div className="text-slate-300 bg-slate-300 rounded-lg w-5 ">
                                  <i className=" bx bxs-group"></i>
                              </div>
                              <p className="bg-slate-200 text-slate-200 rounded-lg text-sm">2022</p>
                          </div>
                      </div>
                  </div>
              </div>       
      </div>
  </>
  )
}

export default Stat_creation_blog_skeleton
