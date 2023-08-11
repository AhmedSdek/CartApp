import { Carousel } from "react-bootstrap";
import slider1 from '../../imeges/slider1.png';
import slider2 from '../../imeges/slider4.png';
import slider3 from '../../imeges/prod3.png';
import slider4 from '../../imeges/prod4.png';
import { useState } from "react";



function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex)};
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img style={{width:'313.53px' , height: '296px'}}
            className=""
            src={slider1}
            alt="First slide"
          />
          <div>
            <h3 className="slider-title">Big Sale</h3>
            <p className="slider-text">Sale 50% </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img style={{width:'313.53px' , height: '296px'}}
            className=""
            src={slider2}
            alt="Second slide"
          />
          <div>
            <h3 className="slider-title">Big Sale</h3>
            <p className="slider-text">Sale 50% </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background3">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img style={{width:'313.53px' , height: '296px'}}
            className=""
            src={slider3}
            alt="Third slide"
          />
          <div>
            <h3 className="slider-title">Big Sale</h3>
            <p className="slider-text">
              Sale 50% 
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;