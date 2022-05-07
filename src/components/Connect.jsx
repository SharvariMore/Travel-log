import React, {useState} from "react";
import styled from "styled-components";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import './Connect.css';

export default function Connect({popUp, setPopUp}) {

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <Dialog open={popUp} className="popup1">
            <DialogTitle>
                <h1 className="title">Connect with us: </h1>
            </DialogTitle>
            <DialogContent className="content">
                <form onSubmit={handleSubmit}>
                        <div className="grid">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h1>Vikram More</h1>
                                        <h2>Pune</h2>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Owner</p>
                                        <p>Phone: 9850508756</p>
                                        <p>Email: more69vikram@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h1>Shubhangi More</h1>
                                        <h2>Pune</h2>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Co-Owner</p>
                                        <p>Phone: 9881060505</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <button type="cancel" className="cancel1" onClick={() => setPopUp(false)}>Cancel</button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

