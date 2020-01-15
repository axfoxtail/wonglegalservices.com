import React from 'react';
import './services.scss';

export default function Services() {
    return (
        <div className="app-services">
            <div className="bg-services">
                <div className="services-captions text-white">
                    <h1 className="services-title">Our Services</h1>
                    <h4 className="services-description text-white">Contact us today to discuss your requirements</h4>
                </div>
            </div>
            <div className="row m-0 text-left">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="services-img-wrapper mr-5">
                                <img src={require('../../assets/images/home-image-1.jpg')} className="services-img" alt="img" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>SECURITY TRUSTEE</h3>
                            <p>Wong Legal Services is an independent provider of security trustee services with extensive experience in acting as a trustee on a variety of capital markets, banking and other commercial transactions. We regularly work with leading financial institutions, law firms, investment managers and other market participants on an extensive range of structures, asset classes and jurisdictions.</p>
                            <p>We specialise in the support of complex corporate transactions which have an inherent requirement for an independent party to act as security trustee. We ensure the interests of all parties connected with the transaction are treated impartially and in accordance with transactional documents.</p>
                            <p>We can assist you in a verity of scenarios, from straight-forward debenture to complex capital raising structures. We ensure that investors’ interests are represented, protected, and maintained by working with our counterparties across multiple jurisdictions.</p>
                            <p>Key services include:</p>
                            <ul>
                                <li>Holding security overcharged assets on behalf of secured parties</li>
                                <li>Acting as an impartial holder of security for the benefit of lenders</li>
                                <li>Reviewing amendments and other requests on behalf of lenders</li>
                                <li>Releasing from, or accepting additional assets into the security portfolio</li>
                                <li>Enforcing security in the event of default</li>
                            </ul>
                            <p>As the appointed independent party to act as security trustee, we can be trusted to work in the interests of all parties and can administer assets in compliance with the transaction documents. We are an experienced and impartial security trustee with the utmost integrity, capable of acting at speed, and whose independence is acceptable to all stakeholders.</p>
                            <p>Contact us today to discuss your requirements and how we can assist you as security trustee.</p>
                            <button type="button" className="btn btn-lg btn-red">Get consultation</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 text-left" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6">
                            <h3>ESCROW AGENT</h3>
                            <p>We can act as an escrow agent, holding assets on behalf of clients while transactions are being finalised in accordance with the terms and conditions of an escrow agreement. As specialist escrow agents, we have expertise in holding and distributing money and assets for two or more institutions or individuals, acting as an independent, trusted third party.</p>
                            <p>We understand that escrow arrangements are time sensitive and that many parties require bespoke conditions for the payment and release of escrow funds. Our services also extend to incorporating and managing Special Purpose Vehicles for the purpose of becoming a party to the escrow agreement where multiple payouts are required.</p>
                            <p>Key services include:</p>
                            <ul>
                                <li>Escrow services</li>
                                <li>Receiving agent for minibonds</li>
                                <li>Setting up minibonds</li>
                                <li>Third party banking solutions</li>
                                <li>Share Registrar services</li>
                            </ul>
                            <p>We have expertise in facilitating secure and efficient business transactions both straightforward and complicated escrow arrangements, with professionalism and confidentiality.</p>
                            <p>Contact us today a to discuss your receiving agent requirements.</p>
                            <button type="button" className="btn btn-lg btn-red">Get consultation</button>
                        </div>
                        <div className="col-6">
                            <div className="services-img-wrapper ml-5">
                                <img src={require('../../assets/images/home-image-2.jpg')} className="services-img" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 text-left">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="services-img-wrapper mr-5">
                                <img src={require('../../assets/images/home-image-3.jpg')} className="services-img" alt="img" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>NOMINEE SERVICE</h3>
                            <p>A nominee service allows individuals or corporate entities to safeguard their identity by having us act as the director, company secretary or shareholder. Depending on the engagement and your requirements we can use a UK-registered, EU-registered or offshore corporate entity or individual to act as a nominee.</p>
                            <p>Nominees act in name only and we will not be involved in the day-to-day management of the company. All responsibility for fulfilling company duties remain with the beneficial owner or controlling parties. Our only involvement will be a regular compliance review.</p>
                            <p>Unfortunately due to legal restrictions we do not involve ourselves in opening bank accounts nor do we present our identities for ID checks or signature mandates.</p>
                            <p>We will only act as nominee director if:</p>
                            <ul>
                                <li>We receive the proof of identity and address of all the beneficial owners and controlling parties</li>
                                <li>Reference letters from two of the following: a reputable bank, a practicing solicitor or advocate, a registered accountant or a registered financial / investment advisor</li>
                                <li>We know of and clearly understand the reasons for using a nominee director</li>
                                <li>We know of and clearly understand the business of the company</li>
                                <li>The registered office will be with us</li>
                                <li>We have no hindrance in completing our compliance review</li>
                                <li>The company cannot be dissolved or liquidated without our consent and consultation</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-red">Get consultation</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 text-left" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6">
                            <h3>LITIGATION & DISPUTE RESOLUTION</h3>
                            <p>A global economy, diverging legal systems and increased cooperation amongst regulators presents companies with a wide array of legal challenges. We are uniquely positioned to advise on these issues and represent multinational clients in cross-border litigation, international arbitration and investigations.</p>
                            <p>Our global network provides an exceptional platform for handling major cross-border disputes and in recent years we have helped our clients to achieve success in some of the most complex international disputes and investigations. We offer a seamless, integrated service across our network of partners for cross-border disputes and investigations, with expertise in individual jurisdictions but also an understanding of the interplay between different legal systems and regulations.</p>
                            <p>We have a partnership network of around 50 lawyers based in the UK, Continental Europe, the Middle East, Asia Pacific and the United States, who are experienced in the full spectrum of litigation, dispute resolution and regulatory issues that our clients face. Our highly qualified partners are focused on resolving high risk litigation, international arbitration and regulatory investigations.</p>
                            <p>We are committed to resolving disputes as efficiently as possible and are focused on offering solutions that are practical and commercial. Our peers know that we are always prepared to proceed, however, and recognise our record in delivering results for clients in major litigation and arbitration’s. Our credibility is also acknowledged by regulators and prosecutors, which assists with the effective resolution of investigations and other negotiations.</p>
                            <p><strong>Forensic Accounting team</strong></p>
                            <p>We are supported by an in-house team of specialist accountants and economists in London and New York who provide assistance and expertise on all financial aspects of litigation, arbitration and investigations. Assignments vary from ad hoc assistance on a specific financial issue to major investigations undertaken jointly with the legal teams.</p>
                            <p>Members of the team have worked alongside our legal teams, clients and independent experts on many of the firm’s most significant matters in recent years, advising on a range of financial, accounting and commercial issues across many different industries and jurisdictions.</p>
                            <button type="button" className="btn btn-lg btn-red">Get consultation</button>
                        </div>
                        <div className="col-6">
                            <div className="services-img-wrapper ml-5">
                                <img src={require('../../assets/images/home-image-1.jpg')} className="services-img" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 text-left">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="services-img-wrapper mr-5">
                                <img src={require('../../assets/images/home-image-2.jpg')} className="services-img" alt="img" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>OFFSHORE BANKING</h3>
                            <p>Offshore accounts offer a number of benefits, including protecting your assets in more secure institutions, and diversifying your assets, among others. However, with these benefits comes increased measures and regulations by governments.</p>
                            <p>Another advantage of an offshore corporate bank account: the confidentiality that comes along with it. Not only will you be able to keep the paws of the tax collector off your money, but offshore account confidentiality makes it more difficult for con artists and the like to notice and then target your money.</p>
                            <p>And yet another advantage with a corporate offshore bank account, you and your money are legally separate. So any personal liability (from a divorce settlement, to bankruptcy proceedings, to a frivolous lawsuit) will not affect the bank account of your IBC, which will be legally shielded. Your IBC will have built-in legal asset protection and any money in the corresponding corporate bank account will take advantage of this structure.</p>
                            <p>And lastly, transferring shares of your IBC to future inheritors is a great way to lessen inheritance tax responsibilities. Contact us for the first step in opening your account.</p>
                            <button type="button" className="btn btn-lg btn-red">Get consultation</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 text-left" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6">
                            <h3>ASSET RECOVERY</h3>
                            <p>Our debt recovery team understands the importance of balancing the impact of bad debts against the cost of recovery which is why or service is tailored to each individual client. We can act under a conditional fee agreement or an agreement whereby our fees are paid from the amount recovered.</p>
                            <p>Victims of fraud, corruption and financial crime will often find that their problems are multi-jurisdictional in scope and fluid in nature. Those that have reaped the monetary benefits of fraud, corruption, or theft will frequently go to great lengths to hide their spoils. Financial, corporate and tax structures allow wrongdoers to obscure ultimate beneficial ownership or to move their ill-gotten gains to a different jurisdiction in a matter of minutes. Combating well-resourced individuals and their facilitators to recover assets and recoup losses requires a high level of expertise that few can provide, a knowledge of multiple legal systems that few possess, and a toughness and commitment that few are willing to sustain.</p>
                            <p>Successful asset recovery also requires out-of-the-box thinking and resourcefulness.&nbsp; We have pioneered the concept of “value recovery” as opposed to the more restrictive notion of asset recovery limited to the freezing and recovery of tangible assets such as funds in a bank account, real estate, or an expensive vehicle or work of art.&nbsp; Our definition of asset recovery is much broader and seeks opportunities to make victims of fraud, corruption and financial fraud whole by looking not only at traditional assets, but also at the possibility of holding aiders and abettors, conspirators, and facilitators liable through third-party actions.</p>
                            <p>In other instances, the asset to be recovered may be a valuable claim (chose in action) or savings that flow from a contract that is declared to have been obtained by fraud or corruption and cancelled. &nbsp;In yet other contexts, asset recovery may involve the exercise of restitution rights in a criminal action, the re-opening of a matrimonial dissolution settlement or the enforcement of a judgment previously written off as a dead end.</p>
                            <p>Our asset recovery practitioners are recognised world-wide for their leadership in building the practice area and continue to gain recognition for making new, asset recovery-related law, where none exists.</p>
                            <button type="button" className="btn btn-lg btn-red">Get consultation</button>
                        </div>
                        <div className="col-6">
                            <div className="services-img-wrapper ml-5">
                                <img src={require('../../assets/images/home-image-3.jpg')} className="services-img" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="text-center mx-auto mt-5">
                            <span>Our approach is distinguished by our commitment to excellence and our ‘hands-on’ working style.</span>
                            <button type="button" className="btn btn-lg btn-red ml-5">Get consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}