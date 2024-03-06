import React from 'react'
import Profil_Personal_User from '../components/Profil_Personal_User'
import Profil_Privilege_User from '../components/Profil_Privilege_User'
import Profil_Contribution_User from '../components/Profil_Contribution_User'

const Profil_user = () => {
  return (
    <>
      <div className='flex flex-wrap'>
        <Profil_Personal_User />
        <Profil_Privilege_User /> 
        <Profil_Contribution_User />
      </div>
    </>
  )
}

export default Profil_user
