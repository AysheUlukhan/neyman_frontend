import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import './About.css'
import { partners } from '../../components/Api/Partners/partners';

const About = () => {
  return (
    <>
      <div className='container about'>
        <div className='d-flex align-items-center py-5 about-head'>
          <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
          <p>HAQQIMIZDA</p>
        </div>
        <div className="row g-lg-5 row-gap-5 py-3 mt-3 about-content">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <h1 className="fw-bold lh-1 mb-4">Şirkət haqqında</h1>
            <p className="mb-3">2015-ci ildən bu günə qədər veb xidmətləri göstərən agentliyik. Təsis edildiyimiz gündən bu günə qədər uzunmüddətli investisiyalara, qısa müddət ərzində qazanc əldə etməyə üstünlük verdik. Ən böyük qazancımız, işimizə duyduğumuz hörmət hissi və vurğunluqdur…</p>
            <p>Və eyni hissləri bölüşən böyük ailəyə çevrildik. Hər il qazandığımız uğurlar bizi ruhlandırır və həvəsimizi daha da artırır. Ancaq ən böyük mükafat sizin tərif dolu sözləriniz və razılığınızdır.</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src="https://webline.az/wp-content/uploads/2023/06/about-us.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" />
          </div>
        </div>

        <div className='mt-5 partners'>
          <h4 className='text-center pb-5'>Partnyorlar</h4>
          <div className='row row-gap-3'>
            {
              partners.map((item) => (
                <div key={item.id} className='col-lg-2 col-sm-6 col-md-2  col-6'>
                  <img src={item.img} alt="partner" />
                </div>
              ))
            }
          </div>
        </div>

      </div>
        <div className='mt-5 form-offer'>
         <div className="container form-offer-content">
         <div className='row'>
            <div className='col-lg-6'>
              <h4 className='fs-30 fw-semibold'>Fikrinizi qısaca izah edərək vebsayt qiymətinin hesablanması üçün sürətli sorğu göndərin</h4>
            </div>
            <div className='col-lg-6'>
              <form action="">
                <textarea name="" id="" placeholder='Necə bir vebsayt istəyirsiniz?' className='w-100 border' rows="2"></textarea>
                <div className='row mt-3 form-controls'>
                  <div className='col-lg-6'>
                    <input type="text" name="" id="" className='w-100 border' placeholder='Adınız və Soyadınız' />
                  </div>
                  <div className='col-lg-6'>
                    <input type="tel" name="" id="" className='w-100 border' placeholder='Əlaqə nömrəniz' />
                  </div>
                </div>
                <div className='row mt-3 form-controls'>
                  <div className='col-lg-6'>
                    <input type="text" name="" id="" className='w-100 border' placeholder='Təmsil etdiyiniz şirkət' />
                  </div>
                  <div className='col-lg-6'>
                    <button className='w-100'>Qitmət təklifi al</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
         </div>
        </div>
    </>
  )
}

export default About