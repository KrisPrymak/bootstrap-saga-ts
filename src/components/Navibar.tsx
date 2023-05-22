import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import myAvatar from './../media/user.png';

const Navibar = () => {
    return (
        <Navbar collapseOnSelect
            expand={false}
            bg="dark"
            variant="dark"
            className="mb-4">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="mt-4">
                    <Image src={myAvatar} width={32} rounded className="me-2" />
                    <Navbar.Brand>
                        Кристина Приймак (kris.priimak.frontend@gmail.com)
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="cursor-pointer">Список постов</Nav.Link>
                        <Nav.Link>Обо мне</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navibar;