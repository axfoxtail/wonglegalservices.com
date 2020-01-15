import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <div className="row footer-top m-0 p-5">
                <div className="container">
                    <img src={require('../../assets/images/logo.png')} className="footer-logo" alt="footer-logo" />
                </div>
            </div>
            <div className="row footer-bottom m-0 p-4">
                <div className="container">
                    <p className="text-white my-3">© Copyright 2018, Wong & Co Legal Services. 9th Floor, Good Harvest Commercial Building, 515-517 Nathan Road, Yua Ma Tei, Kowloon, Hong Kong.</p>
                </div>
            </div>
        </div>
    );
}