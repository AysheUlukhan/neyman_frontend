import React, { useEffect, useState } from 'react'
import { LuChevronRight } from "react-icons/lu";
import './About.css'
import PartnerSlider from '../../components/PartnersSlider/partnerSlider';
import workflow_img from '../../assets/images/svg/workflow.svg'
import agile_img from '../../assets/images/svg/agile.svg'
import learn_img from '../../assets/images/svg/learn.svg'
import CommentSlider from '../../components/Commentcarousel/commentC';
import axios from 'axios';

const About = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://167.99.138.59/en/different_us/');
        setUserData(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  },[axios]);

  return (
    <div className='about'>
      <div className='container'>
        <div className='d-flex align-items-center py-5 about-head'>
          <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
          <p>HAQQIMIZDA</p>
        </div>
        <div className='row py-5 worth-section'>

          {
            userData.map((item) => {
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <h4 className="fw-bolder fs-27 mb-4">{item.Title}</h4>
                <p className="mb-3">2015-ci ildən bu günə qədər veb xidmətləri göstərən agentliyik. Təsis edildiyimiz gündən bu günə qədər uzunmüddətli investisiyalara, qısa müddət ərzində qazanc əldə etməyə üstünlük verdik. Ən böyük qazancımız, işimizə duyduğumuz hörmət hissi və vurğunluqdur…</p>
                <p>Və eyni hissləri bölüşən böyük ailəyə çevrildik. Hər il qazandığımız uğurlar bizi ruhlandırır və həvəsimizi daha da artırır. Ancaq ən böyük mükafat sizin tərif dolu sözləriniz və razılığınızdır.</p>
              </div>
            })
          }



          <div className='col-lg-6 col-md-12 col-sm-12 col-12 mt-2'>
            <h4 className='fs-27 fw-bolder pb-5'>Dəyərlərimiz</h4>
            <div className='d-flex align-items-center gap-40'>

              <div>
                <img src={workflow_img} alt="workflow" />
              </div>
              <div>
                <h4>Şəffaflıq</h4>
                <p>Bütün gündəlik işlərimiz izlənilir və müştərilərimiz
                  iş axını idarəetmə sistemimizin lövhəsi vasitəsilə tərəqqini birbaşa izləyə bilərlər.</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-40 my-5'>
              <div>
                <img src={agile_img} alt="agile" />
              </div>
              <div>
                <h4>Davamlı inkişaf</h4>
                <p>Davamlı Dynamics inkişaf prosesi hamar və çevikdir və məhsullarımız həmişə ən son və ən yaxşı texnoloji yığınla çıxır.</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-40'>
              <div>
                <img src={learn_img} alt="learn" />
              </div>
              <div>
                <h4>Müştərilər deyil, tərəfdaşlar</h4>
                <p>Hər kəsə eyni səy və keyfiyyət yönümlü xidmət göstərmək üçün ildə yalnız bir neçə layihə qəbul edirik. Buna görə də bizim əməkdaşlığımız ən azı 3 il davam edir.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='py-5 partners'>
          <h4 className='fw-bolder text-center fs-27 text-uppercase'>Partnyorlar</h4>
          <div className='row row-gap-3 pt-5'>
            <PartnerSlider />
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
      <section className='py-5'>
        <CommentSlider />
      </section>
    </div>
  )
}

export default About