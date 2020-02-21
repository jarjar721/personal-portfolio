import React, { Component } from 'react'

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default class Footer extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <footer className="site-footer" id="site-footer">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2><strong>{i18n.t("findMe")}</strong>{i18n.t("on")}</h2>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <p>
                <a href="https://www.facebook.com/jose.a.rodriguez2261" className="social-item"><span className="icon-facebook2"></span></a>
                <a href="https://twitter.com/joseandres_rp" className="social-item"><span className="icon-twitter"></span></a>
                <a href="https://www.instagram.com/joseandres.rp/" className="social-item"><span className="icon-instagram2"></span></a>
                <a href="https://www.linkedin.com/in/josé-andrés-rodríguez-508274125" className="social-item"><span className="icon-linkedin2"></span></a>
                <a href="https://github.com/jarjar721" className="social-item"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </I18nextProvider>
    )
  }
}