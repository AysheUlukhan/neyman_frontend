import React, { useEffect, useState } from 'react'
import { LuChevronRight } from "react-icons/lu";
import sectionshap from '../../assets/images/svg/section-shap.svg';
import './Portfolio.css';
import { portfolioData } from '../../components/Api/PortfolioData/portfolioData';
import rightoverlay from '../../assets/images/svg/arrow-overlay-icon.svg';

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(portfolioData);
    setCollection([...new Set(portfolioData.map((item) => item.title))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = portfolioData.filter((item) => item.title === itemData);
    setData(filterData);
  }
  return (
    <div className='container portfolio'>
      <div className='d-flex align-items-center py-5 portfolio-head'>
        <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
        <p>LAYİHƏLƏR</p>
      </div>
      <div className='pt-40'>
        <img src={sectionshap} alt='section shap' className="d-block mx-lg-auto img-fluid" />
      </div>
      <div className='d-flex align-items-center justify-content-between portfolio-content py-5'>
        <div className='portfolio-content-head'>
          <h5 className='fs-18'>İŞLƏRİMİZİ KƏŞF EDİN</h5>
          <h3 className='fs-48 fw-bold'>Ən Son Layihələr</h3>
        </div>
        <div>
          <ul className='d-flex column-gap-3'>
            <li><button onClick={() => setData(portfolioData)}>HAMISI</button></li>
            {
              collection.map((item) => <li><button onClick={() => { gallery_filter(item) }}>{item}</button></li>)
            }
          </ul>
        </div>
      </div>
      <div className='row row-gap-4'>
        {
          data.map((item) => (
            <div className='col-xl-6 col-md-6 col-sm-12'>
              <div className='wrapper'>
                <div className='image'>
                  <img src={item.image} className="d-block mx-lg-auto img-fluid portfolioImg" />
                  <div className='content'>
                    <img src={rightoverlay} />
                  </div>
                </div>
                <div className='py-3'>
                  <p>{item.title}</p>
                  <a href='#/'>{item.content}</a>
                </div>
              </div>
            </div>

          ))
        }

        <div className='col-xl-6 col-12'>

        </div>
      </div>
    </div>
  )
}

export default Portfolio