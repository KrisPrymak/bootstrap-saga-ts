import React from 'react';
import { Accordion } from 'react-bootstrap';

import { getComments } from '../store/commentsSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

import Loader from './Loader';
import CommentItem from './CommentItem';

interface ICommentsProps {
    postId: number
}

const Comments: React.FC<ICommentsProps> = ({ postId }) => {
  const dispatch = useAppDispatch();

  const loadingStatus = useAppSelector(state => state.commentsSlice.loading);
  const commentList = useAppSelector(state => state.commentsSlice.list);

  const handleGetComments = (postId: number) => {
    dispatch(getComments(postId));
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0" onClick={() => handleGetComments(postId)}>
        <Accordion.Header>Комментарии</Accordion.Header>
        <Accordion.Body className="cards-columns">
          {loadingStatus 
            ? 
            <Loader /> 
            : 
            commentList.map(item => item.postId === postId ? item.contentList.map(comment => {
              return (
                <CommentItem key={comment.id} comment={comment} />
              );
            }) : false)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Comments;