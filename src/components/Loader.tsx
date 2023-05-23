import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation="border" variant="primary" className='d-flex m-auto'/>
    );
};

export default Loader;