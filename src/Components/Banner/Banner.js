import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import one from '../../Images/Banner/1.jpg';
import two from '../../Images/Banner/2.JPG';
import three from '../../Images/Banner/3.jpg';

const Banner = () => {
  return (
    <>
      <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={one}
            alt="First slide"
          />
          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={two}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={three}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;