import React from 'react'
import { servicesData } from '../../components/Api/ServicesData/servicesData'
import { NavLink, useParams } from 'react-router-dom'
import { LuChevronRight } from "react-icons/lu";
import './servicesDetail.css';
const servicesDetail = () => {
  const { id } = useParams();
  let myDetailedServices = servicesData.find((item) => item.id === id)
  return (
    <div className='container servicesDetail'>
      <div className='d-flex align-items-center py-5 servicesDetail-head'>
        <a href='/' className='d-flex align-items-center gap-1 text-decoration-none'>ANA SƏHİFƏ <LuChevronRight /></a>
        <p>SERVİSLƏR</p>
      </div>
      <div className="row g-lg-5 py-5">
        <div className="col-md-8 ">

          <article>
            <h2 className="fw-bold">{myDetailedServices.title}</h2>
            <p className='pt-3'>{myDetailedServices.info}</p>
            <p className='pt-3'>{myDetailedServices.text}</p>
            <div className='mb-4 services-post'>
              <h4>{myDetailedServices.name_1}</h4>
              <p>{myDetailedServices.content_1}</p>
            </div>
            <div className='mb-4 services-post'>
              <h4>{myDetailedServices.name_2}</h4>
              <p>{myDetailedServices.content_2}</p>
            </div>
            <div className='services-post'>
              <h4>{myDetailedServices.name_3}</h4>
              <p>{myDetailedServices.content_3}</p>
            </div>

          </article>


        </div>

        <div className="col-md-4 ">
          <div className="sticky-top">

            <div className='border p-4'>
              {
                servicesData.map((item) => (
                  <NavLink className='text-decoration-none fs-22' key={item.id} to={`/ServicesNavDetail/${item.id}`}>
                    <li className='border-bottom py-4'>{item.title}</li>
                  </NavLink>
                ))
              }
            </div>

            <div className='border p-4 mt-5'> 
              <p className='text-center fs-20 fw-medium'>Sifariş et</p>
              <form action="" className='mt-3'>
                <input className='w-100 border p-2' type="text" placeholder='Ad və Soyad *' />
                <input className='w-100 border p-2 mt-3' type="tel" placeholder='Əlaqə nömrəsi *' />
                <input className='w-100 border p-2 mt-3' type="email" placeholder='E-poçt *' />
                <textarea  rows="5" className='mt-3 p-2 border w-100' placeholder='Mesaj'></textarea>
                <button className='border bg-transparent px-3 py-1 mt-2'>Göndər</button>
              </form>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default servicesDetail