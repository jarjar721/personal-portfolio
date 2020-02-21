import React, { Component } from "react";

import Laptop1 from "../resources/images/sis-i-gif.gif";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class Projects extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <section className="site-section" id="section-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  {i18n.t("my")}<strong> {i18n.t("projects")}</strong>
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
              {i18n.t("SISI")}
              </h3>
              <p>
                {i18n.t("SISIDescription")}
              </p>

              <ul className="site-list">
                <li className="site-check">
                  {i18n.t("bullet1")}
                </li>
                <li className="site-check">
                  {i18n.t("bullet2")}
                </li>
                <li className="site-check">
                  {i18n.t("bullet3")}
                </li>
              </ul>

              <div className="text-center">
                <p>
                  <a href="https://sis-i.herokuapp.com" className="btn btn-primary px-4 py-2 btn-sm">
                    {i18n.t("demo")}
                  </a>
                  <a href="https://github.com/jarjar721/SIS-I" className="btn btn-secondary px-4 py-2 btn-sm">
                    {i18n.t("repo")}
                  </a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      </I18nextProvider>
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
