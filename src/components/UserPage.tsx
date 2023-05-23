import React from 'react';
import UserInfoCard from './UserInfoCard';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../store/store';
import Loader from './Loader';
import Posts from './Posts';

const UserPage = () => {
    const currentUser = useAppSelector(state => state.userSlice.user)
    const currentUserPosts = useAppSelector(state => state.userSlice.posts)
    const loadingStatus = useAppSelector(state => state.userSlice.loading)

    return (
        <>
        { loadingStatus ? <Loader /> : currentUser && (
            <Container>
                <UserInfoCard currentUser={currentUser} />
                {currentUserPosts && <Posts postList={currentUserPosts}/>}
            </Container>
        )
}</>
    );
};

export default UserPage;