
import React, { Component } from 'react'
import { Link } from "react-router-dom";


const Footer = () => {

    return (

        <div>

            <footer className="footer">
                <div className="footer_background" style={{ background: "url(images/counter_background.jpg)" }}></div>
                <div className="container">
                    <div className="row footer_row">
                        <div className="col">
                            <div className="footer_content">
                                <div className="row">

                                    <div className="col-lg-3 footer_col">

                                        <div className="footer_section footer_about">
                                            <div className="footer_logo_container">
                                                <Link to="/">
                                                    <div className="footer_logo_text">New<span>You</span></div>
                                                </Link>
                                            </div>
                                            <div className="footer_about_text">
                                                <p>Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</p>
                                            </div>
                                            <div className="footer_social">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 footer_col">

                                        <div className="footer_section footer_contact">
                                            <div className="footer_title">Contact Us</div>
                                            <div className="footer_contact_info">
                                                <ul>
                                                    <li>Email: Info.newyoubeauty@gmail.com</li>
                                                    <li>Phone:  +(00) 111 222 333</li>
                                                    <li>40 Baria Sreet 133/2 New City Lahore, Pakistan</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 footer_col">

                                        {/* Footer links */}
                                        <div className="footer_section footer_links">
                                            <div className="footer_title">Links</div>
                                            <div className="footer_links_container">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                    <li><Link to="#">Features</Link></li>
                                                    <li><Link to="/courses">Courses</Link></li>
                                                    <li><a href="#">Events</a></li>
                                                    <li><a href="#">Gallery</a></li>
                                                    <li><Link to="/faq">FAQs</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 footer_col clearfix">

                                        <div className="footer_section footer_mobile">
                                            <div className="footer_title">Mobile</div>
                                            <div className="footer_mobile_content">
                                                <div className="footer_image"><a href="#"><img src="images/mobile_1.png" alt="" /></a></div>
                                                <div className="footer_image"><a href="#"><img src="images/mobile_2.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row copyright_row">
                        <div className="col">
                            <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                <div className="cr_text">Copy Right &copy; 2022. All rights reserved.</div>
                                <div className="ml-lg-auto cr_links">
                                    <ul className="cr_list">
                                        <li><a href="#">Copyright notification</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer;
