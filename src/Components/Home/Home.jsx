import React from 'react'
import './home.css'
import phoneIcon from '../Assets/images/homePhone.svg'
import tidyHome from '../Assets/images/HomeImage.png'
const Home = () => {
  return (
    <section>
      <div className="home">
      <div className='container'>
       <div className="dividedHome">
       <div className='leftHome'>
        <h1 className='leftHomeTitle'>Quality cleaning for your home</h1>
        <p className='leftHomeText'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
        <div className='leftHomeCall'>
          <button className="btn btnHome">Get a free quote</button>
         <div className="callItems">
         <img className='phoneIcon' src={phoneIcon} alt="icon" />
          <p className='callText'>Call us now <br/>
          <span className='phoneNumber'>(414) 567-2109</span></p>
         </div>
        </div>
        </div>   
       <div className='rightHome'>

        <img className='homeImg' src={tidyHome} alt="homeImg" />
        </div>   
       </div>
      </div>
      </div>
      
     
    </section>
  )
}

export default Home