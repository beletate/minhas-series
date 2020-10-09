import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({ match }) => {

    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios
            .get('/api/genres/' + match.params.id)
            .then(res => {
                setName(res.data.name)
            })
    }, [match.params.id]) //Aqui é informada a dependencia do useEffect

    const onChange = evt => {
        setName(evt.target.value) //O evento vai pegar o valor do alvo e a alocar no Name
    }

    const save = () => {
        axios
            .put('/api/genres/' + match.params.id, {
            name //Pode ser name:name, mas quando são iguais é aconselhavel assim
        })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return (
            <Redirect to='/generos/'>
            </Redirect>
        )
    }

    return (
        <div className='container'>
            <h1>Editar Genêros</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Editar</button>

            </form>
        </div>
    )
}

export default EditarGenero