import React, {useEffect} from 'react'
import '../css/sidebar.css'
import logo from '../logos/Logo.png'
import { myFunction } from '../script/btn'

function Sidebar() {
    useEffect(() => {
        myFunction();
    }, []);
  return (
    <div className='sidebar'>
        <div className='top'>
            <div className='logo'>
                <img src={logo} width="35px" height="35px" alt="logo"/>
                <span className='logotext'>Luxurify</span>
            </div>
            <i className='bx bx-menu' id="btn"></i>
        </div>
        <ul className='unlisted'>
            <li className='listed'>
                <a className='nav-links' href="#">
                    <i className='bx bxs-dashboard'></i>
                    <span className='nav-item'>Dashboard</span>
                </a>             
            </li>
            <li className='listed'>
                <a className='nav-links' href="#">
                    <i className='bx bx-trending-up'></i>
                    <span className='nav-item'>Analytics</span>
                </a>
            </li>
            <li className='listed'>
                <a className='nav-links' href="#">
                    <i className='bx bxs-user-circle'></i>
                    <span className='nav-item'>Contacts</span>
                </a>
            </li>
            <li className='listed'>
                <a className='nav-links' href="#">
                    <i className='bx bxs-report'></i>
                    <span className='nav-item'>Reports</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar