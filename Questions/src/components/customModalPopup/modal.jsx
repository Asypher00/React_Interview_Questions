import React, { useState } from "react";
import "./styles.css" ; 
const Modal = ({ id, header, body, footer, setShowModal }) => {
    return (
        <div id={id || "Modal"} className="modal">
            <div className="content">
                <div className="header">
                    <span className="close-modal-icon" onClick={() => setShowModal(prev => !prev)}>&times;</span>
                    <h2>{header ? header : "Modal Header"}</h2>
                </div>
                <div className="body">
                    <p>{body ? body : "Modal Body"}</p>
                </div>
                <div className="footer">
                    <h2>{footer ? footer : "Modal Footer"}</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal; 