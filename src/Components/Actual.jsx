import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import man from "../assets/img/manslider.png";
import two from "../assets/img/slider2.png";
import third from "../assets/img/slider3.png";
import { Myusa, Sliderone, Slidertwo, Youtube } from './Mysvg';
import slide from "../assets/img/Group177.png";
import slider from "../assets/img/Group178.png";

const Actual = () => {
  const slider = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.25,
        arrows:false,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              centerMode: true,
              centerPadding: '0px',
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
        // autoplay:true
      };
  return (
    <div className='bcg_slider pb-5 position-relative overflow-hidden'>
      
     
        <Container className=' pt-md-5'>
            <div className=' text-center pt-5 pb-5' data-aos="zoom-out">
                <h3 className=' ff_neue fs_30 fw_300 text-white mb-0'>Actual businesses.</h3>
                <h4 className=' ff_sohne fs_80 fw_700 text-white text-uppercase mb-0'>Actual results.</h4>
                <p className=' ff_neue fs_15 fw_400 text-white mb-0 pt-3 pt-md-4'>Businesses trust Venveo to power grow.</p>
            </div>

        </Container>
        <button className='img_pstn_8 z-3' onClick={() => slider.current.slickPrev()}><Sliderone/></button>
        <button className='img_pstn_9 z-3' onClick={() => slider.current.slickNext()}><Slidertwo/></button>
        <Slider ref={slider} {...settings} className='my_slider'>
       
          <div className=' text-center slider_width position-relative' data-aos="zoom-out-up">
            <img className=' w-100' src={man} alt="" />
            <Youtube/>
            <p className=' text-center ff_neue font_24 fw_300 text-white mb-0 pt-3 pt-md-5'>“They are really aligned with how we are <span className=' d-block'> building the business from a strategic</span> <span className=' d-block'>standpoint and from branding, messaging</span> <span className=' d-block'>and cultural standpoint.”</span></p>
            <p className=' fs_15 fw_400 ff_neue text-white pt-4'>Jon Vaughan, <span className=' d-block'>REGIONAL VP-SE AT US LBM</span></p>
          <Myusa/>
          </div>
          <div className=' text-center slider_width position-relative' data-aos="zoom-out-down"  >
          <img className=' w-100' src={two} alt="" />
          <Youtube/>
          <p className=' text-center ff_neue font_24 fw_300 text-white mb-0 pt-3 pt-md-5'>“They are really aligned with how we are <span className=' d-block'> building the business from a strategic</span> <span className=' d-block'>standpoint and from branding, messaging</span> <span className=' d-block'>and cultural standpoint.”</span></p>
          <p className=' fs_15 fw_400 ff_neue text-white pt-4'>Jon Vaughan, <span className=' d-block'>REGIONAL VP-SE AT US LBM</span></p>
          <Myusa/>
          </div>
          <div className=' text-center slider_width position-relative' data-aos="zoom-out-right">
          <img className=' w-100' src={third} alt="" />
          <Youtube/>
          <p className=' text-center ff_neue font_24 fw_300 text-white mb-0 pt-3 pt-md-5'>“They are really aligned with how we are <span className=' d-block'> building the business from a strategic</span> <span className=' d-block'>standpoint and from branding, messaging</span> <span className=' d-block'>and cultural standpoint.”</span></p>
          <p className=' fs_15 fw_400 ff_neue text-white pt-4'>Jon Vaughan, <span className=' d-block'>REGIONAL VP-SE AT US LBM</span></p>
          <Myusa/>
          </div>
        </Slider>
    </div>
  )
}

export default Actual