import React, { useEffect, useState } from 'react';
import './Home.css';
import { accordionData } from '../../components/Api/AccordionData/accordionData';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import heroimg_3 from '../../assets/images/home-page-img/hero-image-3.jpg';
import CommentSlider from '../../components/Commentcarousel/commentC';
// import { servicesData } from '../../components/Api/ServicesData/servicesData';
import { NavLink } from 'react-router-dom';
import { blogData } from '../../components/Api/BlogData/blogData';
import ServicesCard from '../../components/Servicescard/servicesCard';
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest'


import { TypeAnimation } from 'react-type-animation';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../variants';



// 
import { FaArrowRight } from "react-icons/fa6";



const Home = () => {
  const [selected, setSelected] = useState(null);
  const toogle = i => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/different_us/`);
        setUserData(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

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
            <p className='fs-22 pt-5'>İdeyanı Yaz, <NavLink to='/Contact' className='text-decoration-none border_style'>Qiymət Təklifi Al</NavLink></p>
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
                  {userData.map((item, i) => (
                    <div className='item' key={item.id}>
                      <div className='title d-flex gap-2 cursor-pointer mb-2' onClick={() => toogle(i)}>
                        <span>{selected === i ? <FaMinus className='fs-24' /> : <FaPlus className='fs-24' />}</span>
                        <h4 className='fs-24'>{item.title}</h4>
                      </div>
                      <div className={selected === i ? 'answer show' : 'answer'}>
                        <p className='fs-14 ms-4 mb-3'>{item.content}</p>
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

          <ServicesCard/>
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
              blogData.slice(0,3).map((item) => (

                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 cards' key={item.id}>
                  <div className="card">
                    <div className='blogImg'>

                      <img src={item.image} className="d-block mx-lg-auto img-fluid " />
                    </div>
                    <div className="card-body text-center">
                      <div className='py-2 fs-14'>
                        <span>{item.title} </span>| <span>{item.date}</span>
                      </div>
                      <h4 className='fs-24'>{item.content}</h4>
                      <NavLink className="text-decoration-none" key={item.id} to={`/BlogDetail/${item.id}`}>
                      <p className='read '>Ətraflı Oxu <span><FaArrowRight /></span></p>
                    </NavLink>
                    </div>
                  </div>
                </div>
              ))
            }


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