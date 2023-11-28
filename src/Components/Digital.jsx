import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bttnarow, Cardvector, Cardvectorfour, Cardvectorthree, Cardvectortwo } from './Mysvg'
import green_line from "../assets/img/greenline.png";

const Digital = () => {
  return (
    <div className='mt-5 pt-lg-5 mb-xl-5 pb-xl-5 position-relative overflow-hidden'>
        <img className=' w-100 img_pstn_3' src={green_line} alt="" />
        <Container className='' data-aos="fade-up-right">
            <div className='text-center'>
                <p className='fs_30 fw_300 ff_neue text-black mb-0'>Problems we solve.</p>
                <h2 className='fs_80 fw_700 text-black text-uppercase ff_sohne'>Digital Marketing <span className='d-lg-block'>for today’s Business</span></h2>
                <p  className='fs_15 fw_400 ff_neue text-black mb-0'>We help companies scale their strategies across multiple channels <span className='d-md-block'>to drive more revenue, more quickly, without cutting corners.</span></p>
            </div>
            <Row className=' d-flex justify-content-center mt-5'>
                <Col md={6} lg={6} className=' mt-4 d-flex justify-content-center' data-aos="fade-up-left" >
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
                <Col md={6} lg={6}  className=' mt-5 mt-md-4 d-flex justify-content-center' data-aos="fade-down-right">
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
                <Col md={6} lg={6}  className=' mt-5 d-flex justify-content-center' data-aos="fade-down-left">
                    <div className='card_digital'>
                        <div className='d-md-flex gap-4'>
                            <div>
                                <Cardvectorthree/>
                            </div>
                            <div className=' mt-3 mt-md-0'>
                                <p className='fs_30 fw_300 ff_neue text-black mb-0'>My website isn’t <span className='d-lg-block'>getting enough </span> <span className=' d-lg-block'>leads</span></p>
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
                <Col md={6} lg={6}  className=' mt-5 d-flex justify-content-center' data-aos="fade-up">
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

        </Container>
    </div>
  )
}

export default Digital