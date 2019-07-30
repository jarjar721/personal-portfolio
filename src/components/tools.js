import React, { Component } from "react";

import ReactIcon from "../resources/images/reactjs-icon.svg";
import NodeIcon from "../resources/images/nodejs-icon.svg";
import LaravelIcon from "../resources/images/laravel-ar21.svg";
import PostgresIcon from "../resources/images/postgresql-icon.svg";

export default class Tools extends Component {
  render() {
    return (
      <section
        className="site-section border-top pb-0 bg-light"
        id="section-tools"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  My <strong>Tools</strong>
                </h2>
              </div>
            </div>
          </div>

          <p className="intro">
            More than 2 years wielding their power crafting web applications
          </p>

          <ul className="technologies list-inline">
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
    );
  }
}
