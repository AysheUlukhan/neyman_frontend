import React, { useEffect, useState } from 'react';
// import { servicesData } from '../../components/Api/ServicesData/servicesData'
import { NavLink, useParams } from 'react-router-dom'
import { LuChevronRight } from "react-icons/lu";
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest'

import './servicesDetail.css';
const servicesDetail = () => {


  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`${BASE_URL}en/services`);
  //       setUserData(res.data)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [])

  // const { id } = useParams();
  // let myDetailedServices = userData.find((item) => item.id === id)


  const [serviceDetail, setServiceDetail] = useState([]);
  const { id } = useParams();
  // let myDetailedServices = serviceDetail.find((item) => item.id === id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/services/`);
        setServiceDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);


  

  const [cardDetail, setCardDetail] = useState([])

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/service_cards/`);
        setCardDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCardData();
  }, [])



  return (
    <div className='servicesDetail'>
      <div className='container '>
        <div className='d-flex align-items-center py-5 servicesDetail-head'>
          <a href='/' className='d-flex align-items-center gap-1 text-decoration-none'>ANA SƏHİFƏ <LuChevronRight /></a>
          <p>SERVİSLƏR</p>
        </div>
        <div className="row g-lg-5 py-5">
          <div className="col-lg-8 col-12 col-sm-12">

            <article>
              <h2 className="fw-bold">{serviceDetail.service_title}</h2>
              <p className='pt-3'>{serviceDetail.description}</p>
              {cardDetail.map((item, index) => (
                <div key={index} className='mb-4 services-post'>
                  <h4>{item.service_card_title}</h4>
                  <p>{item.service_card_content}</p>
                </div>
              ))}



            </article>


          </div>

          <div className="col-lg-4 col-12 col-sm-12 servicesnav">


            <div className='border p-4'>
            {serviceDetail.map((item, index) => (
                <NavLink key={index} className='text-decoration-none fs-22' to={`/ServicesNavDetail/${item.id}`}>
                  <li className='border-bottom py-4'>{item.service_title}</li>
                </NavLink>
              ))}

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



