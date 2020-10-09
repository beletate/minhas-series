import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {

    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = evt => {
        setName(evt.target.value) //O evento vai pegar o valor do alvo e a alocar no Name
    }

    const save = () => {
        axios.post('/api/series', {
            name //Pode ser name:name, mas quando são iguais é aconselhavel assim
        })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return (
            <Redirect to='/series/'>
            </Redirect>
        )
    }

    return (
        <div className='container'>
            <h1>Nova Série</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da Série' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>

            </form>
        </div>
    )
}

export default NovaSerie