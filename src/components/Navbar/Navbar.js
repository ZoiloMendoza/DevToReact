import React, { useState } from 'react';
import './styles.css';
import logo from '../Assets/Imagenes/logo.png';
import lupita from '../Assets/iconos/lupita.svg';
import { useMediaQuery } from 'react-responsive';
import AsideLeft from '../AsideLeft/AsideLeft';
//import Desp from './Desp';


const Navbar = () => {
    
      const [ menuOpen, setMenuOpen ] = useState(false)

      const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 780px)' })

      const openMenu = () => {
        setMenuOpen(!menuOpen)
        console.log('Boton clickeado')
      }

      
    
    return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items-center p-2 w-100'>
                
                    <img className='w-10' src={logo} alt='logo'/>
                    
                    {isTabletOrMobile && 
                    <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={openMenu}>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    }
                    {menuOpen &&
                    <div className='dropdown' style={{display:'flex',  backgroundColor:'white', marginTop:'50px', position: 'absolute'}}>
                        
                        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={openMenu}>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div>
                        <AsideLeft />
                        </div>
                    </div>
                    }

                <div className='container d-flex flex-row justify-content-around'>
                {isBigScreen &&
                <form class="form-inline d-flex">
                    <input className='form-control mr-sm-2' type="search" placeholder="Search" aria-label="Search" />
                    <button className='btn btn-outline-secondary my-2 my-sm-0' type="submit"><img src={lupita} alt='lupita' style={{maxWidth: '20px'}}/></button>
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