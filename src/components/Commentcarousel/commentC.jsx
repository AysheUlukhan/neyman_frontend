import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { commentData } from '../Api/CommentData/commentData'
import SwiperButton from './SwiperNavButton/SwiperButton';
const commentC = () => {
    return (
        <div className='container testimonials'>
            <div className='testimonials-head'>
                <p className='fs-18'>Rəylər</p>
                <h3 className='fs-40 pb-5 testimonials-title'>Müştərilərimizin Dedikləri</h3>
            </div>
            <Swiper
                grabCursor={true}
                slidesPerView='2'
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000
                }}

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
                        slidesPerView: 2,
                    },
                    1280: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperButton/>

                {
                    commentData.map((item) => (
                        <div>
                            <SwiperSlide key={item.id}>
                                <div className=''>
                                    <div className='col-xl-12 '>
                                        <div className='d-flex align-items-center gap-3'>
                                            <img src={item.icon} />
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className='pt-20'>
                                            <p className=''>{item.comment}</p>
                                            <img src={item.imagesvg} alt='img' className='pt-20 d-block mx-lg-auto img-fluid' />
                                        </div>
                                        <div className='d-flex align-items-center gap-3 pt-20'>
                                            <div>
                                                <img src={item.image} alt='img' />
                                            </div>
                                            <div>
                                                <h4 className='text-24 font-medium leading-normal'>{item.name}</h4>
                                                <p className=''>{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default commentC