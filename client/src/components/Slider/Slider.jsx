import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Slider.scss"

const Slider = () => {

    const [currentSlide,  setCurrentSlide] = useState[0];
     
    const data =[
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className='slider'>
       <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw )`}}>
         <img src={data[0]} alt="car" />
         <img src={data[1]} alt="img" />
         <img src={data[2]} alt="img" />
       </div>
       <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastIcon/>
        </div>
       </div>
    </div>
  )
}

export default Slider;
