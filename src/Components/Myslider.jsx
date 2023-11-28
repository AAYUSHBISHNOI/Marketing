import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import myimg from "../assets/img/line1.png";
import myline from "../assets/img/line2.png";
import ws from "../assets/img/wsj.png";
import entr from "../assets/img/enter.png";
import fort from "../assets/img/fort.png";
import forb from "../assets/img/forbes.png";
import inc from "../assets/img/inc.png";

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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
  return (
    <div className=' mt-md-5 pt-5 position-relative pb-md-5'>
      <img className='img_pstn w-100' src={myimg} alt="" />
      <img className='img_pstn_1 w-100' src={myline} alt="" />
        <Container className=' mt-5'>
                <p className='fs_15 fw_600 ff_neue text-black text-center mb-5'>Featured in</p>
            <div className=' px-5'>
            <Slider {...settings} className=' mb-5 pb-5'>
              <div className=' d-flex justify-content-center'>
                <img src={ws} alt="" />
              </div>
              <div className=' d-flex justify-content-center'>
                <img src={entr} alt="" />
              </div>
              <div className=' d-flex justify-content-center'>
                <img src={fort} alt="" />
              </div>
              <div className=' d-flex justify-content-center'>
                <img src={forb} alt="" />
              </div>
             <div className=' d-flex justify-content-center'>
              <img src={inc} alt="" srcset="" />
             </div>
        </Slider>
            </div>
        </Container>

    </div>
  )
}

export default Myslider