import { useEffect } from 'react';
import Loader from './Loader';
import Posts from './Posts';
import { getPosts } from '../store/postsSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

const MainPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    const postList = useAppSelector(state => state.postsSlice.list)
    const loadingStatus = useAppSelector(state => state.postsSlice.loading)

    return (
        <>
            {loadingStatus ? <Loader /> : <Posts postList={postList} />}
        </>
    );
};

export default MainPage;