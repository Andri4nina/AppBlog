
import './FrontNav.css'




const FrontNav = () => {

    
  return (
    
  /*   
     
                <li><a href="#Organisme rattaches" id='Organisme_rattaches'>Organisme rattaches</a>
                    <ul>
                        <li><a href="#Jirama">Jirama</a></li>
                        <li><a href="#ORE">ORE</a></li>
                        <li><a href="#ADER">ADER</a></li>
                        <li><a href="#OMH">OMH</a></li>
                    </ul>
                </li>
                <li><a href="#Project" id='Project'>Project</a>
                    <ul>
                        <li><a href="#Bioenergie">Bioenergie</a></li>
                        <li><a href="#DECIM">DECIM</a></li>
                        <li><a href="#Electrificaction rurale">Electrificaction rurale</a></li>
                        <li><a href="#Grand projects">Grand projects</a>
                            <ul>
                                <li><a href="#Volobe">Volobe</a></li>
                                <li><a href="#Ranomafana">Ranomafana</a></li>
                                <li><a href="#Sahofika">Sahofika</a></li>
                            </ul>
                        </li>
                        <li><a href="#Hydrocarbure">Hydrocarbure</a></li>
                        <li><a href="#PAGOSE & LEAD">PAGOSE & LEAD</a></li>
                        <li><a href="#PRIRTEM">PRIRTEM</a></li>
                    </ul>
                </li>
                <li><a href="#Branchement mora" id='Branchement_mora'>Branchement mora</a></li>
                <li><a href="#GIZ" id='GIZ'>GIZ</a></li>
                <li><a href="#Nos partenaires" id='Nos_partenaires'>Nos partenaires</a></li>
            </ul>
        </div>
      </div>
    </header>  */

    <header className='bg-skin-color1 fixed top-0 left-0 w-full header'>
        <div className='max-w-7xl m-auto px-0 py-4 '>
            <div className='Logo w-full'>
                <img src="" alt="logo" className='align-middle'/>
            </div>
            <div className=' flex justify-around items-center'>
                <nav className='menu'>
                    <div className="hidden head">
                        <div className="logo"><img src="" alt="logo" className='align-middle'/></div>
                        <button type='button' className='close-menu-btn'></button>
                    </div>

                    <ul className='list-none text-white'>
                        <li className='inline-block'><a href="#" className='capitalize text-sm block px-3 text-white leading-normal first-menu'>Acceuil</a></li>
                        <li className='inline-block'><a href="#" className='capitalize text-sm block px-3 text-white leading-normal first-menu'>Mots du Ministre</a></li>
                        
                        <li className='inline-block relative dropdown'>
                            <a  href="#" 
                                className='capitalize text-sm block px-6 text-white leading-normal first-menu'>
                                    Actualite
                            </a>
                            <i className='absolute right-0 top-1 bx bx-chevron-down'></i>
                            <ul className='absolute top-8 left-0 w-64 px-5 py-0 bg-skin-color1 text-sm shadow-sm z-10  sub-menu'>
                                <li className='px-1 py-2'><a  href="#Article"><span>Article</span></a></li>
                                <li className='px-1 py-2'><a  href="#Reportage"><span>Reportage</span></a></li>
                                <li className='px-1 py-2'><a  href="#Communique"> <span>Communique</span></a></li>
                                <li className='px-1 py-2'><a  href="#Activite en cours"> <span>Activite en cours</span></a></li>
                            </ul> 

                        </li>

                        <li className='inline-block relative dropdown'>
                            <a  href="#" 
                                className='capitalize text-sm block px-6  text-white leading-normal first-menu'>
                                Le Ministere
                            </a>
                            <i className='absolute right-0 top-1 bx bx-chevron-down'></i>
                            <ul className='absolute top-8 left-0 w-64 px-5 py-0 bg-skin-color1 text-sm shadow-sm z-10 sub-menu'>
                                <li className='px-1 py-2'><a href="#Document Techinques"><span>Document Techinques</span></a></li>
                                <li className='px-1 py-2 relative dropdown'>
                                    <a href="#Directions">
                                        <span>Directions</span> 
                                    </a>
                                    <i className='absolute right-0 top-2 bx bx-chevron-right' ></i>
                                    <ul className='absolute -top-0 bg-skin-color1 w-52 -right-full sub-menu sub-menu-right'>
                                        <li className='px-1 py-2'><a href="#Document Techinques"><span>Direction Generale</span></a></li>
                                        <li className='px-1 py-2'><a href="#DEE"><span>Direction Emergence Energetique</span></a></li>
                                        <li className='px-1 py-2'><a href="#Direction des Hydrocarbures"><span>Direction des Hydrocarbures</span></a></li>
                                    </ul>                        
                                </li>
                                <li className='px-1 py-2'><a href="#HistoriqueVisionmission"><span>Historique / Vision & Mission</span></a></li>
                                <li className='px-1 py-2 relative dropdown'>
                                    <a href="#Avis et annonces">
                                        <span>Avis et annonces</span>
                                    </a>
                                    <i className='absolute right-0 top-2 bx bx-chevron-right' ></i>
                                    <ul className='absolute -top-0 bg-skin-color1 w-52 -right-full sub-menu sub-menu-right'>
                                        <li className='px-1 py-2'><a href="#Organigramme"><span>Organigramme</span></a></li>
                                        <li className='px-1 py-2'><a href="#Appel au project"><span>Appel au project</span></a></li>
                                        <li className='px-1 py-2'><a href="#Appel au recrutement "><span>Appel au recrutement</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className='inline-block relative dropdown'>
                            <a  href="#" 
                            className='capitalize text-sm block  px-6  text-white leading-normal first-menu'>
                                Les organisme rattaches
                            </a>
                            <i className='absolute right-0 top-1 bx bx-chevron-down'></i>
                            <ul className='absolute top-8 left-0 w-64 px-5 py-0 bg-skin-color1 text-sm shadow-sm z-10 sub-menu'>
                                 <li className='px-1 py-2'><a href="#Jirama"><span>Jirama</span></a></li>
                                 <li className='px-1 py-2'><a href="#ORE"><span>ORE</span></a></li>
                                 <li className='px-1 py-2'><a href="#ADER"><span>ADER</span></a></li>
                                 <li className='px-1 py-2'><a href="#OMH"><span>OMH</span></a></li>
                            </ul>
                        </li>
                        <li className='inline-block relative dropdown'>
                            <a  href="#" 
                            className='capitalize text-sm block px-6  text-white leading-normal first-menu'>
                                Projects
                            </a>
                            <i className='absolute right-0 top-1 bx bx-chevron-down'></i>
                            <ul className='absolute top-8 left-0 w-64 px-5 py-0 bg-skin-color1 text-sm shadow-sm z-10 sub-menu'>
                                 <li className='px-1 py-2'><a href="#Bioenergie"><span>Bioenergie</span></a></li>
                                 <li className='px-1 py-2'><a href="#DECIM"><span>DECIM</span></a></li>
                                 <li className='px-1 py-2'><a href="#Electrificaction rurale"><span>Electrificaction rurale</span></a></li>
                                 <li className='px-1 py-2 relative dropdown'><a href="#Grand projects">
                                    <span>Grand projects</span>
                                    </a>
                                    <i className='absolute right-0 top-2 bx bx-chevron-right' ></i>
                                 <ul className='absolute -top-0 bg-skin-color1 w-52 -right-full sub-menu sub-menu-right'>
                                         <li className='px-1 py-2'><a href="#Volobe"><span>Volobe</span></a></li>
                                         <li className='px-1 py-2'><a href="#Ranomafana"><span>Ranomafana</span></a></li>
                                         <li className='px-1 py-2'><a href="#Sahofika"><span>Sahofika</span></a></li>
                                    </ul>
                                </li>
                                 <li className='px-1 py-2'><a href="#Hydrocarbure"><span>Hydrocarbure</span></a></li>
                                 <li className='px-1 py-2'><a href="#PAGOSE & LEAD"><span>PAGOSE & LEAD</span></a></li>
                                 <li className='px-1 py-2'><a href="#PRIRTEM"><span>PRIRTEM</span></a></li>
                            </ul>
                        </li>
                        <li className='inline-block'><a href="#" className='capitalize px-3 text-sm block  text-white leading-normal first-menu'>BRANCHEMENT Mora</a></li>
                        <li className='inline-block'><a href="#" className='capitalize px-3  text-sm block  text-white leading-normal first-menu'>GIZ</a></li>
                        <li className='inline-block'><a href="#" className='capitalize px-3  text-sm block  text-white leading-normal first-menu'>Nos Partenaires</a></li>
                    </ul>
                </nav>
                <div className='flex header-right'>
                    <button type='button' className='search-btn icon-btn'>
                    <i className=''>Chercher</i>
                    </button>
                    <button type='button' className='search-btn icon-btn'>
                    <i className=''>Mode</i>
                    </button>
                    <button type='button' className='search-btn icon-btn'>
                    <i className=''>Theme</i>
                    </button>
                    <button type='button' className='hidden open-menu-btn'>
                    <label
                        for="nav_bar_icon"
                        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
                        >
                        <input id="nav_bar_icon" type="checkbox" className="hidden peer" />
                        <div
                            className="w-2/3 h-1.5 bg-black-900 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
                        ></div>
                        <div
                            className="w-full h-1.5 bg-black-900 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
                        ></div>
                        <div
                            className="w-2/3 h-1.5 bg-black-900 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
                        ></div>
                        </label>
                    </button>
                </div>
            </div>
          
        </div>
    </header>

  )
}

export default FrontNav
