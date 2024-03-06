import React from 'react'

const Profil_Privilege_User = () => {
  return (
    <div className='grayscale w-1/2 shadow-lg'>
        <h4 class="text-center font-semibold">Privilege de l'utilisateur</h4>
        <hr className='my-5 w-10/12 mx-auto'/>
    
        <div class="my-5 mx-auto w-1/2 flex justify-center items-center">
            <h5 class="w-7/12 ">Super utilisateur</h5>
            <div class="w-5/12">
                <div class="flex justify-center items-center mb-2 prvlg-switcher">
                    <input disabled class="form-checkbox" type="checkbox" id="super-user" name="super-user" />
                    <label class="ml-2" for="super-user"></label>
                </div>
            </div>
        </div>
        
        <div class="mb-5 mx-auto w-1/2 flex justify-center items-center">
            <h5 class="w-7/12">Gestion des taches</h5>
            <div class="w-5/12">
                <div class="flex justify-center items-center prvlg-switcher">
                    <input disabled class="form-checkbox" type="checkbox" id="tache" name="tache" />
                    <label class="ml-2" for="tache"></label>
                </div>
            </div>
        </div>
        
        <div class="mb-5 mx-auto w-1/2  flex justify-center items-center">
            <h5 class="w-7/12">Gestion des project</h5>
             <div class="w-5/12">
                <div class="flex justify-center items-center mb-2 prvlg-switcher">
                    <input disabled class="form-checkbox" type="checkbox" id="project" name="project" />
                    <label class="ml-2" for="project"></label>
                </div>
            </div>
        </div>
    
        <div class="mb-5 mx-auto w-1/2  flex justify-center items-center">
            <h5 class="w-7/12">Gestion des partenaires</h5>
             <div class="w-5/12">
                <div class="flex justify-center items-center mb-2 prvlg-switcher">
                    <input disabled class="form-checkbox" type="checkbox" id="partenaire" name="partenaire" />
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
                        <input disabled className="form-checkbox" type="checkbox" id="create-user" name="create-user" />
                        <label className="ml-2" for="create-user"></label>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2 justify-center items-center">
                <div>Modification</div>
                <div className="flex">
                    <div className="flex justify-center items-center prvlg-switcher">
                        <input disabled className="form-checkbox" type="checkbox" id="updat-user" name="updat-user" />
                        <label className="ml-2" for="updat-user"></label>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2 justify-center items-center">
                <div>Suppression</div>
                <div className="flex">
                    <div className="flex justify-center items-center mb-2 prvlg-switcher">
                        <input disabled className="form-checkbox" type="checkbox" id="del-user" name="del-user" />
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
                            <input disabled className="form-checkbox" type="checkbox" id="create-blog" name="create-blog" />
                            <label className="ml-2" for="create-blog"></label>
                        </div>
                    </div>
            </div>
            <div className="mt-5 grid grid-cols-2 justify-center items-center">
                <div>Modification</div>
                <div className="flex">
                    <div className="flex justify-center items-center prvlg-switcher">
                        <input disabled className="form-checkbox" type="checkbox" id="updat-blog" name="updat-blog" />
                        <label className="ml-2" for="updat-blog"></label>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2 justify-center items-center">
                <div>Suppression</div>
                <div className="flex">
                    <div className="flex justify-center items-center mb-2 prvlg-switcher">
                        <input disabled className="form-checkbox" type="checkbox" id="del-blog" name="del-blog" />
                        <label className="ml-2" for="del-blog"></label>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2 justify-center items-center">
                <div>Approbation</div>
                <div className="flex">
                    <div className="flex justify-center items-center mb-2 prvlg-switcher">
                        <input disabled className="form-checkbox" type="checkbox" id="approb-blog" name="approb-blog" />
                        <label className="ml-2" for="approb-blog"></label>
                    </div>
                </div>
            </div>
        </div>
        



    </div>



  )
}

export default Profil_Privilege_User
