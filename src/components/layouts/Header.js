import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './layouts.scss';

export default function Header() {
    const activeRoute = window.location.href.split('/')[window.location.href.split('/').length -1];

    const [headerClass, setHeaderClass] = useState('sticky');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 34) {
                setHeaderClass('fixed');
            } else {
                setHeaderClass('sticky');
            }
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, [headerClass]);

    return (
        <div className={"header " + headerClass}>
            <div className="main-nav">
                <Nav className="justify-content-end container" activeKey="/home">
                    <Navbar.Brand href="/">
                        <img className="logo" src={require('../../assets/images/logo.png')} alt="logo" />
                    </Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link className={activeRoute === '' ? 'active' : ''} href="/" eventKey="link-0">Wong & Co</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={activeRoute === 'about-us' ? 'active' : ''} href="/about-us" eventKey="link-1">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={activeRoute === 'services' ? 'active' : ''} href="/services" eventKey="link-2">Our Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={activeRoute === 'contact-us' ? 'active' : ''} href="/contact-us" eventKey="link-3">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/" eventKey="link-4" className="btn btn-lg btn-red ml-3">Get consultation</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}