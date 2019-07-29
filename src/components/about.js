import React, { Component } from 'react'
import about_me from '../resources/images/about_me.jpg';

export default class About extends Component {
  render() {
    return (
        <section className="site-section" id="section-about">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
              <img src={about_me} alt="" className="img-fluid"></img>
            </div>
            <div className="col-lg-5 pl-lg-5">
              <div className="section-heading">
                <h2>About <strong>Me</strong></h2>
              </div>
              <p className="lead">Computer Engineering student at Universidad Católica Andrés Bello in Caracas, Venezuela.</p>
              <p className="mb-5">I'm a dual Venezuelan-Spanish citizen with experience in web development and access management who seeks an entry-level job position in web development.</p>
    
              <p>
                <a href="https://drive.google.com/file/d/1--11y4guh2hxKmPokyxEy7FH6jOH_G1b/view?usp=drivesdk" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
              </p>
            </div>
          </div>
    
        </div>
      </section>
    )
  }
}

/*

HIRE ME BUTTON

                <a href="#site-footer" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>

*/