
import React from 'react'
import { Link } from "react-router-dom";


function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer_background" style={{backgroundImage:"url(images/footer_background.png)"}}></div>
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
                                                    <li>Email: Info.developersss000@gmail.com</li>
                                                    <li>Phone:  +(00) 111 222 333</li>
                                                    <li>40 Baria Sreet 133/2 New City Lahore, Pakistan</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 footer_col">

                                        {/* Footer links */}
                                        <div className="footer_section footer_links">
                                            <div className="footer_title">Contact Us</div>
                                            <div className="footer_links_container">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                    <li><Link to="#">Features</Link></li>
                                                    <li><Link to="/courses">Courses</Link></li>
                                                    <li><a href="#">Events</a></li>
                                                    <li><a href="#">Gallery</a></li>
                                                    <li><Link to="/">FAQs</Link></li>
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
        </>

    )
}

export default Footer;


{/* <div>
    <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <Link to="/">
                                <img src="images/logo.png" alt="" />
                            </Link>
                        </div>
                        <ul>
                            <li>Address: Main Bulevard Bahria Town, Lahore</li>
                            <li>Phone: +92301-7111141</li>
                            <li>Email: 
                                <Link  className="text-dark"> sheikhsalman@msn.com </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li>
                                <Link to="#">About Us</Link>
                            </li>
                            <li>
                                <Link to="#">About Our Shop</Link>
                            </li>
                            <li>
                                <Link to="#">Secure Shopping</Link>
                            </li>
                            <li>
                                <Link to="#">Delivery infomation</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Our Sitemap</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="#">Who We Are</Link>
                            </li>
                            <li>
                                <Link to="#">Our Services</Link>
                            </li>
                            <li>
                                <Link to="#">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="#">Innovation</Link>
                            </li>
                            <li>
                                <Link to="#">Testimonials</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail" />
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <Link to="#">
                                <i className="fa fa-facebook-official"></i>
                            </Link>
                            <Link to="#">
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link to="#">
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link to="#">
                                <i className="fa fa-pinterest"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text">
                            <p>
                                Copyright &copy; All rights reserved | This template is made with 
                                <i className="fa fa-heart" aria-hidden="true"></i> by 
                                <Link to="" target="_blank"> TechnoCannons</Link>
                            </p>
                        </div>
                        <div className="footer__copyright__payment">
                            <img src="images/payment-item.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div> */}