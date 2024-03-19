import React, { useEffect, useState } from 'react';
// import { servicesData } from '../Api/ServicesData/servicesData'
import { CgWebsite } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest'

const servicesCard = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${BASE_URL}en/services/`);
          setUserData(res.data)
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, [])

  return (
    <div className="container">
    <div className="row">
      {
        userData.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 services-card" key={item.id}>
            <div className="card py-4">
              <div className="card-body">
                <div className='mb-4 card-icon d-flex justify-content-center align-items-center'>
                  <CgWebsite className='fs-30 ' />
                </div>
                <p className="card-title mb-0 fw-semibold fs-20">{item.service_title}</p>
                <p className="card-text mb-0 py-3 fs-14">{item.description}</p>
                <NavLink to={`/ServicesDetail/${item.id}`} className='text-decoration-none fw-medium card-view d-flex align-items-center gap-2'>View Details <FaArrowRight /></NavLink>
              </div>
            </div>
          </div>
        ))
      }



    </div>
  </div>
  )
}

export default servicesCard








