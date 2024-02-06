import React from 'react'
import logo from '../../assets/images/logo/neymanlogo.png';
import { SiMaildotru } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className='single-box'>
                <img src={logo} alt='logo' className='d-block img-fluid object-fit-contain' />
                <p>Xüsusilə biznes saytları üçün nəzərdə tutulmuş Eidan mövzusu ilə şirkətinizin onlayn çiçəklənməsini təmin edin.</p>
              </div>
              <div className='fs-22 d-flex gap-30 pt-20 text-black '>
                <FaTwitter className='footer-icon' />
                <FaFacebookF className='footer-icon' />
                <FaLinkedinIn className='footer-icon' />
                <FaInstagram className='footer-icon' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mt-3'>
              <div className='single-box'>
                <h5 className='mb-3'>Faydalı Linklər</h5>
                <p className='mb-3'><NavLink>Layihələrimiz</NavLink></p>
                <p className='mb-3'><NavLink>Qiymətlər</NavLink></p>
                <p><NavLink>Faq</NavLink></p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mt-3'>
              <div className='single-box'>
                <h5 className='mb-3'>Əlaqələr</h5>
                <p className='mb-3'>Yalova , Termal yolu Akköy.</p>
                <p className='mb-3'><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></p>
                <p><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mt-3'>
              <div className='single-box'>
                <h5 className='mb-3'>Abunə ol</h5>
                <div className='position-relative d-flex align-items-center'>
                  <input type='email' placeholder='Xəbərlər və Yeniliklər alın' className='w-100 border border-0 border-bottom pb-3' />
                  <SiMaildotru className='position-absolute end-0 ' />

                </div>
                <p className='pt-2'>Bizim təcrübəmiz, eləcə də veb dizayna olan həvəsimiz bizi digər agentliklərdən fərqləndirir.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black py-2 footer-end'>
          <div className='container d-flex justify-content-between'>
            <div>
              <p>Sudan Digital Studio 2024 © Copyright by <a href='#/'>Delicate Themes</a></p>
            </div>
            <div>
              <a href='#/'>Terms of Use</a> | <a href='#/'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer