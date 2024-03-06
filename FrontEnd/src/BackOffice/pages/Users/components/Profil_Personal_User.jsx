import React from 'react'
import {Avatar} from '@chakra-ui/react'

const Profil_Personal_User = () => {
  return (
 
   <div class="shadow-lg w-1/2 p-5 crud-card">
        <h4 class="text-center font-semibold">Information personnel de l'utilisateur</h4>
        <hr className='my-5 w-10/12 mx-auto'/>
        <div class="my-5 flex justify-center items-center">
            <div className="bg-red-300 relative w-10 h-10 rounded-full overflow-hidden">
                <Avatar name='user' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl '/>
            </div>
        </div>
        <div class="mb-5 flex justify-start items-center">
            <div class="w-1/12"><i class="">@</i></div>
            <span>Rasoamanana Razafimanantsoa Andrianina </span>
        </div>
        <div class="mb-5 flex justify-start items-center">
            <div class="w-1/12"><i class="bx bx-envelope"></i></div>
            <span>Raso4m4ndrianina@gmail.com</span>
        </div>

        <div class="mb-5 flex justify-start items-center">
            <div class="w-1/12"><i class="bx bx-badge"></i></div>
            <span>Administrateur</span>
        </div>

        <div class="mb-5 flex justify-start items-center">
            <div class="w-1/12"><i class="bx bx-phone"></i></div>
            <span>0341320874</span>
        </div>
    </div>

  )
}

export default Profil_Personal_User
