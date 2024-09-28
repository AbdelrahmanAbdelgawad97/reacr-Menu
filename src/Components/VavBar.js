import { useState } from "react";
import { Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({filterSearch}) {

    const [searchValue, SetSeatchValue] = useState('')

    const search = () => {
        filterSearch(searchValue)
        SetSeatchValue("")
    }

    return (
        <>
            <Row>
                <Navbar bg='dark' variant="dark" expand="lg" className="p-3">
                    <Container className="d-flex justify-content-between">
                        <Navbar.Brand href="#">
                            <div className="brand-color">
                                The Resturant
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll></Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    className="me-2"
                                    onChange={(e)=>{SetSeatchValue(e.target.value)}}
                                    value={searchValue}
                                />
                                <button onClick={()=>search()} className="btn-search mx-2">Search</button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </>
    )
}

export default NavBar;