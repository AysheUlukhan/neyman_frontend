import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
// import { commentData } from '../Api/CommentData/commentData'
import SwiperButton from './SwiperNavButton/SwiperButton';
import './commentC.css'
import { BiSolidQuoteLeft } from "react-icons/bi";
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest'

const commentC = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${BASE_URL}en/costumer_reviews/`);
          setUserData(res.data)
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, [])

    return (
        <div className='container testimonials'>
            <div className='testimonials-head'>
                {/* <p className='fs-18'>Rəylər</p> */}
                <h4 className='pb-5 testimonials-title text-center fs-27 fw-bolder'>MÜŞTƏRİLƏRİMİZİN RƏYLƏRİ</h4>
            </div>
            <Swiper
                grabCursor={true}
                slidesPerView='2'
                spaceBetween={30}
                loop={true}

                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1,

                    },
                    480: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                    },

                    912: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1280: {
                        spaceBetween: 70,
                        slidesPerView: 3,
                    },
                }}
            >
                {/* <SwiperButton/> */}

                {
                    userData.map((item) => (
                            <SwiperSlide key={item.id}>
                                    <div className='col-xl-12 comment-card'>
                                        <div className='d-flex align-items-center gap-3'>
                                            {/* <img src={item.icon} /> */}
                                            <BiSolidQuoteLeft className='comment-card-icon'/>
                                            {/* <h5>{item.title}</h5> */}
                                        </div>
                                        <div className='pt-20 comment-text'>
                                            <p>{item.costumer_review}</p>
                                        </div>
                                        <div className='d-flex align-items-center gap-3 comment-card-end'>
                                            <div>
                                                <img src={item.image} alt='img' />
                                            </div>
                                            <div>
                                                <h5 className='font-medium leading-normal'>{item.fullname}</h5>
                                                <p className=''>{item.costumer_company}</p>
                                            </div>
                                        </div>
                                    </div>
                            </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default commentC