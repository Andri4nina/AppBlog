import React from 'react'
import Searchbar from '../../../components/Searchbar'
import Card_partenaires from '../components/Card_partenaires'
import Add_partenaire from '../components/Add_partenaire'
import { Link } from 'react-router-dom'

const List_part = () => {
  return (
   <>
   <section>
    <Searchbar />
    <div className='mt-5'>
    <div className='grid grid-cols-2 gap-2'>
      <Link to="/Partenaire/Formulaire"> <Add_partenaire /></Link>
     
      <Card_partenaires />
      <Card_partenaires />
      <Card_partenaires />
      <Card_partenaires />
    </div>
    
    </div>
   
   </section>
   
   </>
  )
}

export default List_part
