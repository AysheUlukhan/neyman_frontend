import React, { useState } from 'react';
import './Home.css';
import heroimg from '../../assets/images/home-hero/hader-shap-1.png';
import sectionshap from '../../assets/images/svg/section-shap.svg';
import ourbenefits from '../../assets/images/home-page-img/our-benefits-img-shap.png';
import { accordionData } from '../../components/Api/AccordionData/accordionData';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import blogimg_1 from '../../assets/images/home-page-img/blog-img-1.png';
import blogimg_2 from '../../assets/images/home-page-img/blog-img-2.png';
import blogimg_3 from '../../assets/images/home-page-img/blog-img-3.png';
import CommentSlider from '../../components/Commentcarousel/commentC'



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
      <section className="container px-4 py-5">
        <div className="row align-items-center justify-content-xl-between gap-16 py-5">
          <div className="col-12 col-sm-12 col-xl-4 col-md-4 col-lg-4">
            <img src={heroimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
          </div>
          <div className="col-xl-6 col-md-7 col-lg-7">
            <p className=" fw-medium fs-18 text">Our goal is to make it as easy as possible for you to walk away with the solution that suits your needs.</p>
          </div>
          <div className='text-center'>
            <h4 className='fs-96 text-black md-fs-48 hero-text'>We Work On <br className='d-none d-xl-block d-xxl-block' /> Delivering Unique <br className='d-none d-xl-block d-xxl-block' /> Visual Solutions</h4>
          </div>
          <div className="col-xl-6 col-md-7 col-lg-7">
            <p className=" fw-medium fs-18 text ">Our goal is to make it as easy as possible for you to walk away with the solution that suits your needs.</p>
          </div>
          <div className="col-12 col-sm-12 col-xl-4 col-md-4 col-lg-4">

            <img src={heroimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />

          </div>
        </div>
      </section>

      <section className='container'>
        <img src={sectionshap} class="d-block mx-lg-auto img-fluid" />
      </section>
      <section className='benefit'>
        <div className="container px-4 py-5">
          <div className="row g-5 py-5">
            <div className="col-lg-6">
              <div className='benefit-head'>
                <p className='fs-18 mb-3'>FAYDALARIMIZ</p>
                <h4 className="lh-1 fs-48 mb-3">Biznesiniz üçün gəlir artımının kilidini açın</h4>
              </div>
              <div className='wrapper'>
                <div className='accordion'>
                  {accordionData.map((item, i)  => (
                    <div className='item' key={item.id}>
                      <div className='title d-flex align-items-center gap-2' onClick={() => toogle(i)}>
                        <span>{selected === i ? <FaMinus className='fs-22' /> : <FaPlus className='fs-22' />}</span>
                        <h4>{item.title}</h4>
                      </div>
                      <div className={selected === i ? 'answer show' : 'answer'}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="col-sm-12 col-lg-6">
              <img src={ourbenefits} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
            </div>

          </div>
        </div>
      </section>
      <section className=''>
        <img src={sectionshap} class="d-block mx-lg-auto img-fluid" />
      </section>

      <section id='services' className='services'>
        <div className='text-center py-5'>
          <h4 className='fs-18'>SİZİN ÜÇÜN TƏKLİF EDİRİK</h4>
        </div>
        <div className='container'>
          <div className=' d-flex justify-content-center align-items-center gap-3 flex-wrap fs-48 text-black'>
            <a href='#/' className='text-decoration-none text-black' ><h4 className='fs-48'>Rəqəmsal Marketinq</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>İstifadəçi təcrübəsi</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>İnkişaf</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>Brendləşmə</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>Mobil Proqram</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>İllüstrasiyalar</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>Proqram Dizaynı</h4></a> /
            <a href='#/' className='text-decoration-none text-black'><h4 className='fs-48'>Şəkil</h4></a>
          </div>
        </div>
      </section>
      <section className='container'>
        <img src={sectionshap} class="d-block mx-lg-auto img-fluid" />
      </section>
      <section>
        <CommentSlider />
      </section>
      <section className='container'>
        <img src={sectionshap} class="d-block mx-lg-auto img-fluid" />
      </section>
      <section className='home-blog'>
        <div className='container py-5'>
          <div className='home-blog-head d-flex align-items-center justify-content-between'>
            <div className='text-black'>
              <p className='fs-18'>BLOQ</p>
              <h3 className='fs-48'>Ən Son Blogumuz Nədir</h3>
            </div>
            <div>
              <a href='#/' className='btn-home-blog'>DAHA ÇOX BAXIN<FiArrowUpRight className='fs-22' /></a>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | İNKİŞAF</p>
                  <h3 className='card-title '>Siz hələ də rəqəmsal alətlərdən istifadə etmirsiniz?</h3>
                </div>
                <img src={blogimg_1} alt='blog-img' class="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-22 right-btn' /></a>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | BİZNES</p>
                  <h3 className='card-title'>Onlayn biznes üçün rəqəmsal marketinq</h3>
                </div>
                <img src={blogimg_2} alt='blog-img' class="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-22 right-btn' /></a>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-md-none d-xl-block d-lg-block'>
              <div className='blog-card'>
                <div className='card-body border p-30'>
                  <p className='card-text'>20 dekabr 2022-ci il | DİZAYN</p>
                  <h3 className='card-title'>Çətinlikləri Fürsətlərə çevirin</h3>
                </div>
                <img src={blogimg_3} alt='blog-img' class="d-block w-100 img-fluid" />
                <div className='p-30 border blog-card-end'>
                  <a className='d-flex align-items-center gap-2 text-decoration-none'>DAHA ÇOX OXU <FiArrowUpRight className='fs-22 right-btn' /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='home-slide-section'>
        <div className='slide'>
          <ul className='d-flex gap-40 fs-48 home-slide lh-sm fw-bold'>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
          </ul>
        </div>
        <div className='slider pt-20'>
          <ul className='d-flex gap-40 fs-48 home-slider lh-sm fw-bold'>
            <li><a href='#/'>Rəqəmsal Marketinq</a></li>
            <li><a href='#/'>İstifadəçi Təcrübəsi Dizaynı</a></li>
            <li><a href='#/'>Yaradıcı Dizayn</a></li>
            <li><a href='#/'>İnkişaf</a></li>
            <li><a href='#/'>Rəqəmsal Marketinq</a></li>
            <li><a href='#/'>İstifadəçi Təcrübəsi Dizaynı</a></li>
            {/* <li><a href='#/'>Yaradıcı Dizayn</a></li>
            <li><a href='#/'>İnkişaf</a></li> */}
          </ul>
        </div>
        <hr/>
      </section>
    </div>
  )
}

export default Home