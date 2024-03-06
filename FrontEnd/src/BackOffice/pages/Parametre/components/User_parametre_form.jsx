import React from 'react'
import InputFields from '../../../../Components/InputFields'

const User_parametre_form = () => {
  return (
    <>
    
        <div class="shadow-lg w-2/3 mx-auto p-10">
            <form action method='POST' enctype="multipart/form-data">
                <div class=" mx-auto  flex justify-center items-center gap-8">
                    <img src="" alt="" class="object-cover w-36 h-36" />
                    <div class="w-2/3">
                        <b>Mettre a jour votre photo de profil</b>
                        <input type="file" class="pdp" name="user-pdp"/>
                    </div>
                     <div class="hidden">
                                    <input type="hidden" name='hidden_user_pdp' value/>
                                    <input type="file" name="user-pdp" accept="images/*" />
                        </div>
                </div>
                <div class="bounceslideInFromRight mx-auto my-5 ">
                    <InputFields
                        label="Nom"
                        name="name_user"
                        placeholder="Entrez le nom d'utilisateur"
                      />
                      <InputFields
                        label="Prénom"
                        name="firstName_user"
                        placeholder="Entrez le prénom d'utilisateur"
                      />
                      <InputFields
                        label="Email"
                        name="email_user"
                        placeholder="Entrez l' email d'utilisateur"
                      />
                    <InputFields
                        label="Ancien Mot de passe"
                        name="mdp_user"
                        placeholder="Ancien Mots de passe"
                        type="password"
                    />
                    <InputFields
                        label="Noveau Mot de passe"
                        name="mdp_user"
                        placeholder="Nouveau Mots de passe"
                        type="password"
                      />
                  
                    <InputFields
                        label="Confirmation Mot de passe"
                        name="mdp_user"
                        placeholder="confirmation Mots de passe"
                        type="password"
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
                  
    
                    <div className='my-5 flex justify-end mr-5'>
                            <button className='flex justify-around items-center border-2 border-green-500 text-green-500 px-10 py-2 hover:bg-green-500 hover:text-white transition-colors '>Enregistrer</button>                
                    </div>
                
                </div>
    
            </form>
    
        </div>

    
    
    </>
  )
}

export default User_parametre_form
