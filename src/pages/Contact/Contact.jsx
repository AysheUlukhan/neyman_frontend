import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import './Contact.css'
import { LuChevronRight } from "react-icons/lu";
import contact_photo from '../../assets/images/contact-page/contact-photo.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='d-flex align-items-center py-5 contact-head'>
          <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
          <p>ƏLAQƏ</p>
        </div>

        <div className='row pt-5 align-items-center '>

          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 contactImg'>
            <div className='img'>
              <img src={contact_photo} alt="contact" className="d-block mx-lg-auto img-fluid" />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
            <div className='contact-address'>
              <h4 className='fs-36 fw-medium'>İndi əlaqə saxlayın</h4>
              <div className='d-flex align-items-center gap-3 mt-4'>
                <div className='contact-icon'>
                  <i className="fa-brands fa-facebook-f fs-20"></i>
                </div>
                <div>
                  <span>Zəng edin</span>
                  <a href="tel:+994 50 631 07 22" className='d-block mb-1 fw-semibold'>+994 50 631 07 22</a>
                  <a href="tel:+90 552 153 23 28" className='fw-semibold'>+90 552 153 23 28</a>
                </div>
              </div>

              <div className='d-flex align-items-center gap-3 mt-3'>
                <div className='contact-icon'>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <span>E-poçt</span>
                  <a href="mailto:info.neyman.e.t@gmail.com" className='d-block'>info.neyman.e.t@gmail.com</a>
                </div>
              </div>

              <div className='d-flex align-items-center gap-3 mt-3'>
                <div className='contact-icon'>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <span>Ünvan</span>
                  <p className='fs-18'>Yalova , Termal yolu Akköy.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <hr className='mt-5' />
        <div className='d-flex justify-content-end align-items-center gap-4'>
          <div>
            <p>Sosial Mediya</p>
          </div>
          <div className='d-flex sosial-icons'>
            <div className='contact-sosial-icons fa'>
              <a href='#/'><i className="fa-brands fa-facebook-f fs-20"></i></a>
            </div>
            <div className='contact-sosial-icons'>
              <a href='#/'><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className='contact-sosial-icons'>
              <a href='#/'><i className="fa-brands fa-instagram fs-19"></i></a>
            </div>
            <div className='contact-sosial-icons'>
              <a href='#/'><i className="fa-brands fa-linkedin-in fs-19"></i></a>
            </div>
          </div>

        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.100097008575!2d29.18809947553861!3d40.62767444277458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caf0e49c2b0395%3A0x65f51a35b7ef91f!2zQWtrw7Z5IEvDtnnDvCBZb2x1LCA3NzIwMiBBa2vDtnkvVGVybWFsL1lhbG92YSwgVMO8cmtpecmZ!5e0!3m2!1saz!2saz!4v1708635578081!5m2!1saz!2saz" className='w-100 mt-5' height="500" loading="lazy" ></iframe>
    </div>
  )
}

export default Contact