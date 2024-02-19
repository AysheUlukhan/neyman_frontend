import React from 'react'
import { servicesData } from '../../components/Api/ServicesData/servicesData'
import { NavLink, useParams } from 'react-router-dom'
import { LuChevronRight } from "react-icons/lu";
import './servicesDetail.css';
const servicesDetail = () => {
  const { id } = useParams();
  let myDetailedServices = servicesData.find((item) => item.id === id)
  return (
    <div className='servicesDetail'>
      <div className='container '>
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

              {/* <div className='border p-4 mt-5'>
                <p className='text-center fs-20 fw-medium'>Sifariş et</p>
                <form action="" className='mt-3'>
                  <input className='w-100 border p-2' type="text" placeholder='Ad və Soyad *' />
                  <input className='w-100 border p-2 mt-3' type="tel" placeholder='Əlaqə nömrəsi *' />
                  <input className='w-100 border p-2 mt-3' type="email" placeholder='E-poçt *' />
                  <textarea rows="5" className='mt-3 p-2 border w-100' placeholder='Mesaj'></textarea>
                  <button className='border bg-transparent px-3 py-1 mt-2'>Göndər</button>
                </form>
              </div> */}

            </div>


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

export default servicesDetail