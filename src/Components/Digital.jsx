import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bttnarow, Cardvector, Cardvectorfour, Cardvectorthree, Cardvectortwo } from './Mysvg'
import bcg from "../assets/img/Frame.png";
import green_line from "../assets/img/greenline.png";
import vector from "../assets/img/Layer_1.png";

const Digital = () => {
  return (
    <div className='mt-5 pt-lg-5 position-relative overflow-hidden'>
        <img className=' w-100 img_pstn_3' src={green_line} alt="" />
        <Container className='' data-aos="fade-up-right">
            <div className='text-center'>
                <p className='fs_30 fw_300 ff_neue text-black mb-0'>Problems we solve.</p>
                <h2 className='fs_80 fw_700 text-black text-uppercase ff_sohne'>Digital Marketing <span className='d-lg-block'>for today’s Business</span></h2>
                <p  className='fs_15 fw_400 ff_neue text-black mb-0'>We help companies scale their strategies across multiple channels <span className='d-md-block'>to drive more revenue, more quickly, without cutting corners.</span></p>
            </div>
            <Row className=' justify-content-evenly mb-5 mb-md-0 pb-3'>
                <Col md={6} lg={5} className=' mt-4' data-aos="fade-up-left" >
                    <div className='card_digital'>
                        <div className='d-md-flex gap-4'>
                            <div>
                                <Cardvector/>
                            </div>
                            <div className=' mt-3 mt-md-0'>
                                <p className='fs_30 fw_300 ff_neue text-black mb-0'>My website isn’t <span className='d-lg-block'>getting enough traffic</span></p>
                                <p className='fs_15 fw_500 ff_neue text-black pt-2'>Without consistent site traffic, <span className='d-lg-block'>you’re missing out on valuable</span><span className='d-lg-block'>visitors, leads, and revenue.</span><span className='d-lg-block'> Thankfully, custom SEO solutions</span><span className='d-lg-block'> can get you back on track by</span><span className='d-lg-block'> boosting your presence in search</span><span className='d-lg-block'> engine results, so more people</span><span className='d-lg-block'> can find and visit your site.</span></p>
                                <ul className=' ms-4'>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Boost your presence in search results</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Capture targeted site traffic</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Turn site visitors into customers</li>
                                </ul>
                                <button className='bttn_learn fs_15 fw_600 ff_neue text-black mb-0 mt-4'><span className='me-2'>Explore SEO Services</span><Bttnarow/></button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={5}  className=' mt-3 mt-md-4' data-aos="fade-down-right">
                    <div className='card_digital'>
                        <div className='d-md-flex gap-3'>
                            <div>
                                <Cardvectortwo/>
                            </div>
                            <div className=' mt-3 mt-md-0'>
                                <p className='fs_30 fw_300 ff_neue text-black mb-0'>My CPL from digital ad <span className='d-block'>you’re missing out on valuable</span></p>
                                <p className='fs_15 fw_500 ff_neue text-black pt-2'>Without consistent site traffic, <span className='d-lg-block'>you’re missing out on valuable</span><span className='d-lg-block'>visitors, leads, and revenue.</span><span className='d-lg-block'> Thankfully, custom SEO solutions</span><span className='d-lg-block'> can get you back on track by</span><span className='d-lg-block'> boosting your presence in search</span><span className='d-lg-block'> engine results, so more people</span><span className='d-lg-block'> can find and visit your site.</span></p>
                                <ul className=' ms-4'>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Refine ad targeting</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Engage your audience where they browse online</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Maximize paid ad budget</li>
                                </ul>
                                <button className='bttn_learn fs_15 fw_600 ff_neue text-black mb-0'><span className='me-2'>Explore SEO Services</span><Bttnarow/></button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={5}  className=' mt-3' data-aos="fade-down-left">
                    <div className='card_digital'>
                        <div className='d-md-flex gap-4'>
                            <div>
                                <Cardvectorthree/>
                            </div>
                            <div className=' mt-3 mt-md-0'>
                                <p className='fs_30 fw_300 ff_neue text-black mb-0'>My website isn’t <span className='d-lg-block'>getting enough leads</span></p>
                                <p className='fs_15 fw_500 ff_neue text-black pt-2'>Struggling to get qualified <span className='d-lg-block'>leads in your pipeline? Turn up</span><span className='d-lg-block'> the dial on your lead generation</span><span className='d-lg-block'> with digital marketing plans,</span><span className='d-lg-block'> tailored to your goals and</span><span className='d-lg-block'> budget.</span></p>
                                <ul className=' ms-4'>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Fill up your lead pipeline</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Reach your most valuable audience</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Maximize conversion opportunities</li>
                                </ul>
                                <button className='bttn_learn fs_15 fw_600 ff_neue text-black mb-0'><span className='me-2'>Explore SEO Services</span><Bttnarow/></button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={5}  className=' mt-3' data-aos="fade-up">
                    <div className='card_digital mb-xl-5'>
                        <div className='d-md-flex gap-4'>
                            <div>
                                <Cardvectorfour/>
                            </div>
                            <div className=' mt-3 mt-md-0'>
                                <p className='fs_30 fw_300 ff_neue text-black mb-0'>My marketing and sales<span className='d-lg-block'> data is disconnected</span></p>
                                <p className='fs_15 fw_500 ff_neue text-black pt-2'>Don’t let leads slip through the and <span className='d-lg-block'> cracks. Unify your sales</span><span className='d-lg-block'>marketing efforts with Nutshell</span><span className='d-lg-block'> and MarketingCloudFX, to provide</span><span className='d-lg-block'> end-to-end reporting and</span><span className='d-lg-block'> analysis of your data.</span></p>
                                <ul className=' ms-4'>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Unify sales and marketing data</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Prioritize leads with data-backed insights</li>
                                    <li className='fs_15 fw_600 ff_neue text-black mb-0'>Turn opportunities into closed deals</li>
                                </ul>
                                <button className='bttn_learn fs_15 fw_600 ff_neue text-black mb-0'><span className='me-2'>Explore SEO Services</span><Bttnarow/></button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='padding_text d-md-flex align-items-center gap-5 mb-5'>
                <div className='me-lg-5'>
                    <p className=' ff_neue fs_15 fw_400 text-black mb-0'>Get Your Custom Marketing Plan</p>
                    <p className=' ff_neue font_40 fw_300 text-black mb-2'>Start earning more money now</p>
                </div>
                    <div className=' d-flex justify-content-between my_form_1 ms-lg-5'>
                        <input className=' my_input' type="text" placeholder='Enter Your Website' />
                        <a href="" className=' mb-0 fs_15 fw_600 ff_neue text-black bttn_analize list_style'>Submit</a>
                    </div>
                    <img className=' img_pstn_4 d-none d-md-block' src={vector} alt="" />
            </div>
        </Container>
        <img className='img_green w-100' src={bcg} alt="" />
    </div>
  )
}

export default Digital