'use client'
import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Provider({ children }) {
    const { user } = useUser();
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        if (user) {
            CreateNewUser();
        }
    }, [user]);

    const CreateNewUser = async () => {
        try {
            const result = await axios.post('/api/user', {
                name: user?.fullName,
                email: user?.emailAddresses[0]?.emailAddress,
            });
            console.log('User data:', result.data);
            setUserDetail(result.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }

    return (
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
            {children}
        </UserDetailContext.Provider>
    )
}

export default Provider