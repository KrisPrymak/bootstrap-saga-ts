import React from 'react';
import { Container } from 'react-bootstrap';

import { IPostItem } from '../store/postsSlice';

import PostItem from './PostItem';

interface IPostsProps {
    postList: Array<IPostItem>
}

const Posts: React.FC<IPostsProps> = ({ postList }) => {
  return (
    <Container className="card-columns">
      {postList.map(post => {
        return (
          <PostItem key={post.id} post={post} />
        );
      })}
    </Container>
  );
};

export default Posts;