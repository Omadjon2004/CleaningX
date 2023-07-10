import React, { Component } from 'react'
import './header.css'
import Svg from "../Assets/images/HeaderLogo.svg"
import Hamburger from "../Assets/images/bar_icon.svg"


class Header extends Component{
state = {clicked: true}
handleClick = () => {
  this.setState({clicked: !this.state.clicked})
}
  render(){


  return (
    <header>
        <div className="container">
     <div className="nav">
     <div className="leftNav" >
        <img className="HeaderLogo" src={Svg} alt="icon" />
            <ul className={this.state.clicked ? "active" : ""}>
              <li><a className="headerLink" href="#home">Home</a></li>
              <li><a className="headerLink" href="#about">About</a></li>
              <li><a className="headerLink" href="#services">Services</a></li>
              <li><a className="headerLink" href="#articles">Articles</a></li>
              <li><a className="headerLink" href="#contact">Contact</a></li>
              <button className="btn btn2">Get a free quote</button>
            </ul>
        </div>
        <div className="rightNav">
        <span className="headerSpan">Cart(0) </span>
    <button className="btn">Get a free quote</button>
    <div onClick={this.handleClick} className='toggle'>
      <i className={this.state.clicked ? "fas fa-bars" :  "fas fa-times"}></i>
    </div>
        </div>
     </div>
            
        </div>
    </header>
  )
}}

export default Header