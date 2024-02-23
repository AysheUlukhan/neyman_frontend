import React, { useEffect, useState } from 'react'
import { LuChevronRight } from "react-icons/lu";
import './Portfolio.css';
// import { portfolioData } from '../../components/Api/PortfolioData/portfolioData';
import { servicesData } from '../../components/Api/ServicesData/servicesData';

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(servicesData);
    setCollection([...new Set(servicesData.map((item) => item.title))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = servicesData.filter((item) => item.title === itemData);
    setData(filterData);
  }
  return (
    <div className='portfolio'>
      <div className='container '>
        <div className='d-flex align-items-center py-5 portfolio-head'>
          <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
          <p>LAYİHƏLƏR</p>
        </div>
        <div className='d-flex align-items-center justify-content-between portfolio-content py-5'>
          <div className='portfolio-content-head'>
            <h5 className='fs-18'>İŞLƏRİMİZİ KƏŞF EDİN</h5>
            <h3 className='fs-36 fw-bolder'>Ən Son Layihələr</h3>
          </div>
          <div>
            {/* <ul className='d-flex column-gap-3'>
              <li><button onClick={() => setData(portfolioData)}>HAMISI</button></li>
              {
                collection.map((item) => <li><button onClick={() => { gallery_filter(item) }}>{item}</button></li>)
              }
            </ul> */}
            <div className="dropdown">
              <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sırala <i class="fa-solid fa-angle-down fs-18"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#/" onClick={() => setData(servicesData)}>Hamısı</a></li>
                {
                  collection.map((item) => <li><a className="dropdown-item" href="#/" onClick={() => { gallery_filter(item) }}>{item}</a></li>)
                }
              </ul>
              {/* <ul>
                <li className='drop'>
                  <a href="#/" className='text-decoration-none drop-sort'>Sırala</a>
                  <ul className='dropdown-menus'>
                    <li><a href="#/" className='text-decoration-none' onClick={() => setData(servicesData)}>Hamısı</a></li>
                    {
                      collection.map((item) => <li><a href="#/" className='text-decoration-none' onClick={() => { gallery_filter(item) }}>{item}</a></li>)
                    }
                  </ul>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className='row row-gap-4'>
          {
            data.map((item) => (
              <div className='col-xl-6 col-md-6 col-sm-12' key={item.id}>
                <div className='wrapper'>
                  <div className='image'>
                    <img src={item.image} className="d-block mx-lg-auto img-fluid portfolioImg" />
                    <div className='content'>
                      {/* <p className='fs-24'>{item.content}</p> */}
                      <a href="#/">Veb Sayta Keçid <i className="fa-solid fa-eye"></i></a>
                    </div>
                  </div>
                  <div className='py-3'>
                    <p>{item.title}</p>
                    <a href='#/' className='fs-24'>{item.content}</a>
                  </div>
                </div>
              </div>

            ))
          }

          <div className='col-xl-6 col-12'>

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
    </div>
  )
}

export default Portfolio