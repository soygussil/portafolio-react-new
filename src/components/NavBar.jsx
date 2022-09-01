import { useState, useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("Inicio");
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="#home">
                   <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio" className={activeLink==='inicio' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
                        <Nav.Link href="#acerca" className={activeLink==='acerca' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('acerca')}>Acerca de mi</Nav.Link>
                        <Nav.Link href="#servicios" className={activeLink==='servicios' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#proyectos" className={activeLink==='proyectos' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('proyectos')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="#">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="#">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}>
                            {" "}
                            <span>Contactame</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;