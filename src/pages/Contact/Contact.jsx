import React from 'react'
import contact_hero from '../../assets/images/contact-page/contact_hero_bg.png';
import sectionshap from '../../assets/images/svg/section-shap.svg';
import { FiArrowUpRight } from "react-icons/fi";
import './Contact.css'

const Contact = () => {
  return (
    <div className='container contact'>
      <div className='contact-head pt-5'>
        <p className='fs-18'>ƏLAQƏ</p>
        <h4 className='fs-48 pt-3'>Biz həmişə yeni istedadlı insanların axtarışındayıq. Komandamıza qoşulun.</h4>
        <img src={contact_hero} alt='contact' className="d-block img-fluid py-5" />
      </div>
      <div >
        <img src={sectionshap} alt='section shap' className="d-block mx-lg-auto img-fluid" />
      </div>
      <div className='row pt-5'>
        <div className='col-xl-6'>
          <h4 className='fs-36'>Gəlin Birgə İşləməyə Başlayaq. Bizimlə əlaqə saxlayın!</h4>
          <p className='fs-18'>Bu gün işçilərin rifah ehtiyaclarını müzakirə etmək üçün əlaqə saxlayın. Zəhmət olmasa bizə zəng edin, e-poçt göndərin.</p>
          <div className='py-5'>
            <div>
              <h4 className='fs-24 fw-bold'>Ünvan</h4>
              <p className='fs-18'>Yalova , Termal yolu Akköy.</p>
            </div>
            <div className='py-4'>
              <h4 className='fs-24 fw-bold'>E-poçt</h4>
              <p className='fs-18'>info.neyman.e.t@gmail.com</p>
            </div>
            <div>
              <h4 className='fs-24 fw-bold'>Zəng edin</h4>
              <p className='fs-18'>+994 50 631 07 22</p>
            </div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='contact-form p-5'>
            <div className='pb-4'>
              <h4 className='fs-36 font-bold '>Bizə bir xətt buraxın</h4>
              <p className='fs-18 font-medium'>E-poçt ünvanınız dərc olunmayacaq. Tələb olunan sahələr qeyd olunub *</p>
            </div>
            <form>
              <div className='pb-4'>
                <input type='text' placeholder='Adınız *' className='w-100 fs-18' />
              </div>

              <div className='pb-4'>
                <input type='email' placeholder='E-poçtunuz *' className='w-100 fs-18' />
              </div>

              <div className='pb-4'>
                  <textarea rows="4" placeholder='Sənin mesajın *' className='w-100 fs-18'/>
              </div>
            </form>
            <div>
              <button>GÖNDƏR <FiArrowUpRight/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact