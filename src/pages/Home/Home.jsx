import React, { useState } from 'react';
import './Home.css';
import { accordionData } from '../../components/Api/AccordionData/accordionData';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import blogimg_1 from '../../assets/images/home-page-img/blog-img-1.png';
import blogimg_2 from '../../assets/images/home-page-img/blog-img-2.png';
import blogimg_3 from '../../assets/images/home-page-img/blog-img-3.png';
import heroimg_3 from '../../assets/images/home-page-img/hero-image-3.jpg';
import hero_img from '../../assets/images/logo/hero-logo.png'
import CommentSlider from '../../components/Commentcarousel/commentC';
import { servicesData } from '../../components/Api/ServicesData/servicesData';
import { NavLink } from 'react-router-dom';

import { TypeAnimation } from 'react-type-animation';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../variants';

const Home = () => {
  const [selected, setSelected] = useState(null);
  const toogle = i => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className='home'>
      <section className="container px-4 hero-section">
        <div className="row align-items-center justify-content-xl-between">
          <div className='col-lg-8'>
            <p className='fs-22'>İdeyanı Yaz, <NavLink to='/Contact' className='text-decoration-none border_style'>Qiymət Təklifi Al</NavLink></p>

            <h4 className='text-black hero-text pt-5'>
              <span>
                <TypeAnimation sequence={
                  [
                    'Sadə',
                    2000,
                    'Sərfəli',
                    2000,
                    'Sürətli',
                    2000
                  ]}
                  speed={50}
                  repeat={Infinity}

                />
              </span>
              <span className='text'>Proqram <br /> Təminatının </span>
              Həlləri <br /> Üzərində İşləyirik
            </h4>
          </div>
          {/* <div className='col-lg-4 hero-logo'>
                <img src={hero_img} alt="" />
          </div> */}
        </div>
      </section>

      <section className='benefit'>
        <div className="container px-4 py-5">
          <div className="row rounded-5">
            <div className="col-lg-6 ">
              <div className='benefit-head'>
                <p className=' mb-3 fs-40'>BİZİM FƏRQİMİZ</p>
                {/* <h4 className="lh-1 fs-40 fw-bold mb-4">Biznesiniz üçün gəlir artımının kilidini açın</h4> */}
              </div>
              <div className='wrapper'>
                <div className='accordion'>
                  {accordionData.map((item, i) => (
                    <div className='item' key={item.id}>
                      <div className='title d-flex gap-2 cursor-pointer mb-2' onClick={() => toogle(i)}>
                        <span>{selected === i ? <FaMinus className='fs-24' /> : <FaPlus className='fs-24' />}</span>
                        <h4 className='fs-24'>{item.title}</h4>
                      </div>
                      <div className={selected === i ? 'answer show' : 'answer'}>
                        <p className='fs-14 ms-4 mb-3'>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 hero-img">
              <div>
                <img src={heroimg_3} className="d-block mx-lg-auto img-fluid rounded-5 " alt="Bootstrap Themes" loading="lazy" />
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id='services' className='services py-5'>
        <div className='text-center '>
          <h4 className='fs-30 fw-bolder'>XİDMƏTLƏRİMİZ</h4>
        </div>
        <div className='container pt-4'>
          <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap text-black'>
            {
              servicesData.map((item) => (
                <NavLink className='text-decoration-none' key={item.id} to={`/ServicesDetail/${item.id}`}>
                  <p className='text-black' ><span className='fs-30 text-title'>{item.title} /</span></p>
                </NavLink>
              ))}
          </div>
        </div>
      </section> */}

      <section
      >
        <CommentSlider />
      </section>
      <section className='home-blog py-5'>
        <div className='container'>
          <div className='home-blog-head d-flex align-items-center justify-content-between'>
            <div className='text-black'>
              <p className='fs-18'>BLOQ</p>
              <h4 className='fs-35'>Ən Son Blogumuz Nədir</h4>
            </div>
            <div className='btn-home-blog'>
              <a href='#/'>DAHA ÇOX BAXIN<FiArrowUpRight className='fs-22' /></a>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | İNKİŞAF</p>
                  <h5 className='card-title'>Siz hələ də rəqəmsal alətlərdən istifadə etmirsiniz?</h5>
                </div>
                <img src={blogimg_1} alt='blog-img' className="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-22 right-btn' /></a>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | BİZNES</p>
                  <h5 className='card-title'>Onlayn biznes üçün rəqəmsal marketinq</h5>
                </div>
                <img src={blogimg_2} alt='blog-img' className="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-22 right-btn' /></a>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-md-none d-xl-block d-lg-block'>
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | DİZAYN</p>
                  <h5 className='card-title'>Çətinlikləri Fürsətlərə çevirin</h5>
                </div>
                <img src={blogimg_3} alt='blog-img' className="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-22 right-btn' /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <section className='home-slide-section'>
        <div className='slide'>
          <ul className='d-flex gap-40 fs-35 home-slide lh-sm fw-bold'>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
          </ul>
        </div>
        <div className='slider pt-20'>
          <ul className='d-flex gap-40 fs-35 home-slider lh-sm fw-bold'>
            <li><a href='#/'>Rəqəmsal Marketinq</a></li>
            <li><a href='#/'>İstifadəçi Təcrübəsi Dizaynı</a></li>
            <li><a href='#/'>Yaradıcı Dizayn</a></li>
            <li><a href='#/'>İnkişaf</a></li>
            <li><a href='#/'>Rəqəmsal Marketinq</a></li>
            <li><a href='#/'>İstifadəçi Təcrübəsi Dizaynı</a></li>

          </ul>
        </div>
        <hr />
      </section> */}
    </div>
  )
}

export default Home