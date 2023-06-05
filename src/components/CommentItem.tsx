import React from 'react';
import { Card } from 'react-bootstrap';

interface ICommentItemProps {
    comment: {
        body: string
        email: string
        id: number
        name: string
        postId: number
    }
}

const CommentItem: React.FC<ICommentItemProps> = ({ comment }) => {
  return (
    <Card style={{ width: '80%' }} className="mb-3">
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentItem;