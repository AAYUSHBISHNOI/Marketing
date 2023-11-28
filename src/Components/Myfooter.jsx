import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Facebook, Instagram, Linkdin, Xx, You } from './Mysvg'

const Myfooter = () => {
  return (
    <div className='bcg_footer overflow-hidden'>
        <Container className=' pt-4'>
            <Row className=' d-flex justify-content-between pt-md-5'>
                <Col xs={6} md={4} lg={4} xl={2} className=' order-1  order-md-0'>
                    <ul className=' list_style txt_wrap'>
                        <li className=' ff_neue fs_15 fw_600 text-white text-uppercase list_style  txt_wrap mb-3'>how we help</li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative txt_wrap'>Drive More Awareness</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative txt_wrap'>Get more Customers</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative txt_wrap'>Build Your Brand</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative txt_wrap'>Improve your reputation</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative txt_wrap'>Track Results</a></li>
                    </ul>
                </Col>
                <Col xs={6} md={4} lg={4} xl={2} className=' txt_wrap order-2 order-md-1'>
                    <ul className=' list_style'>
                        <li className=' ff_neue fs_15 fw_600 mb-3 text-white text-uppercase list_style '>wh0 we help</li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Digital Advertising</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Search Engine Ranking</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Content Marketing</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Programic Advertising</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Email Marketing</a></li>
                    </ul>
                </Col>
                <Col xs={6} md={4} lg={4} xl={1} className=' txt_wrap order-3 order-md-2 pt-4 pt-md-0'>
                    <ul className=' list_style'>
                        <li className=' ff_neue fs_15 fw_600 mb-3 text-white text-uppercase list_style '>why venveo</li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>About Us</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Careers</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Growth Studies</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Testimonials</a></li>
                    </ul>
                </Col>
                <Col xs={6} md={4} lg={4} xl={1} className=' txt_wrap order-4 order-md-3 pt-4 pt-xl-0'>
                    <ul className=' list_style'>
                        <li className=' ff_neue fs_15 fw_600 mb-3 text-white text-uppercase list_style'>resources</li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Articles</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>News</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Webinars</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>eBooks</a></li>
                        <li><a href="" className=' ff_neue fs_15 fw_300 text-white list_style under_line position-relative'>Podcast</a></li>
                    </ul>
                </Col>
                <Col lg={5} md={8} xl={5} className='txt_wrap order-0 order-md-4 pb-4 pt-md-4 pt-xl-0 d-flex justify-content-lg-end justify-content-center'>
                    <div className=' d-flex flex-column'>
                    <div>
                        <p className=' ff_neue fs_30 fw_300 text-white'>Get weekly data — and insights.</p>
                    </div>
                    <div className=' d-flex justify-content-between my_form_2 px-3 py-1 '>
                         <input type="text" placeholder='Enter Your Website' />
                            <a href="" className=' mb-0 fs_14 fw_600 ff_neue bttn_analize list_style txt_clr_1'>Get Started</a>
                    </div>
                    </div>
                </Col>
            </Row>
                <Row className=' align-items-center pt-md-5 mt-4 pb-5'>
                <Col lg={4} md={6} className=' '>
                    <p className=' fs_12 fw_400 text-white ff_neue mb-0'>Venveo is an award-winning digital marketing <span className=' d-md-block'>solutions provider. Since 2003.</span><span className=' d-md-block'>©2023 Venveo</span></p>
                </Col>
                <Col xs={6} md={6} lg={2} className=' pt-4'>
                    <ul className=' list_style'>
                        <li className=' fs_12 fw_500 text-white ff_neue text-uppercase list_style'>Visit</li>
                        <li><a href="" className=' fs_12 fw_400 text-white ff_neue list_style under_line position-relative'>100 N Main Street</a></li>
                        <li><a href="" className=' fs_12 fw_400 text-white ff_neue list_style under_line position-relative'>#201 </a></li>
                        <li><a href="" className=' fs_12 fw_400 text-white ff_neue list_style under_line position-relative'>Blacksburg, VA 24060</a></li>
                    </ul>
                </Col>
                <Col xs={6} md={6} lg={2} className=' pt-4'>
                    <ul className='list_style'>
                        <li className=' fs_12 fw_500 text-white ff_neue text-uppercase list_style'>contact</li>
                        <li><a href="" className=' fs_12 fw_400 text-white ff_neue list_style under_line_1 position-relative'>info@venveo.com</a></li>
                        <li><a href="" className=' fs_12 fw_400 text-white ff_neue list_style under_line_1 position-relative'>1 · 800 · 123 · 4567</a></li>
                    </ul>
                </Col>
                <Col md={6} lg={4}>
                    <div className=' d-flex justify-content-center justify-content-lg-end flex-column align-items-lg-end align-items-center'>
                        <div className=' d-flex align-items-center gap-4'>
                        <p className=' ff_neue list_style fs_12 fw_400 text-white'>All Rights Reserved</p>
                        <p className=' ff_neue fs_12 fw_400 text-white'>Privacy Policy</p>
                        </div>
                      <div>
                        <Facebook/>
                        <Instagram/>
                        <Xx/>
                        <Linkdin/>
                        <You/>
                      </div>
                    </div>
                </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Myfooter