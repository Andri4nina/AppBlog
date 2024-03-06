import React, { useEffect, useState } from 'react';
import Card_User from '../components/Card_User'
import Searchbar from '../../../components/Searchbar'
import axios from 'axios';
import Card_Add_User from '../components/Card_Add_User';
import { Link } from 'react-router-dom';




const List_user = () => {

const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
   
  const fetchUsers = () => {
    axios
      .get('api/users')
      .then((res) => {
      console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  
  const handleCardAddUserClick = (e) => {
   
  /*   updateLevels('Nouvel Utilisateur'); */
  };
   
  return (
  <>
  <section>
    <Searchbar />
    <div className=' grid gap-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        <Link to="/Utilisateur/Formulaire" onClick={handleCardAddUserClick}>
          <Card_Add_User />
        </Link>
        
        {users.map && users.map((user) => (
          <Card_User key={user._id} user={user} />
        ))}
    </div>

  </section>

  </>
  )
}

export default List_user
