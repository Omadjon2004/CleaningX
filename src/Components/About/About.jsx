import React, { Component } from "react";
import './about.css'
import house from '../Assets/images/House.png'
import office from '../Assets/images/office.png'
import Factory from '../Assets/images/factory.png'
export default class About extends Component {
  render() {
    return (
      <section>
        <div className="about">
          <div className="container">
            <div className="about-header">
              <h2 className="about-title">
                Take a look at our professional services
              </h2>
              <button className="btn btnServices2 btnAbout">Explore services</button>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <img src={house} alt="house" className="aboutCard-img" />
                <h3 className="aboutCard-title">House cleaning</h3>
                <p className="aboutCard-text">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="about-card">
                <img src={office} alt="Office" className="aboutCard-img" />
                <h3 className="aboutCard-title">Office cleaning</h3>
                <p className="aboutCard-text">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="about-card">
                <img src={Factory} alt="Factory" className="aboutCard-img" />
                <h3 className="aboutCard-title">Industrial cleaning</h3>
                <p className="aboutCard-text">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
