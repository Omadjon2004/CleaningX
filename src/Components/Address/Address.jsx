import React, { Component } from 'react'
import './address.css'

export class Address extends Component {
  render() {
    return (
        <div className="container">
      <div className='address-section'>
      <div className="addressCard">
    <h2 className="addressCardTitle">
    Quality cleaning for your home
    </h2>
    <p className="addressCardText">
    Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
    </p>
</div>
<div className="addressCard">
    <h2 className="addressCardTitle">
    Contact us
    </h2>
    <p className="addressCardText">
1827 Nickel Road, Los Angeles, CA, 90017, United States
<br />
(414) 567 - 2109
<br />
contact@cleaning.com
    </p>
</div>
<div className="addressCard">
    <h2 className="addressCardTitle">
    Hours 
    
      </h2>
    <p className="addressCardText">
    <span className="addressDate">Monday to Friday</span> <br />
    6:00 AM - 9:00 PM <br />
    <span className="addressDate">Saturday & Sunday</span> <br />
    8:00 AM - 8:00 PM
    </p>
    
</div>
<div className="addressCard">
    <h2 className="addressCardTitle">
    Get a free estimate
    </h2><br />
    <p className="addressCardText">
        <span className="addressNumber">
        (414) 567 - 2109
        </span><br />
    Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
    </p><br />
    <button className="btn btnAddress">Request a free quote</button>
</div>
      </div>
        </div>
    )
  }
}

export default Address