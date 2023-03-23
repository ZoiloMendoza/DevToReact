import React from 'react';
//import './styles.css';

const Navbar = () => {
    return (
        <div>
            <nav className='d-flex'>
                <div className='container'>
                    <img src='' alt='logo'/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" className='form-control' placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;