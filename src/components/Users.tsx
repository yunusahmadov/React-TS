import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../actions/Actions';
import { Link } from 'react-router-dom';
import { Person } from '../interfaces/person.interface';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Создаем состояние для отслеживания загрузки

    useEffect(() => {
        getAllUsers()
            .then(data => {
                setUsers(data.users);
                setTimeout(() => {
                  setLoading(false); // После загрузки данных устанавливаем loading в false
                }, 1000);
            });
    }, []);

    return (
        <>
            <div className='user-container'>
                {loading ? ( // Если данные еще загружаются, показываем скелетон
                    // <Box padding='6' boxShadow='lg' bg='white'>
                    //     <SkeletonCircle size='10' />
                    //     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    // </Box>
                    users.map((user: Person) => (
                     <Box padding='6' boxShadow='lg' bg='white'>
                        <SkeletonCircle size='200' />
                        <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
                    </Box>
                  ))
                ) : (
                    // Если данные загружены, показываем их
                    users.map((user: Person) => (
                        <div key={user.id} className='user-card'>
                            <h2>{user.firstName}</h2>
                            <img src={user.image} alt="" />

                            <Link to={`/user/${user.id}`}>
                            <Button colorScheme='blue'>More Info</Button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Users;
