import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import { Enter, Forbes, Fortune, Inc, Wsj } from './Mysvg';
import myimg from "../assets/img/line1.png";
import myline from "../assets/img/line2.png";

const Myslider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        
      };
  return (
    <div className=' mt-md-5 pt-5 position-relative pb-md-5 overflow-hidden'>
      <img className='img_pstn w-100' src={myimg} alt="" />
      <img className='img_pstn_1 w-100' src={myline} alt="" />
        <Container className=' mt-5 pt-5'>
                <p className='fs_15 fw_600 ff_neue text-black text-center mb-5'>Featured in</p>
       <Slider {...settings} className=' mt-5 mb-5 pb-5'>
          <div>
            <Wsj/>
          </div>
          <div>
            <Enter/>
          </div>
          <div>
            <Fortune/>
          </div>
          <div>
            <Forbes/>
          </div>
          <div>
            <Inc/>
          </div>
        </Slider>
        </Container>

    </div>
  )
}

export default Myslider