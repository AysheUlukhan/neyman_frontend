import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import './Contact.css'

const Contact = () => {
  return (
    <div className='container contact'>
      <div className='contact-head pt-5'>
        <p className='fs-27'>Əlaqə</p>
      </div>
      
      <div className='row pt-5'>
        <div className='col-xl-6 col-lg-6 col-sm-12 col-12'>
          <p className='fs-18'>Bu gün işçilərin rifah ehtiyaclarını müzakirə etmək üçün əlaqə saxlayın. Zəhmət olmasa bizə zəng edin, e-poçt göndərin.</p>
          <div className='py-5'>
            <div>
              <h4 className='fs-24 fw-bold'>Ünvan</h4>
              <p className='fs-18'>Yalova , Termal yolu Akköy.</p>
            </div>
            <div className='py-4'>
              <h4 className='fs-24 fw-bold'>E-poçt</h4>
              <a href="mailto:info.neyman.e.t@gmail.com">info.neyman.e.t@gmail.com</a>
            </div>
            <div>
              <h4 className='fs-24 fw-bold'>Zəng edin</h4>
              <a href="tel:+994 50 631 07 22" className='d-block mb-1'>+994 50 631 07 22</a>
              <a href="tel:+90 552 153 23 28">+90 552 153 23 28</a>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-sm-12 col-12'>
          <div className='contact-form p-5 rounded-4'>
            <div className='pb-4'>
              <h4 className='fs-30 font-bold '></h4>
              {/* <p className='fs-18 font-medium'>E-poçt ünvanınız dərc olunmayacaq. Tələb olunan sahələr qeyd olunub *</p> */}
            </div>
            <form>
              <div className='pb-4'>
                <input type='text' placeholder='Adınız və Soyadınız*' className='w-100' />
              </div>

              <div className='pb-4'>
                <input type='email' placeholder='E-poçtunuz *' className='w-100' />
              </div>

              <div className='pb-4'>
                <input type='tel' placeholder='Əlaqə nönrənizi yazın *' className='w-100' />
              </div>

              <div className='pb-4'>
                  <textarea rows="3" placeholder='Necə bir vebsayt istəyirsiniz? *' className='w-100'/>
              </div>
            </form>
            <div>
              <button className='rounded-3'>GÖNDƏR <FiArrowUpRight className='fs-20'/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact