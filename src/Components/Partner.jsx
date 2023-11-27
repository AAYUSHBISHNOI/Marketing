import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import bcg_video from "../assets/video/slider1.mp4";
import { Arrow, Bttnarow, Mypodcast, Podcast, Text, Textfour, Textthree, Texttwo, Vector, Vectorone} from './Mysvg';
import first from "../assets/img/image1.png";
import three from "../assets/img/image3.png";
import four from "../assets/img/image4.png";
import five from "../assets/img/image5.png";
import man from "../assets/img/man.png";
import green from "../assets/img/greenline2.png";
import bcg_video_1 from "../assets/video/earth.mp4";
import bcg_video_2 from "../assets/video/computer.mp4";
import myvector from "../assets/img/Vector2.png";
import blue from "../assets/img/image10.png";
import Slider from "react-slick";
import rectangle from "../assets/img/Rectangle25.png";
import { Enter, Forbes, Fortune, Inc, Wsj } from './Mysvg';
import lop from "../assets/img/Loop.png";


const Partner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
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
        
      };
  return (
    <div className=' mt-lg-5 pt-xxl-0 mb-md-5 pb-5 position-relative overflow-hidden'>
        <img className=' img_pstn_5 w-100' src={green} alt="" />
        <Container className=' mt-5'>
            <div className=' text-center' data-aos="zoom-in">
                <h1 className=' fs_80 fw_700 ff_sohne text-black mb-0'>The growth partner </h1>
                <p className=' fs_30 fw_300 ff_neue text-black'>you’ve been looking for.</p>
                <p className=' fs_15 fw_400 ff_neue text-black pt-md-4'>Businesses trust Venveo to power grow.</p>
            </div>
            <Tabs defaultActiveKey="Industry Expertise" id="uncontrolled-tab-example" className="mb-3 d-flex justify-content-center">
                 <Tab eventKey="Industry Expertise" title="Industry Expertise" data-aos="zoom-in-up">
                    <div className=' position-relative'>
                        <video className=' w-100 txt_pstn_vd_1 z-n1 h-100 object-fit-cover video_opacity' autoPlay loop muted src={bcg_video}></video>
                        <img className='pstn_rect w-100' src={rectangle} alt="" />
                        <Row className=' z-3 align-items-center pt-5 pb-lg-5 px-4'>
                            <Col md={6} lg={5}>
                              <div className='text-center text-md-start ms-md-3'>
                                 <h1 className=' fonts_80 fw_700 text-white ff_sohne text-uppercase mb-0 pt-3 pt-lg-0'>the smartest <span className=' d-md-block'>minds in the</span> <span className=' d-md-block'>industry</span></h1>
                                 <p className=' ff_neue fonts_30 fw_300 text-white mb-0'>Answer our questions and <span className=' d-md-block'>listen to our answers.</span></p>
                                 <p className=' ff_neue fs_15 fw_400 text-white '>This is placeholder but can add more <span className=' d-md-block'>the business of building, some epic</span> <span className=' d-md-block'>fails (and how to avoid them) and</span><span className=' d-md-block'> everything building science.</span></p>
                                <button className=' ff_neue fs_15 fw_500 text-white bttn_suscribe'><Podcast/>Subscribe to Podcast <span className=' fs_6'>▼</span></button>
                              </div>
                            </Col>
                            <Col md={6} lg={3} >
                                <div className=' d-flex flex-column align-items-center'>
                                    <div className=' d-flex flex-lg-column align-items-center gap-5 px-5'>
                                        <div className='my_img'>
                                        <img className=' position-relative' src={first} alt="" />
                                        <img className='img_lop' src={lop} alt="" />
                                        </div>
                                        <div className='my_img'>
                                        <Mypodcast/>
                                        <img className=' img_lop_1' src={lop} alt="" />
                                        </div>
                                        <div className='my_img'>
                                        <img className=' mt-1 position-relative' src={three} alt="" />
                                        <img className='img_lop_2' src={lop} alt="" />
                                        </div>
                                    </div>
                                    <div className=' d-flex flex-lg-column align-items-center gap-5'>
                                        <div className='my_img'>
                                        <img className=' mt-5  position-relative' src={four} alt="" />
                                        <img className='img_lop_3' src={lop} alt="" />
                                        </div>
                                        <div className='my_img'>
                                        <img className=' mt-3  position-relative' src={five} alt="" />
                                        <img className='img_lop_4' src={lop} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className=' d-flex justify-content-center mt-3 mb-4 mt-xl-0 mb-xl-0'>
                             <div className='card_slider'>
                                <img className=' rounded-5 w-100' src={man} alt="" />
                                <p className=' ff_neue font_31 fw_300 text-black pt-4'>Matt Risinger on How to <span className=' d-md-block'> Develop Lasting</span><span className=' d-md-block'> Relationships with Builders</span></p>
                                <p className=' ff_neue fs_15 fw_400 text-black'>Chief Builder of Rising Build and <span className=' d-md-block'>founder of the founder of the<span><a href="" className=' ff_neue fs_15 fw_400 text-black ms-2'> Build Show Network</a></span></span></p>
                                <button className=' bttn_listen'>Listen to Interview <Bttnarow/></button>
                             </div>
                            </Col>
                        </Row>
                    </div>
                 </Tab>
                <Tab eventKey="ROI Focused" title="ROI Focused"   data-aos="zoom-in-down">
                    <div className=' position-relative overflow-hidden'>
                         <video className=' w-100 h-100 pstn_video_1 z-n1 object-fit-cover video_opacity' autoPlay loop muted src={bcg_video_1}></video>
                         <div className='ms-4 mt-3'>
                            <h2 className=' ff_sohne fonts_80 fw_700 text-white mb-0 text-uppercase'>Proven Results</h2>
                            <p className=' ff_neue font_31 fw_300 text-white'>Not hopes and prayers.</p>
                         </div>
                         <div className='green_circle pstn_circle_1 d-flex justify-content-center align-items-center flex-column'>
                                <Text/>
                                <p className=' fnt_80 fw_700 ff_sohne text-black'>100K</p>
                            </div>
                            <div className='green_circle pstn_circle_2 d-flex justify-content-center align-items-center flex-column'>
                                <Texttwo/>
                                <p className=' fnt_80 fw_700 ff_sohne text-black'>135</p>
                            </div>
                            <div className='green_circle pstn_circle_3 d-flex justify-content-center align-items-center flex-column'>
                                <Textthree/>
                                <p className=' fnt_80 fw_700 ff_sohne text-black'>1,067</p>
                            </div>
                            <div className='green_circle pstn_circle_4 d-flex justify-content-center align-items-center flex-column'>
                                <Textfour/>
                                <p className=' fnt_80 fw_700 ff_sohne text-black'>10X</p>
                            </div>
                            <div className='yellow_circle pstn_circle_5 d-flex justify-content-center align-items-center flex-column'>
                                <p className=' ff_neue fs_12 fw_400 text-black mb-0'>Revenue Generated</p>
                                <p className=' fnt_80 fw_700 ff_sohne text-black mb-0'>$7.8B</p>
                                <p className=' fs_12 text-center ff_neue fw_500 text-black'>We let our numbers do the <span className=' d-md-block'>talking. $7.8billion in reported</span><span className='d-md-block'> client revenue. And counting.</span></p>
                            </div>
                            <img className='pstn_vector d-none d-md-block' src={myvector} alt="" />
                    </div>
                </Tab>
                <Tab eventKey="Proprietary Technology" title="Proprietary Technology" className=' position-relative' data-aos="zoom-in-right">
                     <div className=' position-relative '>
                        <video className=' w-100  video_pstn z-n1 h-100 object-fit-cover' autoPlay loop muted src={bcg_video_2}></video>
                        <img className='pstn_rect w-100' src={rectangle} alt="" />
                                <Row className=' d-flex justify-content-between h-100'>
                                    <Col md={6} lg={5} className=' txt_wrap d-flex flex-column justify-content-center align-items-center justify-content-md-start text-center text-md-start'>
                                    <div className=' mt-3'>
                                        <p className=' fs_80 fw_700 ff_sohne text-white text-uppercase'>Project radar</p>
                                        <Vectorone/>
                                    </div>
                                    <div className=' mt-md-3 pt-4 '>
                                         <p className=' ff_neue fs_30 fw_300 text-white'>Lorem ipsum what this <span className=' d-block'>product actually does.</span></p>
                                        <p className=' ff_neue fs_15 fw_400 text-white mb-5'>This is placeholder but can add more <span className=' d-block'>the business of building, some epic</span><span className=' d-block'> fails (and how to avoid them) and</span><span className=' d-block'> everything building science.</span></p>
                                        <button className='bttn_call ff_neue fs_15 fw_600 text-black'>Call to Action Somewhere <Arrow/></button>
                                    </div>
                                    </Col>
                                    <Col md={6} lg={5} className=' position-relative z-3'>
                                    <div className='card_slider_1 z-3 d-none d-sm-block d-md-none mx-5 mx-auto mt-3 mb-4'>
                                <img className=' rounded-5 img_slider_width' src={blue} alt="" />
                                <p className=' ff_neue fs_30 pt-3 fw_300 text-black'>Feature goes here one<span className=' d-md-block'>particular feature can go</span><span className=' d-md-block'>here of course</span></p>
                                <p className=' fs_15 fw_400 ff_neue text-black'>Secondary line to describe what this <span className=' d-md-block'>is in further detail of course</span></p>
                                <button className=' bttn_learn fs_15 fw_600 ff_neue text-black'>Learn more <Bttnarow/></button>
                                    </div> 
                                    <Slider {...settings} className=' mt-5 mb-5 pb-5 d-sm-none d-md-block'>
                                    <div className='card_slider_1 z-3'>
                                <img className=' rounded-5 img_slider_width' src={blue} alt="" />
                                <p className=' ff_neue fs_30 pt-3 fw_300 text-black'>Feature goes here one<span className=' d-md-block'>particular feature can go</span><span className=' d-md-block'>here of course</span></p>
                                <p className=' fs_15 fw_400 ff_neue text-black'>Secondary line to describe what this <span className=' d-md-block'>is in further detail of course</span></p>
                                <button className=' bttn_learn fs_15 fw_600 ff_neue text-black'>Learn more <Bttnarow/></button>
                                    </div> 
                                     <div className='card_slider_1 z-3'>
                                <img className=' rounded-5 img_slider_width' src={blue} alt="" />
                                <p className=' ff_neue fs_30 pt-3 fw_300 text-black'>Feature goes here one<span className=' d-md-block'>particular feature can go</span><span className=' d-md-block'>here of course</span></p>
                                <p className=' fs_15 fw_400 ff_neue text-black'>Secondary line to describe what this <span className=' d-md-block'>is in further detail of course</span></p>
                                <button className=' bttn_learn fs_15 fw_600 ff_neue text-black'>Learn more <Bttnarow/></button>
                                    </div> 
                                    <div className='card_slider_1 z-3'>
                                <img className=' rounded-5 img_slider_width' src={blue} alt="" />
                                <p className=' ff_neue fs_30 pt-3 fw_300 text-black'>Feature goes here one<span className=' d-md-block'>particular feature can go</span><span className=' d-md-block'>here of course</span></p>
                                <p className=' fs_15 fw_400 ff_neue text-black'>Secondary line to describe what this <span className=' d-md-block'>is in further detail of course</span></p>
                                <button className=' bttn_learn fs_15 fw_600 ff_neue text-black'>Learn more <Bttnarow/></button>
                                    </div>
                                 </Slider>
                                    </Col>
                                </Row>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    </div>
  )
}

export default Partner