import React, { Component } from "react";

import JAR_logo from "../resources/images/JAR-logo.png";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class NavigationBar extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <a className="navbar-brand" href="/">
            <img src={JAR_logo} alt="" />
          </a>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section-home">
                  {i18n.t("Home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-about">
                  {i18n.t("About")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-tools">
                  {i18n.t("Tools")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-projects">
                  {i18n.t("Projects")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-resume">
                  {i18n.t("Resume")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#site-footer">
                  {i18n.t("Contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </I18nextProvider>
    );
  }
}
