import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand, //Local onde é possível inserir uma logo
    Collapse, //Reduz o menu a sanduiche automatiamente
    Nav,
    NavItem, //Uma opção de item no navbar
    NavLink,
    NavbarToggler //Insere um item de sanduiche para abrir o menu
} from 'reactstrap'
import { Link } from 'react-router-dom' //Esse importo é utilizado para realizar o link de um botão ou item transformando em SPA.

const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <Navbar color='light' light expand='md'>
        <div className='container'>
            <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className='ml-auto' navbar>
                <NavItem>
                        <NavLink tag={Link} to='/series'>Séries</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/generos'>Genêros</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </div>
        </Navbar>
    )
}

export default Header