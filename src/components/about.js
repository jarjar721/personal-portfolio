import React, { Component } from "react";
import about_me from "../resources/images/about_me.jpg";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class About extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <section className="site-section" id="section-about">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
              <img src={about_me} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-5 pl-lg-5">
              <div className="section-heading">
                <h2>
                {i18n.t("about")}<strong> {i18n.t("me")}</strong>
                </h2>
              </div>
              <p className="lead">
                {i18n.t("aboutMeIntro")}
              </p>
              <p className="mb-5">
                {i18n.t("aboutMeDescription")}
              </p>

              <p>             
                <ul className="site-contact-details">
                  <li>
                    <span className="text-uppercase">{i18n.t("aboutMeEmail")}</span>
                    jarp820@gmail.com
                  </li>
                  <li>
                    <span className="text-uppercase">{i18n.t("aboutMePhone")}</span>
                    +58 424 188 7553
                  </li>
                </ul>
              </p>

            </div>
          </div>
        </div>
      </section>
      </I18nextProvider>
    );
  }
}

/*

HIRE ME BUTTON

                <a href="#site-footer" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>

*/
