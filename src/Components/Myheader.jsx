import React from 'react'
import { Arrow, Close, Open, Search } from './Mysvg'
import { Container } from 'react-bootstrap'
import video from "../assets/video/myvideo.mp4";
import hero from "../assets/img/hero_squiggle.png";
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';



const Myheader = () => {
  const [show, setShow] = useState(false);
  if(show){
    document.body.classList.add("overflow-hidden")
  }else{
    document.body.classList.remove("overflow-hidden")
  }
  return (
    <div className=' bcg_header min-100 d-flex flex-column'>
      <nav>
        <div className=' d-flex justify-content-end'>
        <ul className={show ? "open": ""}>
            <Dropdown as={ButtonGroup} className=' ps-0 ps-xl-5 '>
              <Button variant="success">How We Help</Button>
               <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                 <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className=''>
              <Button variant="success">Who We Help</Button>
               <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                 <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className=''>
              <Button variant="success">Why Venveo</Button>
               <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                 <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li><a href="" className='fs_15 ff_neue fw_700 text-black list_style '>Resources</a></li>
            <li><a href=""><Search/></a></li>
            <button className='button_let py-4 ff_neue fs_15 text-black fw_600'>Let’s Talk <Arrow/></button>
          </ul>
          <button className='open d-xl-none navicon me-3' onClick={() => {setShow(!show); }}>{show ? <Close/>:<Open/>}</button>
        </div>
      </nav>
      <section className=' d-flex flex-grow-1  position-relative'>
        <Container>
          <div className='text-center pt-4 pt-md-0'>
            <h1 className='fw_700 text-white ff_sohne fs_120 text-uppercase position-relative'>Make marketing<span className=' d-lg-block'> a growth machine</span></h1>
            <img className='hero_img' src={hero} alt="" />
            <p className='font_22 ff_neue fw_300 text-white pt-3 pt-md-0'>We focus on results. Not just chatter. Elevate your business <span className='d-block'>with our top-tier services and tech. Get a proposal now.</span></p>
           <div className=' d-flex justify-content-center'>
            <div className=' d-flex justify-content-between my_form '>
              <input type="text" placeholder='Enter Your Website' />
              <a href="" className=' mb-0 fs_15 fw_600 ff_neue text-white bttn_analize list_style'>Analyze</a>
            </div>
           </div>
          </div>
          <div className='my_circle d-flex align-items-center text-center justify-content-center pstn_circle'>
            <p className='mb-0 ff_neue fs_15 fw_400 text-black'>MADE <span className='d-block txt_for'>for</span><span className='d-block'>BRANDS</span></p>
          </div>
          <div className=' d-flex justify-content-center'>
            <video className='pstn_video' autoPlay loop muted src={video}></video>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Myheader