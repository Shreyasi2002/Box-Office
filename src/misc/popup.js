/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Popup.css';

const Popup = ({ content, handleClose }) => (
    <div className="popup-box">
        <div className="box">{content}</div>
        <span className="close-icon" onClick={handleClose}>
            x
        </span>
    </div>
);

export default Popup;
