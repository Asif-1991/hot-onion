import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../logo2.png';



const Header = () => {
    return (
        <div className="" style={{ marginTop: '0px auto' }}>
            <Navbar className=" bg-light">
                <Navbar.Brand href="#home"><img className="ml-5" style={{ width: '160px' }} src={logo2} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    
                <span className="style">{}</span> 
                {/* <Icon className="mr-4" color="lightBlack" icon={shoppingCart} /> */}
                    <Nav className="ml-auto mr-5">
                        <Nav.Link className="mr-3" to="/login">Log In</Nav.Link>

                        <Link to="/login">
                            <Button variant="danger" style={{ borderRadius: '20px' }}>Sign In</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="background">
                <h1 style={{ marginLeft: '28vw', paddingTop: '20vh', marginBottom: '5vh', fontSize: '300%' }}>Best food waiting for your belly</h1>
                <input type="search" className=" focus" style={{ borderRadius: '30px', width: '30vw', padding: '8px', marginLeft: '35vw', zIndex: '-1', border: 'none', height: '6vh' }} placeholder="Search food items" />
                <Button variant="danger" style={{ borderRadius: '30px', padding: '5px',marginBottom: '5px', width: '6vw', marginLeft: '-3vw', height: '6vh' }}>Search</Button>
            </div>
        </div>
    );
};

export default Header;