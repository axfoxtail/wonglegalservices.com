import React from 'react';
import './about-us.scss';

export default function AboutUs() {
    return (
        <div className="app-about-us">
            <div className="bg-about">
                <div className="about-captions text-white">
                    <h1 className="about-title">About Us</h1>
                    <h4 className="about-description">Our Hong Kong corporate solicitors combine local knowledge with considerable international experience</h4>
                </div>
            </div>
            <div className="w-100">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-4">
                            <div className="img-wrapper">
                                <img src={require('../../assets/images/home-image-1.jpg')} className="home-img" alt="home-img" />
                            </div>
                            <h3 className="mt-4">Global Legal Practices</h3>
                            <p className="text-left">Wong Legal Services is an award winning Hong Kong-based law firm with clients both locally and throughout the Asia region. Established in 2012, our experienced partners have an extensive understanding of legal practice not only in Hong Kong and Asia but internationally. Our professional experts can advise and support you with your financial requirements. We provide prompt, personalised and highly confidential services to our clients. We work closely with our business partners, including international accounting and law firms.  Our experience and client range from individuals, micro entities to large multi-national conglomerates.</p>
                        </div>
                        <div className="col-4">
                            <div className="img-wrapper">
                                <img src={require('../../assets/images/home-image-2.jpg')} className="home-img" alt="home-img" />
                            </div>
                            <h3 className="mt-4">Structured and Efficient Team</h3>
                            <p className="text-left">Our structured team has a commercial and efficient approach to deal with documentation and Know Your Client (KYC) processes. The standard turnaround time for the process of KYC with some of our competitors is 4-8 weeks which is too long and can cause considerable delays in the deals. If KYC is not approved, this can be a waste of valuable time. Our experts have the capability to turn around KYC requests in a matter of days, providing a quick service which limits potential disruption to closing deals. We work with all parties to deliver document reviews promptly and in a streamlined manner.</p>
                        </div>
                        <div className="col-4">
                            <div className="img-wrapper">
                                <img src={require('../../assets/images/home-image-3.jpg')} className="home-img" alt="home-img" />
                            </div>
                            <h3 className="mt-4">Broad Client Range</h3>
                            <p className="text-left">Our current clients include:
                                <li>European-based asset management companies</li>
                                <li>Asian-based asset management companies</li>
                                <li>Peer-to-peer lenders</li>
                                <li>Authorised investment and debt instrument promotions</li>
                                <li>Money dealers</li>
                                <li>Property and asset management companies</li>
                                <li>Loan and finance syndication’s</li>
                                <li>Companies within the alternative investment markets</li>
                                <li>Private Individuals</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 py-5" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container">
                    <h4 className="py-4">The firm’s philosophy of reducing bureaucracy is also reflected in the efficiency with which we can respond to clients’ requirements and to be as cost effective as possible.</h4>
                    <div className="row py-4">
                        <div className="col-3">
                            <h1>263</h1>
                            <h3>Dedicated Lawyers</h3>
                            <p>We consider one of our major strengths to be our flexible management structure. This gives each partner a high degree of autonomy when working with clients. It allows us to keep closely in touch with our clients and to identify specific needs.</p>
                        </div>
                        <div className="col-3">
                            <h1>3700</h1>
                            <h3>Satisfied Clients</h3>
                            <p>The firm is known for its commitment to clients, who range from private individuals, to SMEs and global PLCs. Our expert team of litigation solicitors and commercial dispute resolution lawyers provide a quality service, without compromise.</p>
                        </div>
                        <div className="col-3">
                            <h1>12750</h1>
                            <h3>Succesful Cases</h3>
                            <p>Our reputation is built upon our proficiency in litigation, our meticulous preparation and fearless commitment to our client’s cases. We are logistically resourced to deal with very large cases, but put the same care into all our work.</p>
                        </div>
                        <div className="col-3">
                            <h1>8</h1>
                            <h3>Years Of Experience</h3>
                            <p>The firm has a strong reputation across all of its practice areas and its excellence has been acknowledged by various awards bodies. We we can respond to clients’ requirements quickly whilst being as cost effective as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-about">

            </div>
            <div className="w-100 py-5" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container">
                    <h4>We provide objective, practical and commercially informed advice to help our clients realise their business objectives. A number of our lawyers are qualified to advise on both Hong Kong law and the law of other jurisdictions.</h4>
                    <button type="button" className="btn btn-lg btn-red mx-auto">Get consultation</button>
                </div>
            </div>
        </div>
    );
}