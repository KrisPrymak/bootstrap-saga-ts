import React from 'react';
import { Container } from 'react-bootstrap';

import { useAppSelector } from '../store/store';
import useLocalStorage from '../hooks/useLocalStorage';

import UserInfoCard from './UserInfoCard';
import Loader from './Loader';
import Posts from './Posts';


const UserPage = () => {
  const currentUser = useLocalStorage('currentUser');
  const currentUserPosts = useLocalStorage('currentUserPosts');
  const loadingStatus = useAppSelector(state => state.userSlice.loading);

  return (
    <>
      {loadingStatus ? <Loader /> : currentUser && (
        <Container>
          <UserInfoCard currentUser={currentUser} />
          {currentUserPosts && <Posts postList={currentUserPosts} />}
        </Container>
      )
      }
    </>
  );
};

export default UserPage;