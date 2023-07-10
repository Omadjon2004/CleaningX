import React, { Component } from "react";
import "./agents.css";
import numbersImg from '../Assets/images/NumbersImg.png'
import Line from "../ForLine/Line";

export class Agents extends Component {
  render() {
    return (
    <div className="inNumbers">
      <div className="container">
        <div className="ourDigits">
          <div className="digitsLeft">
            <h2 className="leftDigitsTitle">What makes us different?</h2>
            <p className="leftDigitsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. <br /> <br />
              <span className="digitsSpan">
                Sed ut perspiciatis unde omnis iste natus error sit atem
                accusantium doloremque laudantiu sed ut.
              </span>
            </p>
            <div className="leftNumbers">
                <h2 className="numbersTitle">10 <span className="titleSpan">+</span>
                <p className="titlesText">Years</p></h2>
                <h2 className="numbersTitle">5k <span className="titleSpan">+</span>
                <p className="titlesText">Clients</p></h2>
                <h2 className="numbersTitle">20k <span className="titleSpan">+</span>
                <p className="titlesText">Jobs done</p></h2>
            </div>
            <button className="btn btnNumbers">Get a free quote</button>
          </div>
          <div className="digitsright">
            <img src={numbersImg} alt="img" className="digitsImg" />
          </div>
        </div>
        <Line/>
      </div>
    </div>
    );
  }
}

export default Agents;
