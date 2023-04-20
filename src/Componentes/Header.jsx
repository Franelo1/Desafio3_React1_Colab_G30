import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'

const Header = ({ lstColaboradores, setLstFiltrada }) => {

    const filtrarElementos = (valorDeLaCaja) => {
        const nuevoArreglo = lstColaboradores.filter((e) => e.nombre.includes(valorDeLaCaja));
        setLstFiltrada(nuevoArreglo);
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand >Buscador de Colaboradores, React I  Desafío 3, 2023 G30</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }} navbarScroll></Nav>

                    <Form className="d-flex">
                        <Form.Control

                            type="search"
                            placeholder="Buscar Colaborador"
                            className="me-2"
                            aria-label="Search"

                            onChange={(e) => filtrarElementos(e.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header