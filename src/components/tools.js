import React, { Component } from "react";

//import AngularIcon from "../resources/images/angular.svg";
import PowerBIIcon from "../resources/images/power-bi-icon.svg";
import ReactIcon from "../resources/images/reactjs-icon.svg";
import NodeIcon from "../resources/images/nodejs-icon.svg";
import LaravelIcon from "../resources/images/laravel-ar21.svg";
import PostgresIcon from "../resources/images/postgresql-icon.svg";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class Tools extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <section className="site-section border-top pb-0 bg-light" id="section-tools">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  {i18n.t("my")}<strong> {i18n.t("tools")}</strong>
                </h2>
              </div>
            </div>
          </div>

          <p className="intro">
            {i18n.t("myToolsIntro")}
          </p>

          <ul className="technologies list-inline">
            <li className="list-inline-item">
              <img src={PowerBIIcon} alt="" />
            </li>
            <li className="list-inline-item">
              <img src={ReactIcon} alt="" />
            </li>
            <li className="list-inline-item">
              <img src={NodeIcon} alt="" />
            </li>
            <li className="list-inline-item">
              <img src={LaravelIcon} alt="" />
            </li>
            <li className="list-inline-item">
              <img src={PostgresIcon} alt="" />
            </li>
          </ul>

          <div className="row"></div>
        </div>
      </section>
      </I18nextProvider>
    );
  }
}
