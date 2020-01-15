import React from 'react';
import HeroImageSlider from '../../components/HeroImageSlider';
import './home.scss';
import HomeReviewCarousel from '../../components/HomeReviewCarousel';
import CustomIcon from '../../components/CustomIcon';

export default function Home() {
    return (
        <div className="app-home">
            <HeroImageSlider />
            <div className="container">
                <div className="row py-5">
                    <div className="col-3">
                        <h1>263</h1>
                        <h3>Dedicated Lawyers</h3>
                        <p>Our partners and management team pride themselves on being accessible to the firm’s clients and the fact that they have a “hands on” approach to legal work and to the supervision of our team of Lawyers working on our client’s cases.</p>
                    </div>
                    <div className="col-3">
                        <h1>3700</h1>
                        <h3>Satisfied Clients</h3>
                        <p>The firm is known for its commitment to clients, who range from private individuals, to SMEs and global PLCs. Our expert team of litigation solicitors and commercial dispute resolution lawyers provide a quality service, without compromise.</p>
                    </div>
                    <div className="col-3">
                        <h1>2750</h1>
                        <h3>Succesful Cases</h3>
                        <p>Our reputation is built upon our proficiency in litigation, our meticulous preparation and fearless commitment to our client’s cases. We are logistically resourced to deal with very large cases, but put the same care into all our work.</p>
                    </div>
                    <div className="col-3">
                        <h1>8</h1>
                        <h3>Years Of Experience</h3>
                        <p>The firm is renowned for its service to clients in Hong Kong and internationally. We will always offer a complimentary, no obligation, initial consultation, to explore how we can work together with you. Please feel free to contact us on</p>
                    </div>
                </div>
            </div>
            <div className="w-100" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container">
                    <div className="row py-5">
                        <h4 className="p-5">Wong & Co Legal Services, a legal institution with more than 250 lawyers on five continents, is based on a set of core principles, the most critical of which is a relentless focus on client service that transcends individual interests. We are One Firm Worldwide.</h4>
                        <div className="col-4">
                            <div className="img-wrapper">
                                <img src={require('../../assets/images/home-image-1.jpg')} className="home-img" alt="home-img" />
                            </div>
                            <h3 className="mt-4">About Wong & Co Legal Services</h3>
                            <p className="text-left">Wong & Co Legal Services is renowned for it’s expert legal advice. We develop longstanding relationships with clients and help generations of families develop and grow through good times and bad. Our website gives you the opportunity to take a look through some of the ways in which we can help. We provide prompt, personalised and highly confidential services to our clients. We work closely with our business partners, including international accounting and law firms.</p>
                        </div>
                        <div className="col-4">
                            <div className="img-wrapper">
                                <img src={require('../../assets/images/home-image-2.jpg')} className="home-img" alt="home-img" />
                            </div>
                            <h3 className="mt-4">Our Services</h3>
                            <p className="text-left">We regularly work with leading financial institutions, law firms, investment managers and other market participants on an extensive range of structures, asset classes and jurisdictions. We specialise with the support of complex corporate transactions which have an inherent requirement for an independent party to act as security trustee. We ensure the interests of all parties connected with the transaction are treated impartially and fairly.</p>
                        </div>
                        <div className="col-4">
                            <div className="img-wrapper">
                                <img src={require('../../assets/images/home-image-3.jpg')} className="home-img" alt="home-img" />
                            </div>
                            <h3 className="mt-4">Legal Expertise</h3>
                            <p className="text-left">We act as Security Trustee on a variety of transactions, both in the public sphere and on niche private deals involving alternative finance providers. Our company is well known internationally for our proactive approach, efficient completion of waivers and approvals, and full independence as a non bank trustee. We work with a wide range of partners worldwide who refer businesses to us who require reliable and compliant financial services.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-5 m-0" style={{backgroundImage: `url('${require('../../assets/images/home-image-4.jpg')}')`, backgroundSize: 'cover'}}>
                <div className="container">
                    <div className="row">
                        <h1 className="text-white my-4">Whether You Reside In Hong Kong Or Do Business There, It’s Great To Have A Knowledgeable Legal Team On Your Side.</h1>
                    </div>
                    <div className="row">
                        <HomeReviewCarousel />
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-lg btn-red mx-auto my-5">Get consultation</button>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="storage" /> 
                            </div>
                            <h3>LITIGATION</h3>
                            <p>We are committed to resolving disputes as efficiently as possible and are focused on offering solutions that are practical and commercial. Our credibility is also acknowledged by regulators and prosecutors, which assists with the effective resolution of investigations and other negotiations.</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="file" /> 
                            </div>
                            <h3>ESCROW AGENT</h3>
                            <p>We can act as an escrow agent, holding assets on behalf of clients while transactions are being finalised in accordance with the terms and conditions of an escrow agreement. We have expertise in holding and distributing money and assets for two or more institutions or individuals, acting as an independent, trusted third party.</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="mail-search" /> 
                            </div>
                            <h3>NOMINEE SERVICE</h3>
                            <p>A nominee service allows individuals or corporate entities to safeguard their identity by having us act as the director, company secretary or shareholder. Depending on the engagement and your requirements we can use a UK-registered, EU-registered or offshore corporate entity or individual to act as a nominee.</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="file" /> 
                            </div>
                            <h3>SPV EXPERTS</h3>
                            <p>We are Special Purpose Vehicles (SPV) experts and can provide a comprehensive risk assessment service on your asset structure. We can look after all areas of your subsidiary company incorporation from providing a central London registered address, to preparation and submission of all tax returns.</p>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="lock" /> 
                            </div>
                            <h3>SECURITY TRUSTEE</h3>
                            <p>Our company specialises with the support of complex corporate transactions which have an inherent requirement for an independent party to act as security trustee. We ensure the interests of all parties connected with the transaction are treated impartially and in accordance with transaction documents.</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="search" /> 
                            </div>
                            <h3>ASSET RECOVERY</h3>
                            <p>Our debt recovery team understands the importance of balancing the impact of bad debts against the cost of recovery which is why or service is tailored to each individual client. We can act under a conditional fee agreement or an agreement whereby our fees are paid from the amount recovered.</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="cash" /> 
                            </div>
                            <h3>OFFSHORE BANKING</h3>
                            <p>Offshore accounts offer a number of benefits, including protecting your assets in more secure institutions, and diversifying your assets, among others. However, with these benefits comes increased measures and regulations by governments. Contact us for the first step in defending yourself.</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-wrapper">
                                <CustomIcon name="bank" /> 
                            </div>
                            <h3>FRAUD RECOVERY</h3>
                            <p>We provide comprehensive fraud management services, representing insurers, retailers, investors, financial institutions, and others affected by organised fraud. With a focus on fraud and recovery, we are valued for our multi-jurisdictional experience and deep sector knowledge.</p>
                        </div>
                    </div>
                </div>
                <div className="w-100 py-5 mb-4" style={{backgroundColor: '#f5f5f5'}}>
                    <div className="container">
                        <h4>Our lawyers work with investors to recover losses caused by securities fraud, investment fraud, and other kinds of misconduct.</h4>
                        <button type="button" className="btn btn-lg btn-red mx-auto">Get consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}