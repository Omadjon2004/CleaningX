import React from "react";
import "./covid.css";
import phoneIcon from '../Assets/images/homePhone.svg'

import girlPng from "../Assets/images/CovidImg.png";
const Covid = () => {
  return (
    <div className="container">
      <div className="covid-info">
        <div className="covidInfo-left">
          <img src={girlPng} alt="Covid img" className="covidInfoLeft-img" />
        </div>
        <div className="covidInfo-right">
          <span className="covidSpan">Covid-19 sanitization</span>
          <h2 className="covidTitle">
            We follow guidelines to keep you safe from the COVID-19 virus
          </h2>
          <p className="covidText">
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
          <div className='leftHomeCall'>
          <button className="btn btnHome">Get a free quote</button>
         <div className="callItems">
         <img className='phoneIcon' src={phoneIcon} alt="icon" />
          <p className='callText covidChange-text'>Call us now <br/>
          <span className='phoneNumber covidChange-num'>(414) 567-2109</span></p>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
