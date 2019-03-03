import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './input.css';

export default ({ renderIcon, ...props }) => (
    <div className="input">
        <input {...props} />
        
        <div className="icon mod-ok"><FaCheck /></div>
        <div className="icon mod-error"><FaTimes /></div>
        <div className="icon mod-default">{renderIcon()}</div>
    </div>
);