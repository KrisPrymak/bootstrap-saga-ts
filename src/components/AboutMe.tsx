import React from 'react';
import UserInfoCard from './UserInfoCard';
import { IUser } from '../store/userSlice';

const AboutMe = () => {
    return (
        <UserInfoCard currentUser={myInfo} />
    );
};

export default AboutMe;

const myInfo: IUser = {
    id: 109071997,
    name: 'Кристина Приймак',
    username: 'KrisPriimak',
    email: 'kris.priimak.frontend@gmail.com',
    address: {
        street: '',
        suite: '',
        city: 'Russia',
        zipcode: '400055',
        geo: {
            lat: '',
            lng: '',
        },
    },
    phone: '+79178849863',
    website: 'github.com/KrisPrymak',
    company: {
        name: '',
        catchPhrase: '',
        bs: '',
    }
}