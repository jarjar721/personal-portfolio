import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="site-footer" id="site-footer">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2><strong>Find me</strong> on</h2>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <p>
                <a href="https://www.facebook.com/jose.a.rodriguez2261" className="social-item"><span className="icon-facebook2"></span></a>
                <a href="https://twitter.com/jarjar721" className="social-item"><span className="icon-twitter"></span></a>
                <a href="https://www.instagram.com/jarjar721/" className="social-item"><span className="icon-instagram2"></span></a>
                <a href="https://www.linkedin.com/in/josé-andrés-rodríguez-508274125" className="social-item"><span className="icon-linkedin2"></span></a>
                <a href="https://github.com/jarjar721" className="social-item"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}