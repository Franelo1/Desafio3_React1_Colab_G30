import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Formulario = ({ lstColaboradores, setLstColaboradores, setLstFiltrada }) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const agregarColaborador = (e) => {
        e.preventDefault();

        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email }]);
        setLstFiltrada([...lstColaboradores, { nombre: nombre, correo: email }]);
    }
    return (
        <div className="p-2">
            <Form onSubmit={agregarColaborador}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa nombre del colaborador" onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa correo del colaborador" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Button className='btn btn-primary' type="submit">
                    Agregar Colaborador
                </Button>
            </Form>
        </div>
    )
}

export default Formulario