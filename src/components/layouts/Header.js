import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './layouts.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="top-nav text-left">
                <div className="container">
                    <div className="contact-email text-white font-weight-light">
                        <MailOutlineIcon /><span className="ml-2 font-italic">enquiries@wonglegalservices.com</span>
                    </div>
                </div>
            </div>
            <div className="main-nav">
                <Nav className="justify-content-end container" activeKey="/home">
                    <Navbar.Brand href="/">
                        <img className="logo" src={require('../../assets/images/logo.png')} alt="logo" />
                    </Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link to="/" eventKey="link-0">Wong & Co</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/about-us" eventKey="link-1">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/services" eventKey="link-2">Our Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/contact-us" eventKey="link-3">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/" eventKey="link-4">Get consultation</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}