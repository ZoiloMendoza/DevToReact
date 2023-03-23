import React from 'react';
//import './styles.css';
import logo from '../Assets/Imagenes/logo.png';

const Navbar = () => {
    return (
        
            <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items-center p-2 w-100'>
                
                    <img className='w-10' src={logo} alt='logo'/>

                    <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                <div className='container d-flex flex-row justify-content-around collapse navbar-collapse'>
                <div className='input-group mb-3'>
                    <input type="text" className='form-control' placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type="button">Search</button>
                    </div>
                </div>
                </div>
                <div className='container d-flex justify-content-end'>
                <button type="button" className='btn btn-light m-3'>Login</button>
                <button type="button" className='btn btn-outline-primary m-3'>Create account</button>
                </div>
            </nav>
        
    )
}

export default Navbar;