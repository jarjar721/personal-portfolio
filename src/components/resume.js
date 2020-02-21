import React, { Component } from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class Resume extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <section className="site-section bg-light " id="section-resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  {i18n.t("resumeMy")} <strong>{i18n.t("resumeTitle")}</strong>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mb-5">{i18n.t("education")}</h2>
              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar" /> {i18n.t("dateUCAB")}
                </span>
                  <h3>{i18n.t("titleUCAB")}</h3>
                <p>
                  {i18n.t("descriptionUCAB")}
                </p>
                <span className="school">
                  <a href="https://www.ucab.edu.ve">
                    {i18n.t("UCAB")}
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mb-5">{i18n.t("experience")}</h2>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar" /> {i18n.t("dateTelefonica")}
                </span>
                <h3>{i18n.t("titleTelefonica")}</h3>
                <p>
                  {i18n.t("descriptionTelefonica")}
                </p>
                <span className="school">
                  <a href="https://www.telefonica.com">
                    {i18n.t("Telefonica")}
                  </a>
                </span>
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar" /> {i18n.t("dateCrewNew")}
                </span>
                <h3>{i18n.t("titleCrewNew")}</h3>
                <p>
                  {i18n.t("descriptionCrewNew")}
                </p>
                <span className="school">
                  <a href="https://www.crewnew.com">
                    {i18n.t("CrewNew")}
                  </a>
                </span>
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar" /> {i18n.t("dateCAF")}
                </span>
                <h3>{i18n.t("titleCAF")}</h3>
                <p>
                  {i18n.t("descriptionCAF")}
                </p>
                <span className="school">
                  <a href="https://www.caf.com">
                    {i18n.t("CAF")}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </I18nextProvider>
    );
  }
}
