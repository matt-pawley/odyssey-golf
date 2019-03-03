import React from 'react';
import './socialLink.css';

export default ({ icon: Icon, ...props }) => (
    <a target="_blank" className="social-link" {...props}>
        <Icon />
    </a>
);