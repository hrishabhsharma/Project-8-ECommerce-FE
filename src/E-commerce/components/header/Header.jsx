import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import Navbar from '../header/Navbar'
import { Button } from "@mui/material";
import styled from 'styled-components'
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const nav = useNavigate()
    const token = localStorage.getItem("userToken")
    const userName = localStorage.getItem("userName")
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleLoginLogout = () => {
        if (token) {
            localStorage.clear();
            return window.location.reload(true)
        }
        setIsPopupOpen(!isPopupOpen);
        if (isPopupOpen) {
            return document.body.style.overflow = 'unset';
        }
        return document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <MainHeader>
                <Link to="/"><div className="title">The <span>SIREN</span></div></Link>
                <div className='rightBar'>

                    <div className='searchBar'>
                        <input id='search' type='text' placeholder="Search for products brands and more" />
                        <label htmlFor='search'><SearchIcon /></label>
                    </div>

                    <div className="userMenu">
                        <Button
                            onClick={toggleLoginLogout}
                            variant="contained"
                            size="small" >
                            {token ? "logOut" : "login"}
                        </Button>
                        {userName &&
                            <button className="userName">
                                {userName.slice(0, 1).toUpperCase()}
                            </button>
                        }
                    </div>
                    <IconButton onClick={() => nav("/cart")}>
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
                {isPopupOpen && <Login onClose={toggleLoginLogout} />}
            </MainHeader>

            <Navbar />
        </>
    )
}

const MainHeader = styled.header`
    display: flex;
    justify-content: space-around;
    text-align: center;
    background-color: #fff;
    position: sticky;
    top: 0;
    padding: 0.5em 0;
    z-index: 10;

        .title{
            font-size: 2em;
            font-family: 'Abril Fatface', cursive;
        }

        .rightBar{
            display: flex;
            align-items: center;
            gap: 1em;
        }

        .searchBar{
            display: flex;
            height: 1.8em;
            background-color: white;
            border-radius: 10px;
            border: 1px groove gray;
            :focus-within{
                outline: 2px solid black;
                label{
                    visibility: hidden;
                }
            }

            input{
                border-radius: 10px;
                padding-left: 10px;
                width: 20em;
                border: none;
                :focus{
                    outline: none;
                }
            }

            label{
                color: gray;
                margin-right: 5px;
                svg{
                    vertical-align: middle;
                }
            }
        }
        .userMenu button {
            height: 2em;
        }
        .userName{
            margin-left: 10px;
            width: 2em;
            border-radius: 50%;
            border: 1px solid #000;
            background-color: #48abe0;
            box-shadow: 0 1px 2px darkslategray;
            cursor: pointer;
        }
    
    @media only screen and (max-width:539px){

        flex-direction: column;
        padding: 0;

        .rightBar{
            justify-content: space-around;
        }

        .searchBar{

             input{
                width: 10em;
                border: none;
        }
        .userMenu button{
            height: 1em;
            width: 1em;
        }
    }

`

export default Header