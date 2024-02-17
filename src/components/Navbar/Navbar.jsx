import React from 'react';
import logo from '../../assets/images/logo/neymanlogo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-scroll'
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


const Navbar = () => {
  return (
    <nav className='shadow-lg'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <NavLink to='/'><img src={logo} className='logo' alt='logo' /></NavLink>
          </div>
          <div className='d-none d-lg-block d-xl-block d-xxl-block mt-3'>
            <ul className='d-flex align-items-center gap-64'>
              <li>
                <NavLink to='/About' className='nav-link fw-semibold '>Haqqımızda</NavLink>
              </li>
              <li>
                <Link activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={700} className='fw-semibold nav-link'>Servislər</Link>
              </li>
              <li>
                <NavLink to='/Portfolio' className='nav-link fw-semibold '>Layihələr</NavLink>
              </li>
              <li>
                <NavLink to='/Blog' className='nav-link fw-semibold '>Bloq</NavLink>
              </li>
              <li>
                <NavLink to='/Contact' className='nav-link fw-semibold '>Əlaqə</NavLink>
              </li>
              <GrLanguage className='me-2 fs-20 cursor-pointer' />
            </ul>
          </div>
          <div>
            <HiMenuAlt1 className='fs-30 cursor-pointer' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                <AiOutlineClose className='fs-30 cursor-pointer' data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <div className='d-xl-none d-xxl-none d-lg-none d-sm-block d-md-block '>
                  <ul>
                    <li className='h-60'>
                      <NavLink to='/' className='nav-link'>Ana Səhifə</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink to='/About' className='nav-link'>Haqqımızda</NavLink>
                    </li>
                    <li className='h-60'>
                      <NavLink to='/Services' className='nav-link'>Services</NavLink>
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
                    <p className='fs-18'>Yalova , Termal yolu Akköy.</p>
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
                      <a href='#/'><FaFacebookF className='fs-22 text-black' /></a>
                    </div>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='#/'><FaTwitter className='fs-22 text-black' /></a>
                    </div>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='#/'><FaInstagram className='fs-22 text-black' /></a>
                    </div>
                    <div className='border border-black rounded-pill p-15 p-sm-10 p-xs-10'>
                      <a href='#/'><FaLinkedinIn className='fs-22 text-black' /></a>
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