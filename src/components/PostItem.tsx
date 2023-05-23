import React from 'react';
import { Card, Image, Nav, NavLink } from 'react-bootstrap';
import { IPostItem } from '../store/postsSlice';
import Comments from './Comments';
import { useNavigate } from 'react-router';

interface IPostItemProps {
    post: IPostItem
}

const PostItem: React.FC<IPostItemProps> = ({ post }) => {

    const navigate = useNavigate()

    const handleUserPageClick = (id: number) => {
        navigate(`/userPage/${id}`)
    }

    return (
        <Card style={{ width: "100%" }} className="m-2" border='primary'>
            <Card.Header className="d-flex align-items-center">
                <Nav>
                    <NavLink onClick={() => { handleUserPageClick(post.userId) }}>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            width={32}
                            rounded
                            className="me-2"
                        />
                    </NavLink>
                </Nav>
                <Card.Title>{post.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Comments />
            </Card.Body>
        </Card>
    );
};

export default PostItem;