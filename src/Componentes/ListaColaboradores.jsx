import React from 'react'


const ListaColaboradores = ({ lstColaboradores }) => {


    return (
        <div>
            <h2>Listado de Colaboradores:</h2>
            <ul>
                {lstColaboradores.map((c) => <li key={c.id}>{c.nombre} {c.correo}</li>)}
            </ul>
        </div>
    )

}

export default ListaColaboradores