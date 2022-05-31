import React, {useState} from 'react';
import styled from "styled-components";
import Viklogo from "../assets/Viklogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import AddForm from './AddForm';
import Connect from './Connect';
import { Tooltip } from '@material-ui/core';

export default function Navbar () {
  const [navbarState, setNavbarState] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popUp, setPopUp] = useState(false);
    return (
        <>
            <Nav>
             <div className="brand">
                    <div className="container">
                        <img src={Viklogo} alt="" width="30" height="30"/>
                        <h1>Vikram Travels</h1>
                    </div>
                        <div className="toggle">
                          {navbarState ? (
                            <VscChromeClose onClick={() => setNavbarState(false)} />
                          ): (
                            <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                          )}
                        </div>
                </div>  

                <ul>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#recommend">Places</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                      <Tooltip title={<h4>Register after Date Confirmation</h4>} class="tooltip" arrow>
                        <a onClick={()=>setOpenPopup(true)}><b>Register</b></a>
                        </Tooltip>
                    </li>
                    <li>
                        <a onClick={()=>setPopUp(true)}><b>Connect</b></a>
                    </li>
                </ul>

                <AddForm
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                />

                <Connect
                popUp={popUp}
                setPopUp={setPopUp}
                />
            </Nav>

            <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a onClick={()=>setOpenPopup(true)}><b>Register</b></a>
          </li>
          <li>
            <a onClick={()=>setPopUp(true)}><b>Connect</b></a>
          </li>
        </ul>
      </ResponsiveNav>
    
        </>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 2.0rem;
      font-weight: 900;
      text-transform: uppercase;
      img{
        border-radius: 8px; 
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        cursor: pointer;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
        #register {
          border: bold;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 44vh;
  width: 100%;
  margin-top: 5rem;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;

