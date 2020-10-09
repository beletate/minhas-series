import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {

    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = evt => {
        setName(evt.target.value) //O evento vai pegar o valor do alvo e a alocar no Name
    }

    const save = () => {
        axios.post('/api/genres', {
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
            <h1>Novo Genêros</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>

            </form>
        </div>
    )
}

export default NovoGenero