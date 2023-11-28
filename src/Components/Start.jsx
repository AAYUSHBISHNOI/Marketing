import React from 'react'
import vector from "../assets/img/Layer_1.png";
// import bcg from "../assets/img/Frame.png";
import { Container } from 'react-bootstrap';


const start = () => {
  return (
    <div className='mb-5 pb-5 mt-5 bcg_frame position-relative'>
        <Container className=' mt-lg-5'>
        <div className='pt-5 d-md-flex align-items-center justify-content-center gap-5 mb-5 mt-5'>
                <div className='me-lg-5 pt-5'>
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
        {/* <img className='img_geen w-100' src={bcg} alt="" /> */}

    </div>
  )
}

export default start