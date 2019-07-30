import React, { Component } from "react";
import JAR_logo from "../resources/images/JAR-logo.png";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
        id="pb-navbar"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <a className="navbar-brand" href="/">
            <img src={JAR_logo} alt="" />
          </a>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section-home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-tools">
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#site-footer">
                  Find me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
