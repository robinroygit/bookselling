import React from 'react'
import HeroImage from "../assets/images/heading-bg.webp";


const Hero = () => {
  return (
    <div className=' position-relative'>
             <div className="">
                <img src={HeroImage} alt="heroImage" />
            </div>

            <div className=" position-absolute offer-data  ">
                    <div className="offer-heading">
                        <h1>Upto 75% Off</h1>
                        </div>
                    <div className='offer-para'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis!</p>
                    </div>
                    <div >
                        <button className="hero-btn">Shop Now</button>
                    </div>

            </div>

    </div>
  )
}

export default Hero