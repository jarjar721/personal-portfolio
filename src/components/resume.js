import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section className="site-section bg-light " id="section-resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  My <strong>Resume</strong>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mb-5">Education</h2>
              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar" /> September 2015 - Present
                </span>
                <h3>Bachelor's in Computer Engineering</h3>
                <p>
                  Currently in my last year of college and I'm anxiously waiting
                  to be the Class of 2021.
                </p>
                <span className="school">
                  <a href="https://www.ucab.edu.ve">
                    Universidad Católica Andrés Bello
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar" /> July 2018 - October 2018
                </span>
                <h3>Information Security Intern</h3>
                <p>
                  Granted accesses to CAF's systems through TPAM and monitored
                  information flow using Symantec's DLP for Endpoint.
                </p>
                <span className="school">
                  <a href="https://www.caf.com">
                    CAF - Development Bank of Latin America
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
