import React from 'react';
import './styles.css';
import logo from '../Assets/Imagenes/logo.png';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {

            
      const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    
    return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items-center p-2 w-100'>
                
                    <img className='w-10' src={logo} alt='logo'/>
                    
                    {isTabletOrMobile && 
                    <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    }
                <div className='container d-flex flex-row justify-content-around collapse navbar-collapse'>
                {isBigScreen &&
                <form class="form-inline d-flex">
                    <input className='form-control mr-sm-2' type="search" placeholder="Search" aria-label="Search" />
                    <button className='btn btn-outline-secondary my-2 my-sm-0' type="submit">Search</button>
                </form>
                }
                
                </div>
                <div className='container d-flex justify-content-end'>
                {isBigScreen && 
                <button type="button" className='btn btn-light m-3'>Login</button>
                }
                {isBigScreen &&
                <button type="button" className='btn btn-outline-primary m-3'>Create account</button>
                }
                </div>
            </nav>
        
    )
}

export default Navbar;