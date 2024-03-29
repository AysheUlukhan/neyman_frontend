import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo/neymanlogo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from 'react-icons/hi'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md"
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest'

const Navbar = () => {

  const handleServicesClick = () => {
    const currentPagePath = window.location.pathname;
    if (currentPagePath === '/') {
      const servicesSection = document.getElementById('services');
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/ServicesDetail/veb-sayt-jud5';
    }
  };

  const [open, setOpen] = useState(false);
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/contact_info`);
        setInfoData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <nav className=' sticky-top'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <NavLink to='/'><img src={logo} className='logo' alt='logo' /></NavLink>
          </div>
          <div className='d-none d-xl-block d-xxl-block mt-3'>
            <ul className='d-flex align-items-center gap-64 nav-lg'>
              <li>
                <NavLink to='/About' className='nav-link fw-semibold '>Haqqımızda</NavLink>
              </li>
              <li><NavLink className='fw-semibold nav-link' onClick={handleServicesClick}>Servisler</NavLink></li>
              <li>
                <NavLink to='/Portfolio' className='nav-link fw-semibold '>Layihələr</NavLink>
              </li>
              <li>
                <NavLink to='/Blog' className='nav-link fw-semibold '>Bloq</NavLink>
              </li>
              <li>
                <NavLink to='/Contact' className='nav-link fw-semibold '>Əlaqə</NavLink>
              </li>

              <div className='lang'>
                <GrLanguage onClick={() => setOpen(!open)} className='me-2 fs-20 cursor-pointer nav-language' />
                {
                  open && (
                    <div className='nav-drop-language'>
                      <p onClick={() => setOpen(false)}>AZ</p>
                      <p onClick={() => setOpen(false)}>EN</p>
                      <p onClick={() => setOpen(false)}>TR</p>
                      <p onClick={() => setOpen(false)}>RU</p>
                    </div>

                  )
                }


              </div>

            </ul>
          </div>
          <div>
            <div className='d-flex'>
              {/* <ul className='d-inline-block d-lg-none d-xxl-none d-xl-none'>
                <li className='nav-language'><GrLanguage className='me-2 fs-20 cursor-pointer' />
                  <ul className='nav-drop-language'>
                    <li>Az</li>
                    <li>En</li>
                    <li>Tr</li>
                  </ul>
                </li>
              </ul> */}

              <div className='lang d-inline-block d-lg-none d-xxl-none d-xl-none'>
                <GrLanguage onClick={() => setOpen(!open)} className='me-2 fs-20 cursor-pointer nav-language' />
                {
                  open && (
                    <div className='nav-drop-language'>
                      <p onClick={() => setOpen(false)}>AZ</p>
                      <p onClick={() => setOpen(false)}>EN</p>
                      <p onClick={() => setOpen(false)}>TR</p>
                    </div>

                  )
                }

              </div>

              {/* <GrLanguage className='me-2 fs-20 cursor-pointer d-d-inline-block d-lg-none d-xxl-none d-xl-none' /> */}
              <HiMenuAlt1 className='fs-30 cursor-pointer' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                <AiOutlineClose className='fs-30 cursor-pointer' data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <div className='d-xl-none d-xxl-none d-lg-none d-sm-block d-md-block res-nav'>
                  <ul>
                    <li className='h-60'>
                      <NavLink to='/' className='nav-link'>Ana Səhifə</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink to='/About' className='nav-link'>Haqqımızda</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink onClick={handleServicesClick} className='nav-link'>Services</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink to='/Portfolio' className='nav-link'>Layihələr</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink to='/Blog' className='nav-link'>Bloq</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink to='/Contact' className='nav-link'>Əlaqə</NavLink>
                    </li>
                  </ul>
                </div>
                <div className='pt-20'>
                  <img src={logo} className='h-150 d-none d-xl-block d-xxl-block d-lg-block' />
                  <div className='d-flex align-items-center gap-16 pt-20'>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <FaMapLocationDot className='fs-30' />
                    </div>
                    
                      <p className='fs-18'>{infoData.location_name}</p>
                    
                  </div>
                  <div className='d-flex align-items-center gap-16 pt-20'>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <MdOutlinePhoneIphone className='fs-30' />
                    </div>
                    <p className='fs-18'>+994 50 631 07 22</p>
                  </div>
                  <div className='d-flex align-items-center gap-16 pt-20'>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <MdOutlineMail className='fs-30' />
                    </div>
                    <p className='fs-18'>info.neyman.e.t@gmail.com</p>
                  </div>

                  <div className='d-flex justify-content-between gap-sm-3 gap-xs-3 pt-50'>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='https://www.facebook.com/neymantech' target='_blank'><FaFacebookF className='fs-22 text-black' /></a>
                    </div>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='#/' target='_blank'><FaTwitter className='fs-22 text-black' /></a>
                    </div>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='https://www.instagram.com/neymanenterprise/' target='_blank'><FaInstagram className='fs-22 text-black' /></a>
                    </div>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='https://www.linkedin.com/company/neyman-technologies/' target='_blank'><FaLinkedinIn className='fs-22 text-black' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar