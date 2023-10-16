import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Login from '../login/Login'

const Header = () => {
    const nav = useNavigate()
    const token = localStorage.getItem("userToken")
    const userName = localStorage.getItem("userName")
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
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
                        ? <p>User <button onClick={logout}>logOut</button></p>
                        : <div onClick={openPopup}><FontAwesomeIcon icon={faUser} /> Login</div>
                    }{
                        userName && <p>{userName}</p>
                    }
                    {isPopupOpen && <Login onClose={closePopup} />}
                    <div onClick={()=>nav("/cart")}><FontAwesomeIcon icon={faCartShopping} /></div>
                </div>
            </header>
            <nav>
                <NavLink to="/">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4f84f7cf33100b5d.png?q=100" alt='top offers' />
                    <span>Top Offers</span>
                </NavLink>
                <NavLink to="/mobiles">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt='Fuck' />
                    <span>Mobiles</span>
                </NavLink>
                <NavLink to="/fashion">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt='Fuck' />
                    <span>Fashion</span>
                </NavLink>
                <NavLink to="/electronics">
                    <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt='Fuck' />
                    <span>Electronics</span>
                </NavLink>
                <NavLink to="/appliances">
                    <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt='Fuck' />
                    <span>Appliances</span>
                </NavLink>
            </nav>
        </>
    )
}

export default Header