import React, { useState } from 'react';
import './Home.css';
import { accordionData } from '../../components/Api/AccordionData/accordionData';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import heroimg_3 from '../../assets/images/home-page-img/hero-image-3.jpg';
import CommentSlider from '../../components/Commentcarousel/commentC';
import { servicesData } from '../../components/Api/ServicesData/servicesData';
import { NavLink } from 'react-router-dom';
import { blogData } from '../../components/Api/BlogData/blogData';

import { TypeAnimation } from 'react-type-animation';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../variants';



import { CgWebsite } from "react-icons/cg";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";



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
            

            <h4 className='text-black hero-text '>
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
            {/* <p className='fs-22 pt-5'>İdeyanı Yaz, <NavLink to='/Contact' className='text-decoration-none border_style'>Qiymət Təklifi Al</NavLink></p> */}
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
                <p className=' mb-3 fs-36'>BİZİM FƏRQİMİZ</p>
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




      <section
        id='services' className='services py-5'>
        <div className='text-center pb-5'>
          <h4 className='fs-27 fw-bolder'>XİDMƏTLƏRİMİZ</h4>
        </div>
        {/* <div className='container pt-4'>
          <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap text-black'>
            {
              servicesData.map((item) => (
                <NavLink className='text-decoration-none' key={item.id} to={`/ServicesDetail/${item.id}`}>
                  <p className='text-black' ><span className='fs-30 text-title'>{item.title} /</span></p>
                </NavLink>
              ))}
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            {
              servicesData.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 services-card" key={item.id}>
                  <div className="card py-4">
                    <div className="card-body">
                      <div className='mb-4 card-icon d-flex justify-content-center align-items-center'>
                        <CgWebsite className='fs-30 ' />
                      </div>
                      <p className="card-title mb-0 fw-semibold fs-20">{item.title}</p>
                      <p className="card-text mb-0 py-3 fs-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      <NavLink to={`/ServicesDetail/${item.id}`} className='text-decoration-none fw-medium card-view d-flex align-items-center gap-2'>View Details <FaArrowRight /></NavLink>
                    </div>
                  </div>
                </div>
              ))
            }



          </div>
        </div>
      </section>
      <section className='home-blog py-5'>
        <div className='container'>
          <div className='home-blog-head d-flex align-items-center justify-content-between'>
            <div className='text-black'>
              <h4 className='fs-30'>Bloq</h4>
            </div>
            <div className='btn-home-blog'>
              <a href='/Blog'>DAHA ÇOX<FiArrowUpRight className='fs-22' /></a>
            </div>
          </div>
          <div className='row py-5'>
            {
              blogData.slice(0, 3).map((item) => (
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={item.id}>

                  <div className='blog-card'>
                    <div className='card-body border'>
                      {/* <p className='card-text'>20 dekabr 2022-ci il | İNKİŞAF</p> */}
                      <span className='card-text'>{item.title} |</span> <span className='card-text'>{item.date}</span>
                      <h5 className='card-title'>{item.content}</h5>
                      {/* <h5 className='card-title'>Siz hələ də rəqəmsal alətlərdən istifadə etmirsiniz?</h5> */}
                    </div>
                    <img src={item.image} alt='blog-img' className="d-block w-100 img-fluid" />
                    <div className='border blog-card-end'>
                      <NavLink key={item.id} to={`/BlogDetail/${item.id}`} href='/Blog' className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-18 right-btn' /></NavLink>
                    </div>
                  </div>
                </div>
              ))
            }

            {/* <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
              
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | BİZNES</p>
                  <h5 className='card-title'>Onlayn biznes üçün rəqəmsal marketinq</h5>
                </div>
                <img src={blogimg_2} alt='blog-img' className="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a href='/Blog' className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-18 right-btn' /></a>
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
                  <a href='/Blog' className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-18 right-btn' /></a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>
      <section>
        <CommentSlider />
      </section>
    </div>
  )
}

export default Home