import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import "./header.css"

const Header = () => {
    const nav = useNavigate()
    const token = localStorage.getItem("userToken")
    const userName = localStorage.getItem("userName")
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    const [isFashion, setIsFashion] = useState(false)
    const [isElectronics, setIsElectronics] = useState(false)
    const [isAppliances, setIsAppliances] = useState(false)
    const [isDropMenu, setIsDropMenu] = useState(false)

    const mobileDropDown = (e) => {
        e.preventDefault();
        setIsMobile(!isMobile)
    }
    const fashionDropDown = (e) => {
        e.preventDefault();
        setIsFashion(!isFashion)
    }
    const electronicsDropDown = (e) => {
        e.preventDefault();
        setIsElectronics(!isElectronics)
    }
    const appliancesDropDown = (e) => {
        e.preventDefault();
        setIsAppliances(!isAppliances)
    }

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        if (isPopupOpen) {
            return document.body.style.overflow = 'unset';
        }
        return document.body.style.overflow = 'hidden';
    };

    const toggleDropMenu = () => {
        setIsDropMenu(!isDropMenu);
    };

    const logout = () => {
        localStorage.clear();
        window.location.reload(true)
    }

    // const navigator = useNavigate()
    return (
        <>
            <header>
                <Link to="/"><h1>The Hrep</h1></Link>
                <div className='right'>
                    <div className='search_bar'>
                        <input id='search' type='text' placeholder="Search for products brands and more" />
                        <label htmlFor='search'><FontAwesomeIcon icon={faSearch} /></label>
                    </div>
                    {token
                        ? <button onClick={logout}>logOut</button>
                        : <div onClick={togglePopup}><FontAwesomeIcon icon={faUser} /> Login</div>
                    }
                    {
                        userName && <p>{userName.slice(0, 1).toUpperCase()}</p>
                    }
                    {isPopupOpen && <Login onClose={togglePopup} />}
                    <div onClick={() => nav("/cart")}><FontAwesomeIcon icon={faCartShopping} /></div>
                </div>
            </header>
            <div className='DropMenuIcon' onClick={toggleDropMenu}>
                {
                    isDropMenu ? <MenuIcon /> : <MenuOpenIcon />
                }
            </div>
            <nav className={isDropMenu ? "DropMenuHidden" : ""}>
                <NavLink to="/">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4f84f7cf33100b5d.png?q=100" alt='top offers' />
                    <span>Top Offers</span>
                </NavLink>
                <div onMouseEnter={mobileDropDown} onMouseLeave={mobileDropDown}>
                    <NavLink to="/mobiles">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt='Fuck' />
                        <span>Mobiles</span>
                    </NavLink>
                    {
                        <div onClick={toggleDropMenu} className={isMobile ? "dropDown" : "dropDown isDropDownHidden"} >
                            <Link to='/mobiles' state={{ brand: "apple" }}>Iphone</Link>
                            <Link to='/mobiles' state={{ brand: "samsung" }}>Samsung</Link>
                            <Link to='/mobiles' state={{ brand: "vivo" }}>Vivo</Link>
                            <Link to='/mobiles' state={{ brand: "redmi" }}>Redmi</Link>
                        </div>
                    }
                </div>
                <div onMouseEnter={fashionDropDown} onMouseLeave={fashionDropDown}>
                    <NavLink to="/fashion">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt='not found' />
                        <span>Fashion</span>
                    </NavLink>
                    {
                        <div onClick={toggleDropMenu} className={isFashion ? "dropDown" : "dropDown isDropDownHidden"} >
                            <Link to='/fashion' state={{ brand: "men" }}>Men</Link>
                            <Link to='/fashion' state={{ brand: "women" }}>Women</Link>
                            <Link to='/fashion' state={{ brand: "kids" }}>Kids</Link>
                        </div>
                    }
                </div>
                <div onMouseEnter={electronicsDropDown} onMouseLeave={electronicsDropDown}>
                    <NavLink to="/electronics">
                        <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt='not found' />
                        <span>Electronics</span>
                    </NavLink>
                    {
                        <div onClick={toggleDropMenu} className={isElectronics ? "dropDown" : "dropDown isDropDownHidden"} >
                            <Link to='/electronics' state={{ brand: "laptop" }}>Laptop</Link>
                            <Link to='/electronics' state={{ brand: "tablet" }}>Tablet</Link>
                            <Link to='/electronics' state={{ brand: "headphone" }}>Headphone</Link>
                        </div>
                    }
                </div>
                <div onMouseEnter={appliancesDropDown} onMouseLeave={appliancesDropDown}>
                    <NavLink to="/appliances">
                        <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt='not found' />
                        <span>Appliances</span>
                    </NavLink>
                    {
                        <div onClick={toggleDropMenu} className={isAppliances ? "dropDown" : "dropDown isDropDownHidden"} >
                            <Link to='/appliances' state={{ brand: "television" }}>Television</Link>
                            <Link to='/appliances' state={{ brand: "washingMachine" }}>Washing Machine</Link>
                            <Link to='/appliances' state={{ brand: "refrigerator" }}>Refrigerator</Link>
                            <Link to='/appliances' state={{ brand: "airConditioner" }}>Air Conditioner</Link>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}

export default Header