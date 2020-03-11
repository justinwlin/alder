import React from 'react'
import AlderLogo from '../../assets/AlderLogo.png';
import './Header.css'
const header = () => {
    return (
        <div>
            <div className="Logo">
                <img src={AlderLogo} alt="Alder Logo" />
            </div>

            <nav className="main-nav">
                <ul className="main-nav-items">
                    <li className="main-nav-item">
                        <a>TEST 1</a>
                    </li>
                    <li className="main-nav-item">
                        <a>TEST 2</a>
                    </li>
                    <li className="main-nav-item">
                        <a>TEST 3</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default header;