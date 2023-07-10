import React, { Component } from "react";
import homePhone from "../Assets/images/HomePhoneIcon.svg";

import './contact.css'
export default class Contact extends Component {
  render() {
    return (
      <section className="contact-page">
        <div className="container">
          <div className="contactUs">
            <div className="contactLeft">
              <h2 className="contactLeftTitle">
                Request a free cleaning quote today
              </h2>
              <p className="contactLeftText">
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="callItems contactItems">
                <img className="phoneIcon" src={homePhone} alt="icon" />
                <p className="callText">
                  Call us now <br />
                  <span className="phoneNumber">(414) 567-2109</span>
                </p>
              </div>
              <hr className="contactLeftLine" />
              <h2 className="contactTitle2">Not convinced yet?</h2>
              <p className="contactLeftText2">
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button className="btn btnServices2 btnContact">
              Browse our packages
              </button>
            </div>
            <div className="contactRight">
              <form className="contactRightForm" action="#">
              <label className="contactRightLabel label">
           <span className="rightLabelSpan">
           Full name
           </span>
              <input className="contactRightInput" type="text" />
              </label>
              <label className="contactRightLabel  label">
           <span className="rightLabelSpan">
           Phone number
           </span>
              <input className="contactRightInput" type="number" />
              </label>
              <label className="contactRightLabel label">
           <span className="rightLabelSpan">
           Address
           </span>
              <input className="contactRightInput" type="text" />
              </label>
              <label className="contactRightLabel label">
           <span className="rightLabelSpan">
           Email
           </span>
              <input className="contactRightInput" type="email" />
              </label>
              <label className="contactRightLabel label">
           <span className="rightLabelSpan">
           Requested service
           </span>
              <input className="contactRightInput" type="text" />
              </label>
              <label className="contactRightLabel label">
           <span className="rightLabelSpan">
           Day of service
           </span>
              <input className="contactRightInput" type="text" />
              </label>
              <label className="contactRightLabel contactNote">
           <span className="rightLabelSpan">
           Add a note
           </span>
           <textarea className="contactRightInput contactForNote"  name="postContent" />
              </label>
              </form>
          <button className="btn btnArticle">Submit message</button>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
