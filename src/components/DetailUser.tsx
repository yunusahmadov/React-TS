import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../actions/Actions';
import { Person } from '../interfaces/person.interface';
import { Skeleton, SkeletonCircle, SkeletonText,Box } from '@chakra-ui/react';


function DetailUser() {
    const { id } = useParams();
    const [user,setUser]=useState<Person | null >(null)

    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        getOneUser(id)
          .then(data => {
            setUser(data);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          });
      }, [id]);
    console.log(user);
    
  return (
    
    loading?(
    <div className='detail-page'>
      <SkeletonCircle size='200' />
      <Box padding='6' boxShadow='lg' bg='white'>
      <SkeletonText mt='4' noOfLines={4} spacing='10' skeletonHeight='5' />
  </Box>
  </div>
    ):
    <div className='detail-page'>
        <h1>User Info</h1>
       <div className="detail-top">
        <img src={user?.image} alt="" />
       </div>
       <div className="detail-center">
              <h3>Full Name:{user?.firstName} {user?.lastName}</h3>
              <h3>Email:{user?.email}</h3>
              <h3>Nickname:{user?.username}</h3>
              <h3>BirthDate:{user?.birthDate}</h3>
              <h3>Gender:{user?.gender}</h3>
              <h3>Height:{user?.height}</h3>
              <h3>Weight:{user?.weight}</h3>
              <h3>Phone:{user?.phone}</h3>
              <h3>University:{user?.university}</h3>
              <h3>City:{user?.address.city}</h3>
              <h3>Address:{user?.address.address}</h3>
              <h3>Card Number:{user?.bank.cardNumber}</h3>
              <h3>Company Name:{user?.company.name}</h3>
              <h3>Company Title:{user?.company.title}</h3>

              





              

       </div>
    </div>
  )
}

export default DetailUser