import React, { useState } from 'react'
import InputFields from '../../../../Components/InputFields'
import './Formulaire_User.css'

const Formulaire_User = () => {
    const [formData, setFormData] = useState({
        name_user: '',
        firstName_user: '',
        email_user: '',
        mdp_user: '',
      });
    
      // Fonction de gestion des changements pour mettre à jour le state lors de la saisie
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };



  return (
   <>
    <form action="" className='w-full mt-5'>
        <div className='grid *:grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='w-full shadow-lg'>
            <h2 className="text-2xl font-bold my-5 text-center">Profil de l'utilisateur</h2>
            <hr className='w-10/12 mx-auto'/>
            <div className="my-5 flex justify-center items-center">
                <div className="relative h-20 w-20">
                    <img  alt="" id="pdp" className=" h-full w-full object-cover   border rounded-full" />
                    <label className="cursor-pointer absolute bottom-0 right-0" for="user-pdp"><i className="text-white bg-gray-600 border border-gray-600 rounded-full bx bx-camera"></i></label>
                    <div className="hidden">
                        <input type="file" name="user-pdp" accept="images/*" />
                    </div>
                </div>
            </div>
            
        
            <InputFields
            label="Nom"
            name="name_user"
            placeholder="Entrez le nom d'utilisateur"
            value={formData.name_user}
            onChange={handleChange}
              />
              <InputFields
                label="Prénom"
                name="firstName_user"
                placeholder="Entrez le prénom d'utilisateur"
                value={formData.firstName_user}
                onChange={handleChange}
              />
              <InputFields
                label="Email"
                name="email_user"
                placeholder="Entrez l' email d'utilisateur"
                value={formData.email_user}
                onChange={handleChange}
              />
              <InputFields
                label="Mot de passe"
                name="mdp_user"
                placeholder="Mots de passe"
                type="password"
                value={formData.mdp_user}
                onChange={handleChange}
              />
              
              <InputFields
                label="Role"
                name="role_user"
                placeholder="Roles de l'utilisateur"          
              />
              
              <InputFields
                label="Telephone"
                name="Tel_user"
                placeholder="032 32 032 32"          
              />
              
            
            </div>
            <div className='w-full shadow-lg'>
                <h2 className="text-2xl font-bold my-5 text-center">Privilege de l'utilisateur</h2>
                <hr className='w-10/12 mx-auto'/>
                
           
                
                <div class="my-5 mx-auto w-1/2 flex justify-center items-center">
                    <h5 class="w-7/12 ">Super utilisateur</h5>
                    <div class="w-5/12">
                        <div class="flex justify-center items-center mb-2 prvlg-switcher">
                            <input class="form-checkbox" type="checkbox" id="super-user" name="super-user" />
                            <label class="ml-2" for="super-user"></label>
                        </div>
                    </div>
                </div>
                
                <div class="mb-5 mx-auto w-1/2 flex justify-center items-center">
                    <h5 class="w-7/12">Gestion des taches</h5>
                    <div class="w-5/12">
                        <div class="flex justify-center items-center prvlg-switcher">
                            <input class="form-checkbox" type="checkbox" id="tache" name="tache" />
                            <label class="ml-2" for="tache"></label>
                        </div>
                    </div>
                </div>
                
                <div class="mb-5 mx-auto w-1/2  flex justify-center items-center">
                    <h5 class="w-7/12">Gestion des project</h5>
                     <div class="w-5/12">
                        <div class="flex justify-center items-center mb-2 prvlg-switcher">
                            <input class="form-checkbox" type="checkbox" id="project" name="project" />
                            <label class="ml-2" for="project"></label>
                        </div>
                    </div>
                </div>

                <div class="mb-5 mx-auto w-1/2  flex justify-center items-center">
                    <h5 class="w-7/12">Gestion des partenaires</h5>
                     <div class="w-5/12">
                        <div class="flex justify-center items-center mb-2 prvlg-switcher">
                            <input class="form-checkbox" type="checkbox" id="partenaire" name="partenaire" />
                            <label class="ml-2" for="partenaire"></label>
                        </div>
                    </div>
                </div>
                
                <hr className='w-10/12 mx-auto'/>
                <h4 className="font-semibold mt-5 mx-auto w-10/12">Gestion des utilisateurs</h4>
                <div className="my-5 mx-auto w-10/12  grid grid-cols-2 justify-center items-center">
                    <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div className=''>Creation</div>
                        <div className="flex ">
                            <div className="flex justify-center items-center prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="create-user" name="create-user" />
                                <label className="ml-2" for="create-user"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div>Modification</div>
                        <div className="flex">
                            <div className="flex justify-center items-center prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="updat-user" name="updat-user" />
                                <label className="ml-2" for="updat-user"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div>Suppression</div>
                        <div className="flex">
                            <div className="flex justify-center items-center mb-2 prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="del-user" name="del-user" />
                                <label className="ml-2" for="del-user"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='w-10/12 mx-auto'/>
                <h4 className="font-semibold mt-5 mx-auto w-10/12">Gestion des blogs</h4>
                <div className="my-5 mx-auto w-10/12  grid grid-cols-2 justify-center items-center">
                <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div>Creation</div>
                        <div className="flex">
                            <div className="flex justify-center items-center prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="create-blog" name="create-blog" />
                                <label className="ml-2" for="create-blog"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div>Modification</div>
                        <div className="flex">
                            <div className="flex justify-center items-center prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="updat-blog" name="updat-blog" />
                                <label className="ml-2" for="updat-blog"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div>Suppression</div>
                        <div className="flex">
                            <div className="flex justify-center items-center mb-2 prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="del-blog" name="del-blog" />
                                <label className="ml-2" for="del-blog"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 justify-center items-center">
                        <div>Approbation</div>
                        <div className="flex">
                            <div className="flex justify-center items-center mb-2 prvlg-switcher">
                                <input className="form-checkbox" type="checkbox" id="approb-blog" name="approb-blog" />
                                <label className="ml-2" for="approb-blog"></label>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className='my-5 flex justify-end mr-5'>
                    <button className='flex justify-around items-center border-2 border-green-500 text-green-500 px-10 py-2 hover:bg-green-500 hover:text-white transition-colors '>Enregistrer</button>                
                </div>
            
            </div>
        </div>
    
    </form>
   </>
  )
}

export default Formulaire_User
