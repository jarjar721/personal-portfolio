import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <section
        className="site-hero"
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-12 text-center">
              <h1 className="site-heading site-animate">
                Hello, I'm <strong>José Andrés Rodríguez</strong>
              </h1>
              <p className="lead site-subheading mb-4 site-animate">
                <b>Full Stack Web Developer in Caracas, Venezuela</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
