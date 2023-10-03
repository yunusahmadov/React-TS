import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../actions/Actions';
import { Link } from 'react-router-dom';
import { Person } from '../interfaces/person.interface';

function Users() {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getAllUsers()
        .then(data=>{
            setUsers(data.users)
        })
    },[])
    console.log(users);

    return (
        <div className='user-container'>
          {users.map((user:Person) => (
            <div key={user.id} className='user-card'> 
                <h2>{user.firstName}</h2>
                <img src={user.image} alt="" />
                <Link to={`/user/${user.id}`}>More Info</Link>
            </div>

          ))}
        </div>
      );
}

export default Users