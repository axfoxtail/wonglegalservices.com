import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './layouts.scss';

export default function HeaderTop() {

    return (
        <div className="top-nav text-left">
            <div className="container">
                <div className="contact-email text-white font-weight-light">
                    <MailOutlineIcon /><span className="ml-2 font-italic">enquiries@wonglegalservices.com</span>
                </div>
            </div>
        </div>
    )
}