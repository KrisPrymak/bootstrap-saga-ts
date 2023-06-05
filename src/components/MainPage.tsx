import { useEffect } from 'react';

import { getPosts } from '../store/postsSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

import Loader from './Loader';
import Posts from './Posts';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const postList = useAppSelector(state => state.postsSlice.list);
  const loadingStatus = useAppSelector(state => state.postsSlice.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {loadingStatus ? <Loader /> : <Posts postList={postList} />}
    </>
  );
};

export default MainPage;