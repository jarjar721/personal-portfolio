import React, { Component } from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class Home extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
      <section
        className="site-hero"
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-12 text-center">
              <h1 className="site-heading site-animate">
              {i18n.t("homeTitle")}<strong>José Andrés Rodríguez</strong>
              </h1>
              <p className="lead site-subheading mb-4 site-animate">
                <b>{i18n.t("homeSubtitle")}</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      </I18nextProvider>
    );
  }
}
