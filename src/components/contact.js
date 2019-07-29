import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="site-section bg-light" id="section-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  Want to <strong>hire</strong> me?
                </h2>
              </div>
            </div>

            <div className="col-md-7 mb-5 mb-md-0">
              <form id="contact-form" className="site-form" method="POST" action="/contact">
                <h3 className="mb-5">Get In Touch</h3>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control px-3 py-4"
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control px-3 py-4"
                  />
                </div>
                <div className="form-group">
                  <label>Your Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control px-3 py-4"
                  />
                </div>
                <div className="form-group mb-5">
                  <textarea
                    id="message"
                    className="form-control px-3 py-4"
                    cols="30"
                    rows="10"
                    placeholder="Write a Message"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary  px-4 py-3"
                    value="Send Message"
                  />
                </div>
                <div>
                  {window.location.hash === "#success" && (
                    <div id="success">
                      <p>Your message has been sent!</p>
                    </div>
                  )}
                  {window.location.hash === "#error" && (
                    <div id="error">
                      <p>An error occured while submitting the form</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="col-md-5 pl-md-5">
              <h3 className="mb-5">My Contact Details</h3>
              <ul className="site-contact-details">
                <li>
                  <span className="text-uppercase">Email</span>
                  jarp820@gmail.com
                </li>
                <li>
                  <span className="text-uppercase">Phone</span>
                  +58 424 188 7553
                </li>
                <li>
                  <span className="text-uppercase">Address</span>
                  1030 <br />
                  Caracas, Distrito Capital <br />
                  Venezuela
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
