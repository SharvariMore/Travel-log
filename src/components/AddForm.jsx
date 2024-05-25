import React, {useState, useRef} from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import './AddForm.css';
import emailjs from "emailjs-com";

export default function AddForm({openPopup, setOpenPopup}) {
    const form = useRef();
    const [countryCode, setCountryCode] = useState("");
    const [contact, setContact] = useState("");
    const [days, setDays] = useState("");
    const [person, setPerson] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rn86iqs', 'template_d4dcijs', form.current, 'BSXJF-kNz4yuSrMGQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        window.alert("Details Submitted Successfully!");
        e.target.reset();
    }

    const handleContactInput = (e) => {
        let valc = e.target.value.replace(/\D/g, '');
        if (valc.length > 10) {
            valc = valc.slice(0, 10);
        }
        setContact(valc);
    };

    const handleCountryCodeChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 7) {
            value = value.slice(0, 7);
        }
        setCountryCode(value);
    };

    const handleDays = (e) => {
        let vald = e.target.value.replace(/\D/g, '');
        if (vald.length > 5) {
            vald = vald.slice(0, 5);
        }
        setDays(vald);
    };

    const handlePeople = (e) => {
        let valp = e.target.value.replace(/\D/g, '');
        if (valp.length > 10) {
            valp = valp.slice(0, 10);
        }
        setPerson(valp);
    };



    return (
        <Dialog open={openPopup} className="popup">
            <DialogTitle>
                <h1 className="title">Submit Data for Enquiry</h1>
                <i><span style={{color: 'red'}}>Note</span>: We will get back to you through phone & email.</i>
            </DialogTitle>
            
            <DialogContent className="content">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="container">
                        <div className="left">
                            <div>
                                <label>First Name: </label>
                                <input type="text" placeholder="Enter First Name" name="first name" required></input>
                            </div>
                            <div>
                                <label>Last Name: </label>
                                <input type="text" placeholder="Enter Last Name" name="last name" required></input>
                            </div>
                            <div>
                                <label>Contact No: </label>
                                <div style={{ display: 'flex' }}>
                                    <input 
                                        type="text" 
                                        placeholder="Code" 
                                        name="country code" 
                                        value={countryCode}
                                        style={{ width: '30%' }} 
                                        maxLength={8}
                                        onChange={handleCountryCodeChange} 
                                        required 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Enter contact no" 
                                        name="contact" 
                                        value={contact}
                                        onInput={handleContactInput} 
                                        maxLength={10}
                                        style={{ width: '70%' }} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Email-id: </label>
                                <input type="email" placeholder="Enter email id" name="email-id" required></input>
                            </div>
                            <div>
                                <label>Enter No. of Persons: </label>
                                <input type="text" value={person} placeholder="Enter no. of persons" maxLength={10} name="total persons" onChange={handlePeople} required></input>
                            </div>
                        </div>
                        <div className="right">
                            <div>
                                <label>Country: </label>
                                <input type="text" placeholder="Enter your country" name="country" required></input>
                            </div>
                            <div>
                                <label>City: </label>
                                <input type="text" placeholder="Enter your city" name="city" required></input>
                            </div>
                            <div>
                                <label>Enter No. of Days: </label>
                                <input type="text" value={days} placeholder="Enter no. of days" maxLength={5} name="total days" onChange={handleDays} required></input>
                            </div>
                            <div>
                                <label>Select Car: </label>
                                <select name="car name">
                                    <option>Select Car </option>
                                    <option>Swift Dzire</option>
                                    <option>Ertiga</option>
                                    <option>Innova</option>
                                    <option>Tavera</option>
                                    <option>Xcent</option>
                                    <option>Etios</option>
                                </select>
                            </div>
                            <div>
                                <label>Select Car Type: </label>
                                <select name="car type">
                                    <option>Select Type </option>
                                    <option>AC</option>
                                    <option>NON-AC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                    <button type="cancel" onClick={() => setOpenPopup(false)}>Cancel</button>
                
                </form>
            </DialogContent>
            
        </Dialog>
    );
}
