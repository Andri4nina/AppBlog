import React from 'react'

const Stat_partenaire = () => {
  return (
    <>
      <div className="sm:w-1/3 p-5 shadow-lg mb-2 h-96">
                <h3 className="text-sm mb-5 font-semibold">Nombre de Personne impacter</h3>
                <div className="mb-5 flex justify-center items-center gap-2">
                    <div className="w-1/2">
                        <span className="text-sm font-semibold">Total</span><br /><br />
                        <span>55 <br /><small>Partenaires</small></span>
                    </div>
                    <div className="relative w-1/2">
                       
                    </div>
                </div>
                <ul>
                   
                    <li className="my-2 text-xs flex items-center justify-between">
                        <div className="flex items-center justify-around">
                            <div className=" dash-icon">
                                <i className="text-green-500 bx bxs-user"></i>
                            </div>
                     
                            <span></span>
                        </div>
                        <div className="float-right">Economique</div>
                    </li>
                    <li className="mb-2 text-xs flex items-center justify-between">
                        <div className="flex items-center justify-around">
                            <div className=" dash-icon">
                                <i className="text-orange-500 bx bxs-user"></i>
                            </div>
                            <span></span>
                        </div>
                        <div className="float-right">Communautaires</div>
                    </li>
                    <li className="mb-2 text-xs flex items-center justify-between">
                        <div className="flex items-center justify-around">
                            <div className=" dash-icon">
                                <i className="text-blue-500 bx bxs-user"></i>
                            </div>
                            <span></span>
                        </div>
                        <div className="float-right">Educatif</div>
                    </li>
                </ul>
        </div>
    </>
  )
}

export default Stat_partenaire
