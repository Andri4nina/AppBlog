import React from 'react'

const Stat_Creation_blog = () => {
  return (
    <>
      <div className="shadow-lg p-5 w-full lg:w-4/6 dash-card mb-2"> 
                <div className="mb-5 block sm:flex gap-2">
                    <div className="sm:w-2/3 sm:border-r ">
                    <h3 className="font-semibold text-base mb-5">Statistique de blog</h3>
                        <canvas width="400px" height="200px" id="Donchart"></canvas>        
                    </div>
                    <div className="mx-auto w-1/3 relative">
                    <h3 className="font-semibold text-base mb-5">Statistique de Visiteur</h3>
                        <canvas id="VisitChart" className="w-full h-28"></canvas>
                        <span className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base">75%</span>
                      
    
                        <div className="mt-10 flex justify-center gap-2">
                            <div className="flex items-center justify-center gap-2">
                                <div className=" dash-icon">
                                    <i className="text-gray-500 bx bxs-group"></i>
                                </div>
                                <p className="text-sm">2021</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="dash-icon">
                                    <i className="text-skin-color1 bx bxs-group"></i>
                                </div>
                                <p className="text-sm">2022</p>
                            </div>
                        </div>
                    </div>
                </div>       
        </div>
    </>
  )
}

export default Stat_Creation_blog
