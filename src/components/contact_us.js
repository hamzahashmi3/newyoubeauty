
import React, { Component } from 'react';
import { Link } from "react-router-dom";


function Contact() {

    return (
        <div class="contact pt-5">

            <div class="contact_info_container">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 mb-5">
                            <div class="contact_form">
                                <div class="contact_info_title">Contact Form</div>
                                <form action="#" class="comment_form">
                                    <div>
                                        <div class="form_title">Name</div>
                                        <input type="text" class="comment_input" required="required" />
                                    </div>
                                    <div>
                                        <div class="form_title">Email</div>
                                        <input type="text" class="comment_input" required="required" />
                                    </div>
                                    <div>
                                        <div class="form_title">Message</div>
                                        <textarea class="comment_input comment_textarea" required="required"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" class="comment_button trans_200">submit now</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="contact_info">
                                <div class="contact_info_title">Contact Info</div>
                                <div class="contact_info_text">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters.</p>
                                </div>
                                <div class="contact_info_location">
                                    <div class="contact_info_location_title">New York Office</div>
                                    <ul class="location_list">
                                        <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                                        <li>1-234-567-89011</li>
                                        <li>info.newyou@beauty.com</li>
                                    </ul>
                                </div>
                                <div class="contact_info_location">
                                    <div class="contact_info_location_title">Australia Office</div>
                                    <ul class="location_list">
                                        <li>Forrest Ray, 191-103 Integer Rd, Corona Australia</li>
                                        <li>1-234-567-89011</li>
                                        <li>info.newyoubeauty@newyou.com</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03617227566!2d-74.30934355787166!3d40.697539945659265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1670853964573!5m2!1sen!2s" height="450" style={{ border: "0", width: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
}

export default Contact;
