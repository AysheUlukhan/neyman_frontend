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

  const handleServicesClick = () => {
    const currentPagePath = window.location.pathname;
    if (currentPagePath === '/') {
      const servicesSection = document.getElementById('services');
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/ServicesDetail/1';
    }
  };

  let date = new Date();

  return (
    <div>
      <footer>
        <div className="container pt-5">
          <hr />
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className='single-box'>
                <img src={logo} alt='logo' className='d-block img-fluid object-fit-contain' />
                <p>Xüsusilə biznes saytları üçün nəzərdə tutulmuş Eidan mövzusu ilə şirkətinizin onlayn çiçəklənməsini təmin edin.</p>
              </div>
              <div className='fs-22 d-flex gap-30 pt-20 text-black '>
                <a href="" className='footer-icon' target='_blank'><FaTwitter/></a>
                <a href="https://www.facebook.com/neymantech" className='footer-icon' target='_blank'><FaFacebookF/></a>
                <a href="https://www.linkedin.com/company/neyman-technologies/" className='footer-icon' target='_blank'><FaLinkedinIn/></a>
                <a href="https://www.instagram.com/neymanenterprise/" className='footer-icon' target='_blank'><FaInstagram/></a>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mt-3'>
              <div className='single-box'>
                <h5 className='mb-3'>Faydalı Linklər</h5>
                <p className='mb-2'><NavLink to='/'>Ana Səhifə</NavLink></p>
                <p className='mb-2'><NavLink to='/About'>Haqqımızda</NavLink></p>
                <p className='mb-2'><NavLink onClick={handleServicesClick}>Servislər</NavLink></p>
                <p className='mb-2'><NavLink to='/Portfolio'>Layihələrimiz</NavLink></p>
                <p className='mb-2'><NavLink to='/Blog'>Bloq</NavLink></p>
                <p className='mb-2'><NavLink to='/Contact'>Əlaqə</NavLink></p>

                <p><NavLink to='/Faq'>Faq</NavLink></p>
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
                <form action='' className='position-relative d-flex align-items-center'>
                  <input type='email' placeholder='Xəbərlər və Yeniliklər alın' className='w-100 border border-0 border-bottom pb-3' />
                  <button className='border-0 bg-transparent position-absolute end-0'> <SiMaildotru/></button>

                </form>
                <p className='pt-2'>Bizim təcrübəmiz, eləcə də veb dizayna olan həvəsimiz bizi digər agentliklərdən fərqləndirir.</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className='py-2 footer-end'>
          <div className='container'>
            <div>
              <p>COPYRIGHT © {date.getFullYear()} by NET LLC</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer