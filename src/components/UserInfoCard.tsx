import React from 'react';
import { IUser } from '../store/userSlice';
import { Card, Image } from 'react-bootstrap';

interface IUserInfoCard {
    currentUser: IUser
}

const UserInfoCard: React.FC<IUserInfoCard> = ({ currentUser }) => {
    return (
        <Card style={{ width: '100%' }} border="info" className='m-auto'>
            <Card.Header>
                <Card.Title className='d-flex'>
                    <Image
                        src="https://png.pngtree.com/png-clipart/20201223/ourlarge/pngtree-cat-technology-sense-cat-avatar-png-image_2591263.jpg"
                        width={94}
                        rounded
                        className="me-4"
                    />

                    <Card.Text>
                        <p>
                            <span className='fw-normal'>Никнейм:</span> {currentUser.username}
                        </p>
                        <p>
                            <span className='fw-normal'>Имя:</span> {currentUser.name}
                        </p>
                    </Card.Text>

                </Card.Title>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
                <Card.Text>
                    From: <span className='fw-bold'>{currentUser.address.city}</span>
                </Card.Text>
                <Card.Text>
                    Phone: <span className='fw-bold'>{currentUser.phone}</span>
                </Card.Text>
                <Card.Text>
                    Email: <span className='fw-bold'>{currentUser.email}</span>
                </Card.Text>
                <Card.Text>
                    Website: <span className='fw-bold'>{currentUser.website}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default UserInfoCard;