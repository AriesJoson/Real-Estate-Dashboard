import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import logo from '../logos/Logo.png';
import { myFunction2 } from '../script/btn2';

function Navbar() {
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    useEffect(() => {
        myFunction2();
    }, []);

    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible);
    };

    return (
        <div className='navbar'>
            <div className='top'>
                <div className='logo'>
                    <img src={logo} width="35px" height="35px" alt="logo" />
                    <span className='logotext'>Luxurify</span>
                </div>
                <i className='bx bx-menu' id="btn2" onClick={togglePanel}></i>
            </div>
            {isPanelVisible && (
                <div className='side-panel'>
                    <div className='nav-close'>
                        <i className="bx bx-x close-btn" onClick={togglePanel}></i>
                    </div>
                    <ul className='nav-menu'>
                        <li className='listed'>
                            <span className='nav-item'>Dashboard</span>
                        </li>
                        <li className='listed'>
                            <span className='nav-item'>Analytics</span>
                        </li>
                        <li className='listed'>
                            <span className='nav-item'>Contacts</span>
                        </li>
                        <li className='listed'>
                            <span className='nav-item'>Reports</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
