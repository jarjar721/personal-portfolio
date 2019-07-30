import React, { Component } from "react";

import Laptop1 from "../resources/images/sis-i-gif.gif";

export default class Projects extends Component {
  render() {
    return (
      <section className="site-section" id="section-projects">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  My <strong>Projects</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="row site-section">
            <div className="col-md-8">
              <p>
                <img src={Laptop1} alt="" className="img-fluid" />
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="mb-3">
                Sistema Administrativo de Investigaciones (SIS-I)
              </h3>
              <p>
                An administrative tool to draft theses, research papers and
                investigations following the research methodology proposed by
                Jaqueline Hurtado Barrera.
              </p>

              <ul className="site-list">
                <li className="site-check">
                  Built using Laravel Framework with PostgreSQL
                </li>
                <li className="site-check">
                  Integrated Access Control and Priviledge Management
                </li>
                <li className="site-check">
                  Scalable ER Diagram for larger investigations
                </li>
              </ul>

              <div className="text-center">
                <p>
                  <a
                    href="https://sis-i.herokuapp.com"
                    className="btn btn-primary px-4 py-2 btn-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/jarjar721/SIS-I"
                    className="btn btn-secondary px-4 py-2 btn-sm"
                  >
                    GitHub Repository
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/*

ADD ANOTHER PROJECT --> RIGHT VIEW

          <div className="row">
            <div className="col-md-8 order-md-2">
              <p><img src={Laptop1} alt="" className="img-fluid"></img></p>
            </div>
            <div className="col-md-4 order-md-1">
              <h3 className="mb-3">All in One Place</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    
              <ul className="site-list">
                <li className="site-check">Pointing has no control</li>
                <li className="site-check">A small river named Duden flows</li>
                <li className="site-check">Roasted parts of sentences fly into your mouth</li>
              </ul>
    
              <div className="text-center">
                <p>
                  <a href="#fake-link" className="btn btn-primary px-4 py-2 btn-sm">Live Demo</a>
                </p>
              </div>
            </div>
          </div>

*/
