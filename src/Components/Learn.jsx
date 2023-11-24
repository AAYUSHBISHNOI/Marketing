import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Arrow, Bttnarow } from './Mysvg'
import rect from "../assets/img/Rectangle1.png";
import twoman from "../assets/img/Rectangle2.png";
import threeman from "../assets/img/Rectangle3.png";
import fourman from "../assets/img/Rectangle4.png";
import vect from "../assets/img/Vector5.png";
import gray from "../assets/img/greenline.png";

const Learn = () => {
  return (
    <div className='overflow-hidden position-relative'>
      <img className=' w-100 img_pstn_6 d-none d-md-block' src={vect} alt="" />
      <img className=' w-100 img_pstn_7' src={gray} alt="" />
        <Container>
            <div className=' text-center mt-md-5 pt-4' data-aos="zoom-out-left">
                <h2 className=' fs_80 fw_700 text-black ff_sohne mb-0'>Learn from us.</h2>
                <p className=' fs_15 fw_400 ff_neue text-black'>Digital marketing resources from Venveo to help you grow.</p>
                <button className=' fs_15 fw_600 ff_neue text-black bttn_learn'>See All <Bttnarow/></button>
            </div>
              <div className=' position-relative mb-5 pb-5 pb-sm-2' data-aos="zoom-in">
                <img className=' w-100 mt-4 mb-5 pb-5 mb-md-0 pb-md-0' src={rect} alt="" />
                <div className='my_circle_1 d-flex align-items-center text-center justify-content-center'>
              <p className='mb-0 ff_neue fs_15 fw_400 text-black'>MADE <span className='d-block txt_for'>for</span><span className='d-block'>BRANDS</span></p>
              </div>
                <div className='card_guide card_pstn_1' data-aos="zoom-in-up">
                    <p className=' ff_neue fs_15 fw_400 txt_clr text-uppercase mb-0'>guides</p>
                    <p className=' font_28 fw_300 ff_neue text-black mb-0'>Marketing to Contractors <span className=' d-md-block'>and Installers:</span><span> The Ultimate Guide</span></p>
                    <p className=' fs_15 fw_400 ff_neue text-black mb-0'>Understanding the process and <span className=' d-md-block'>maximize the opportunities</span></p>
                    <button className=' ff_neue fs_15 fw_600 text-black bttn_learn'>Read More <Bttnarow/></button>
                </div>
            </div>
        </Container>
            <Row className=" mb-md-5 d-flex justify-content-center">
              <Col md={6} xl={4} data-aos="zoom-in-down">
              <div className=' position-relative'>
              <img className=' w-100' src={twoman} alt="" />
                <div className="card_guide_1 card_pstn_2">
                  <p className=' ff_neue fs_15 fw_600 txt_clr text-uppercase mb-0'>multi-channel marketing</p>
                  <p className=' ff_neue fs_28 fw_300 text-black mb-0'>How to Get Your Product <span className=' d-md-block'>into Lowe’s</span></p>
                  <p className=' fs_15 fw_400 ff_neue text-black mb-0'>Understanding the process and <span className=' d-md-block'>maximize the opportunities</span></p>
                  <button className=' ff_neue fs_15 fw_600 text-black bttn_learn'>Read More <Bttnarow/></button>
                </div>
                </div>
              </Col>
              <Col md={6} xl={4} data-aos="zoom-in-left">
              <div className=' position-relative mt-4 mt-md-0'>
              <img className=' w-100' src={threeman} alt="" />
              <div className="card_guide_1 card_pstn_2">
                  <p className=' ff_neue fs_15 fw_600 txt_clr text-uppercase mb-0'>lead-gen</p>
                  <p className=' ff_neue font_29 fw_300 text-black mb-0'>Get Your Sales Team  <span className=' d-md-block'>Ready for Digital Leads</span></p>
                  <p className=' fs_15 fw_400 ff_neue text-black mb-0'>unlock substantial business growth  <span className=' d-md-block'>by enhancing collaboration skills</span><span className=' d-md-block'>and digital marketing expertise</span></p>
                  <button className=' ff_neue fs_15 fw_600 text-black bttn_learn'>Read More <Bttnarow/></button>
                </div>
           </div>
              </Col>
              <Col md={6} xl={4} className=" d-md-flex justify-content-md-center" data-aos="zoom-in-right">
              <div className=' position-relative mt-4 mt-xl-0'>
              <img className=' img_learn' src={fourman} alt="" />
              <div className="card_guide_1 card_pstn_2">
                  <p className=' ff_neue fs_15 fw_600 txt_clr text-uppercase mb-0'>ecommerce</p>
                  <p className=' ff_neue fs_28 fw_300 text-black mb-0'>How to Sell building  <span className=' d-md-block'>Materials Online</span></p>
                  <p className=' fs_15 fw_400 ff_neue text-black mb-0'>Explore how selling building <span className=' d-md-block'>materials online opens up wider</span><span className=' d-md-block'> audiences, efficient sales and</span> <span className=' d-md-block'> insightful data,</span></p>
                  <button className=' ff_neue fs_15 fw_600 text-black bttn_learn'>Read More <Bttnarow/></button>
                </div>
            </div>
              </Col>
            </Row>

       <div className='  bcg_blue txt_padding mt-4 mt-md-0'>
          <Container>
              <div className='d-md-flex align-items-center justify-content-center' data-aos="zoom-out">
                 <p className=' ff_neue fs_40 fw_300 text-white mb-3 text-center'>Ready to hit your goals?</p>
                 <button className=' ff_neue fs_15 fw_600 text-black bttn_book mb-0 mx-auto d-flex'>Book a Strategy Call <Arrow/></button>
              </div>
          </Container>
       </div>
    </div>
  )
}

export default Learn