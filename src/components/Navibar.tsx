import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';

import myAvatar from './../media/user.png';

const Navibar = () => {

  const navigate = useNavigate();
  const currentHash = window.location.hash;

  return (
    <Navbar collapseOnSelect
      expand={false}
      bg="dark"
      variant="dark"
      className="mb-4">
      <Container>
        {currentHash === '#/aboutMe' || currentHash === '' || currentHash === '#/'
          ?
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="mt-4">
              <Image src={myAvatar} width={32} rounded className="me-2" />
              <Navbar.Brand>
                                Кристина Приймак (kris.priimak.frontend@gmail.com)
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('/')}>Список постов</Nav.Link>
                <Nav.Link onClick={() => navigate('/aboutMe')}>Обо мне</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
          :
          <Button variant="primary" onClick={() => navigate('/')}>Назад</Button>}
      </Container>
    </Navbar>
  );
};

export default Navibar;