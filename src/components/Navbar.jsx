import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import homeImage from '../assets/hero.png';
import emailjs from 'emailjs-com';
import AddForm from './AddForm';
import { Tooltip } from '@material-ui/core';

export default function Hero() {

  function getValue() {
    var retVal = prompt("Enter your name : ", "your name here");
    document.write("You have entered : " + retVal);
 }

  const form = useRef();

  const exploreDest = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rn86iqs', 'template_dwo37rs', form.current, 'BSXJF-kNz4yuSrMGQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    window.alert("Dates Submitted Successfully!");
    e.target.reset();
  }
  
    return (
    <>
        <Section id="hero">
          <div className="background">
           <img src={homeImage} alt="" />   
          </div>  
          <div className="content">
              <div className="title">
                <h1>TRAVEL TO EXPLORE</h1>
                <p>
                  Let's Embark a New Journey to Start Upon! 
                </p>  
              </div>
              <form ref={form} onSubmit={exploreDest}>
              <div className="search">
                  <div className="container">
                      <label htmlFor="">Where You Want To Go?</label>
                      <input type="text" placeholder="Search Your Location" name="place" required/>
                  </div>
                  <div className="container">
                      <label htmlFor="">Check-In</label>
                      <input type="date" name="from date" required/>
                  </div>
                  <div className="container">
                      <label htmlFor="">Check-Out</label>
                      <input type="date" name="to date" required/>
                  </div>
                  <div className="container">
                      <input type="email" placeholder="Enter your email id here " name="email-id" onclick={getValue} required/>
                  </div>
                   
                  <Tooltip title={<h4>Check Date Availability & then Register for Booking</h4>} arrow>
                   <button type="submit">Explore Now!</button>
                  </Tooltip>
                    

              </div>
              <AddForm />
              </form>
          </div>
          
        </Section>    
    </>
    );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 0.3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        margin-left: 25px;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem; 
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;




