import React, {useState} from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import './AddForm.css';

export default function AddForm({openPopup, setOpenPopup}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("Submitted Successfully!");
        e.target.reset();
    };


    return (
        <Dialog open={openPopup} className="popup">
            <DialogTitle>
                <h1 className="title">Submit Data for Enquiry</h1>
                <i><span style={{color: 'red'}}>Note</span>: We will get back to you thr phone & email.</i>
            </DialogTitle>
            <DialogContent className="content">
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="left">
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
                        </div>
                        <div className="right">
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
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                    <button type="cancel"
                      onClick={() => setOpenPopup(false)}
                    >Cancel</button>
                </form>
            </DialogContent>
        </Dialog>
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
