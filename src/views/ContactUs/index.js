import React from 'react';
import './contact-us.scss';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
};
export default function ContactUs() {
    return (
        <div className="app-contact-us">
            <div className="bg-contact">
                <div className="contact-captions text-white">
                    <h1 className="contact-title">Contact Us</h1>
                    <h4 className="contact-description text-white">Contact us today to discuss your requirements</h4>
                </div>
            </div>
            <div className="row m-0 py-5">
                <div className="col-4">
                    <h3>OFFICE</h3>
                    <p>WONG &amp; CO LEGAL SERVICES</p>
                    <p>9/F. GOOD HARVEST COMMERCIAL BUILDING</p>
                    <p>515-517 NATHAN ROAD.</p>
                    <p>YUA MA TEI</p>
                    <p>KOWLOON</p>
                    <p>HONG KONG</p>
                </div>
                <div className="col-4">
                    <h3>CONTACT</h3>
                    <p>TEL: +852 999 999 999</p>
                    <p>EMAIL: enquiries@testingcorp.fun</p>
                </div>
                <div className="col-4">
                    <h3>OPENING TIMES</h3>
                    <p>Monday to Friday: 9am to 5pm</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            <div className="row m-0 py-5" style={{backgroundColor: '#f5f5f5'}}>
                <h2 className="mx-auto">Contact Our Office</h2>
            </div>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={"AIzaSyCtixXJ0cvq3DHdmWs2dl8W4KAn27Uf_JU"}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
                </GoogleMapReact>
            </div>
            <div className="row m-0 py-5" style={{backgroundColor: '#f5f5f5'}}>
                <div className="text-center mx-auto">
                    <span>Highly efficient. Straight to the point. Top-notch lawyers. This is how our clients describe us</span>
                    <button type="button" className="btn btn-lg btn-red ml-5">Get consultation</button>
                </div>
            </div>
        </div>
    );
}