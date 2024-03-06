import React, { useEffect } from 'react'
import './Sidebar.css'
import {Avatar} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import tinycolor from 'tinycolor2';



const Sidebar = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {

      const color1 = getComputedStyle(document.documentElement).getPropertyValue('--skin--color1').trim();
      const color2 = getComputedStyle(document.documentElement).getPropertyValue('--skin--color2').trim();

    
      localStorage.setItem('color1', color1);
      localStorage.setItem('color2', color2);

      const styleColorInput = document.getElementById('ThemeUser');

      styleColorInput.value = color1;

      styleColorInput.addEventListener('input', function () {
        const newColor = this.value;
        const currentColor1 = localStorage.getItem('color1');
        const currentColor2 = localStorage.getItem('color2');

        if (newColor !== currentColor1) {
          document.documentElement.style.setProperty('--skin--color1', newColor);

          // Mettez à jour color2 en conséquence
          const colorDiff = colorDiffBrightness(currentColor1, newColor);
          document.documentElement.style.setProperty('--skin--color2', colorDiff);
          localStorage.setItem('color1', newColor);
          localStorage.setItem('color2', colorDiff);
        } else {
          const lighterColor = lightenColor(newColor, 20);
          document.documentElement.style.setProperty('--skin--color2', lighterColor);
          localStorage.setItem('color2', lighterColor);
        }
      });
    });
  }, []);

  function colorDiffBrightness(color1, color2) {
    const tcColor1 = tinycolor(color1);
    const tcColor2 = tinycolor(color2);

    const diffColor = tcColor1.darken().toString();

    return diffColor;
  }

  function lightenColor(color, percent) {
    const tcColor = tinycolor(color);

    // Calculer une couleur plus claire
    const lighterColor = tcColor.lighten(percent).toString();

    return lighterColor;
  }






  return (
   <>
       <nav className="w-full h-20 fixed z-10 top-0 left-0">
          <div className="flex gap-10 justify-center items-center mt-5 mr-5 float-right usercontent">
              <div className=" flex gap-2 justify-center items-center text-sm font-bold ">
                <div>
                    User
                </div>
                <div>
                  <div className="bg-green-600 w-3 h-3 rounded-full userstatus"></div>
                </div>
        
              </div>
        
              <div className="bg-blue-300 relative w-10 h-10 rounded-full overflow-hidden">
                <Avatar name='user' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
              </div>
          </div>
        </nav>
    
        <aside className="fixed shadow-lg z-20   top-0 left-0  min-h-screen">
          <div className="mt-5 w-full flex mx-5  items-center gap-2">
         
            <div className="w-1/3 h-10 flex justify-center bg-red-100">
             
            </div>
            <div>
              <h3 className="text-base font-extrabold text-center ">
                    Logo
              </h3>
            </div>
          </div>
          
          <hr className='my-5' />
            
          <div className="h-full">
              <div className="overflow-hidden pb-5 h-full">
                  <ul className="overflow-y-auto h-screen pb-28 scroollbar">
                      <li className="px-5 menu-item active">
                      <NavLink to="/" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-home-circle"></i>
                        <div className="text-sm">Tableau de bords</div>
                      </NavLink>
                    </li>
                    <li className="px-5 menu-item">
                      <NavLink to="/Blog" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon bx bx-news"></i>
                        <div className="text-sm">Gestion de blog</div>
                      </NavLink>
                    </li>
        
                    <li className="px-5 menu-item">
                    <NavLink to="/Partenaire" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                     
                        <div className='relative'>
                        <i className="text-2xl menu-icon bx bx-cog "></i>
                        <i className="absolute -top-2 left-0 text-sm  menu-icon bx bx-cog "></i>
                        <i className="absolute -top-4 left-2 text-xl  menu-icon bx bx-cog "></i>
                        </div>
                        <div className="text-sm">Gestion de partenaires</div>
                      </NavLink>
                    </li>
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Project" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon bx bx-sitemap "></i>
                        <div className="text-sm">Gestion de project</div>
                      </NavLink>
                    </li>
        
                    
                    
                    <br />
                    <hr />
                    <br />
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Utilisateur" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-user "></i>
                        <div className="text-sm">Utilisateurs</div>
                      </NavLink>
                    </li>
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Tache" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-task"></i>
                        <div className="text-sm">Taches</div>
                      </NavLink>
                    </li>
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Historique" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-history"></i>
                        <div className="text-sm">Historique</div>
                      </NavLink>
                    </li>
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Galerie" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-image"></i>
                        <div className="text-sm">Galerie</div>
                      </NavLink>
                    </li>
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Archive" className="relative flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-box"></i>
                        <div className="text-sm">Archive</div>
                      </NavLink>
                    </li>
        
                    <br />
                    <hr />
                    <br />
                    
                    <li className="px-5 ">
                      <span className="cursor-pointer mode flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-blue-600 text-2xl menu-icon tf-icons bx bx-moon"></i>
                        <div className="text-sm">Mode</div>
                      </span>
                    </li>
        
        
                    <li className="relative px-5 ">
                      <span  className="cursor-pointer flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-palette"></i>
                        <div className="text-sm">Theme</div>
                        <input type="color" name="Mycolors" id="ThemeUser" className='w-6 border-none' />
                      </span>
                    </li>
                    
                    <li className="px-5 menu-item">
                      <NavLink to="/Parametre" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                        <i className="text-2xl menu-icon tf-icons bx bx-cog"></i>
                        <div className="text-sm">Parametre</div>
                      </NavLink>
                    </li>
                    
                    <br />
                    <hr />
                    <br />
                    
                    <li className="px-5 menu-item"> 
                        <form >
                          <button href="#deconnection" id="logoutButton" className="flex gap-3 items-center px-2 py-5 text-sm menu-link">
                            <i className="text-2xl menu-icon tf-icons bx bx-log-out"></i>
                            <div className="text-sm">Deconnexion</div>
                          </button>
                        </form>
                    </li>
        
                  </ul>
              </div>
            </div>
        </aside>
    </>
  )
}

export default Sidebar
               {/* 
                
              
                
            
            </ul>
        </div>
    
      </div>
    
    </aside> */}


