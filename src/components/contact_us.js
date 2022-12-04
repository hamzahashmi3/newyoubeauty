
import React from 'react';
import { Link } from "react-router-dom";


function Contact() {

    return (
        <div className="contact">
            <div className="contact_info_container">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="contact_form">
                                <div className="contact_info_title">Contact Form</div>
                                <form action="#" className="comment_form">
                                    <div>
                                        <div className="form_title">Name</div>
                                        <input type="text" className="comment_input" required="required" />
                                    </div>
                                    <div>
                                        <div className="form_title">Email</div>
                                        <input type="text" className="comment_input" required="required" />
                                    </div>
                                    <div>
                                        <div className="form_title">Message</div>
                                        <textarea className="comment_input comment_textarea" required="required"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="comment_button trans_200">submit now</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact_info">
                                <div className="contact_info_title">Contact Info</div>
                                <div className="contact_info_text">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters.</p>
                                </div>
                                <div className="contact_info_location">
                                    <div className="contact_info_location_title">New York Office</div>
                                    <ul className="location_list">
                                        <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                                        <li>1-234-567-89011</li>
                                        <li>info.rative@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="contact_info_location">
                                    <div className="contact_info_location_title">Australia Office</div>
                                    <ul className="location_list">
                                        <li>Forrest Ray, 191-103 Integer Rd, Islamabad Pakistan</li>
                                        <li>1-234-567-89011</li>
                                        <li>info.deactivated@gmail.com</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <section class="contact_map mt-5">
                            <div class="map">
                                <div id="google_map" class="google_map">
                                    <div class="map_container">
                                        <div id="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939441.2674166937!2d70.99243042466898!3d31.62068309800843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1670171472289!5m2!1sen!2s" width="1150" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
