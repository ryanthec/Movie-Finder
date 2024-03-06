
import React, {useState} from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import '../css/nav.css';
import {Link} from 'react-router-dom';

function Navigation({getSearch}){

    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event){
        setInputValue(event.target.value);
    }

    function handleSearch(){
        getSearch(inputValue);
    }
    

    return(
        <>
        <Navbar bg="myColor" expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">SHOW FINDER</Navbar.Brand>
                
                <Form className="search-bar d-flex ms-auto">
                        <Form.Control type="search" 
                        placeholder="Search TV Shows"
                        className="ms-auto"
                        aria-label="Search"
                        onChange = {handleInputChange}/>
                        <Button onClick = {handleSearch} variant="outline-success">⌕</Button>
                </Form>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className="navLinks">Home</Link>
                        <Link to='/tv' className="navLinks">TV shows</Link>
                        <Link to='/popular' className="navLinks">Popular Movies</Link> 
                    </Nav>
                </Navbar.Collapse> 
                
            </Container>
        </Navbar>

    </>
    );
}

export default Navigation