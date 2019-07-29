import React, { Component } from 'react'

import Person1 from '../resources/images/person_1.jpg';
import Person2 from '../resources/images/person_2.jpg';
import Person3 from '../resources/images/person_3.jpg';
import Person4 from '../resources/images/person_4.jpg';

export default class ClientTestimonial extends Component {
  render() {
    return (
        <section className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>Client <strong>Testimonial</strong></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
    
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img src={Person1} alt="" className="img-fluid"></img>
                </div>
                <blockquote className="block-47-quote">
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  <cite className="block-47-quote-author">&mdash; Elio Navarrete, Information Security Executive</cite>
                  <div className="text-right">
                    <p>
                      <a href="#fake-link">CAF - Development Bank of Latin America</a>
                    </p>
                  </div>
                </blockquote>
              </div>
    
            </div>
            <div className="col-md-6">
    
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img src={Person2} alt="" className="img-fluid"></img>
                </div>
                <blockquote className="block-47-quote">
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  <cite className="block-47-quote-author">&mdash; Andreina De Rufino, HR Something</cite>
                  <div className="text-right">
                    <p>
                      <a href="#fake-link">XYZ Inc.</a>
                    </p>
                  </div>
                </blockquote>
              </div>
    
            </div>
    
            <div className="col-md-6">
    
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img src={Person3} alt="" className="img-fluid"></img>
                </div>
                <blockquote className="block-47-quote">
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  <cite className="block-47-quote-author">&mdash; Ethan McCown, Director of the Computer Engineering School</cite>
                  <div className="text-right">
                    <p>
                      <a href="#fake-link">Universidad Católica Andrés Bello</a>
                    </p>
                  </div>
                </blockquote>
              </div>
    
            </div>
            <div className="col-md-6">
    
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img src={Person4} alt="" className="img-fluid"></img>
                </div>
                <blockquote className="block-47-quote">
                  <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  <cite className="block-47-quote-author">&mdash; Craig Gowen, CEO</cite>
                  <div className="text-right">
                    <p>
                      <a href="#fake-link">XYZ Inc.</a>
                    </p>
                  </div>
                </blockquote>
              </div>
    
            </div>
    
          </div>
        </div>
      </section>
    )
  }
}