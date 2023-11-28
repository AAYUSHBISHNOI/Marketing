import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Abj, Bttnarow, Cardtwo, Cardusa} from './Mysvg'
import mysqy from "../assets/img/squiggle_01.png";

const Clients = () => {
  return (
    <div className=' mt-xl-5 pt-xxl-0 position-relative overflow-hidden'>
                   <img className='img_pstn_2' src={mysqy} alt="" />
            <div className=' text-center' data-aos="fade-up">
            <p className='ff_neue fs_30 fw_300 text-black mb-0'>Driving digital revenue for over</p>
            <h2 className='font_80 ff_sohne fw_700 text-black text-uppercase mb-0'>1,400+ satisfied clients.</h2>
            </div>
            <Row className='mt-md-4 pt-4 d-flex justify-content-center'>
            <Col md={6} lg={4} className=' d-flex justify-content-lg-start' data-aos="fade-down">
                <div className='card_1 padding_card py-4'>
                    <div className='card_white_color'>
                        <Abj/>
                        <p className='fs_30 fw_400 ff_neue text-black mb-0'>Driving digital revenue <span className='d-lg-block'>for over 1,000+</span> <span className='d-lg-block'>satisfied clients.</span></p>
                        <p className='fs_15 fw_600 ff_neue text-black mb-0'>Elevate your business with our top- <span className='d-lg-block'>tier services and tech</span></p>
                        <button className='fs_18 fw_600 ff_neue text-black mb-0 bttn_learn mt-5'>Learn more <Bttnarow/></button>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3'>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>80%</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Leads</p>
                        </div>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>2X</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Ad Leads</p>
                        </div>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>520%</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Web Traffic</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={6} lg={4} className='d-flex justify-content-lg-center mt-3 mt-md-0' data-aos="fade-right">
                <div className='card_2 padding_card py-4'>
                    <div className='card_white_color'>
                        <Cardtwo/>
                        <p className='fs_30 fw_400 ff_neue text-black mb-0'>Driving digital revenue <span className='d-lg-block'>for over 1,000+</span> <span className='d-lg-block'>satisfied clients.</span></p>
                        <p className='fs_15 fw_600 ff_neue text-black mb-0'>Elevate your business with our top- <span className='d-lg-block'>tier services and tech</span></p>
                        <button className='fs_18 fw_600 ff_neue text-black mb-0 bttn_learn mt-5'>Learn more <Bttnarow/></button>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3'>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>80%</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Leads</p>
                        </div>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>2X</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Ad Leads</p>
                        </div>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>520%</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Web Traffic</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={6} lg={4} className='d-flex justify-content-lg-end mt-3 mt-lg-0'  data-aos="fade-left">
                <div className='card_3 padding_card py-4'>
                    <div className='card_white_color'>
                        <Cardusa/>
                        <p className='fs_30 fw_400 ff_neue text-black mb-0'>Driving digital revenue <span className='d-lg-block'>for over 1,000+</span> <span className='d-lg-block'>satisfied clients.</span></p>
                        <p className='fs_15 fw_600 ff_neue text-black mb-0'>Elevate your business with our top- <span className='d-lg-block'>tier services and tech</span></p>
                        <button className='fs_18 fw_600 ff_neue text-black mb-0 bttn_learn mt-5'>Learn more <Bttnarow/></button>
                    </div>
                    <div className='d-flex justify-content-between px-4 pt-3'>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>80%</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Leads</p>
                        </div>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>2X</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Ad Leads</p>
                        </div>
                        <div>
                            <p className='ff_sohne fs_50 fw_700 text-black text-uppercase mb-0'>520%</p>
                            <p className='ff_neue fs_16 fw_600 text-black m-0'>Web Traffic</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Clients