import React, { Component } from "react";
import './services.css'
import servisSchedule from "../Assets/images/services-schedule.png";
import servisMoneyCard from "../Assets/images/services-debitcarts.png";
import servisCleaner from "../Assets/images/ServicesCleaner.svg"
import Line from "../ForLine/Line";
export default class Services extends Component {
  render() {
    return (
      <section>
        <div className="services">
          <div className="container">
            <h2 className="services-title">How our service works?</h2>
            <p className="services-text">
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className="services-cards">
              <div className="services-card">
                <img className="servicesCard-img" src={servisSchedule} alt="schedule" />
                <h3 className="servicesCard-title">1. Schedule online</h3>
                <p className="servicesCard-text">
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="services-card">
                <img className="servicesCard2-img" src={servisMoneyCard} alt="Money" />
                <h3 className="servicesCard-title">2. Pay online easily</h3>
                <p className="servicesCard-text">
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.
                </p>
              </div>
              <div className="services-card">
                <img className="servicesCard3-img" src={servisCleaner} alt="cleaner" />
                <h3 className="servicesCard-title">3. Get your house cleaned</h3>
                <p className="servicesCard-text">
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.
                </p>
              </div>
            </div>
           <div className="services-btns">
           <button className="btn btnServices">Get a free quote</button>
           <button className="btn btnServices2">Explore services</button>
           </div>
            </div>     
        </div>
        <Line/>
      </section>
    );
  }
}
