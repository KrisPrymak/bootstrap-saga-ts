import React from 'react';
import UserInfoCard from './UserInfoCard';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../store/store';
import Loader from './Loader';

const UserPage = () => {
    const currentUser = useAppSelector(state => state.userSlice.user)
    const loadingStatus = useAppSelector(state => state.userSlice.loading)

    return (
        <>
        { loadingStatus ? <Loader /> : currentUser && (
            <Container>
                <UserInfoCard currentUser={currentUser} />
            </Container>
        )
}</>
    );
};

export default UserPage;