import React, { Component } from "react";

import "./articles.css";

import card1Image from "../Assets/images/card1Img.png";
import card2Image from "../Assets/images/card2Img.png";

export default class Articles extends Component {
  render() {
    return (
      <section className="articles-page">
        <div className="container">
          <div className="article-header">
            <div className="aboutArticle">
              <h2 className="articleTitle">Articles & resources</h2>
              <p className="articleText">
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
            </div>
            <div className="articleBtns">
              <button className="btn btnServices2 btnArticle">
                Get a free quote
              </button>
              <button className="btn btnServices2 btnArticle2">
                Browse articles
              </button>
            </div>
          </div>
          <div className="article">
            <div className="articleLeftCard">
              <img className="articleCardImg" src={card1Image} alt="card1" />
              <div className="articleLeftCardInside">
                <h3 className="articleLeftCardTitle">
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h3>
                <p className="articleLeftCardText">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <span className="cardSpan">Jan 28, 2022</span>
              </div>
            </div>
            <div className="articleLeftCard">
              <img className="articleCardImg" src={card2Image} alt="card1" />
              <div className="articleLeftCardInside">
                <h3 className="articleLeftCardTitle">
                  How to properly disinfect your phone and other electronics
                </h3>
                <p className="articleLeftCardText">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <span className="cardSpan">Feb 1, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
