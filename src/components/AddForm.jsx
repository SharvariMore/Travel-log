import React, {useState} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function AddForm() {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("Submitted Successfully!");
        e.target.reset();
    };


    return (
        <>
        <Section id="addform">
            { showForm ?  (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text" placeholder="Enter First Name" required></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" placeholder="Enter Last Name" required></input>
                </div>
                <div>
                    <label>Contact No: </label>
                    <input type="number" placeholder="Enter contact no" required></input>
                </div>
                <div>
                    <label>Email-id: </label>
                    <input type="email" placeholder="Enter email id" required></input>
                </div>
                <div>
                    <label>Country: </label>
                    <input type="text" placeholder="Enter your country" required></input>
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" placeholder="Enter your city" required></input>
                </div>
                <div>
                    <label>Select Cars: </label>
                    <select>
                        <option>Swift Dzire</option>
                        <option>Ertiga</option>
                        <option>Innova</option>
                    </select>
                </div>
                <div>
                    <label>Select Car Type: </label>
                    <select>
                        <option>AC</option>
                        <option>NON-AC</option>
                    </select>
                </div>
                <button type="submit">SUBMIT</button>
            </form> 
    ) : (
        <button onClick={() => setShowForm(true)}>CONNECT</button>
    )}
        </Section>
        </>
    );
}

const Section = styled.section`
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
`;

{/*<Link to="www.google.com" target="_blank"></Link>*/}
