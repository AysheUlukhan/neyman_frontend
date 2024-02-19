import React from 'react'
import { partners } from '../Api/Partners/partners'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import './partner.css'

const partnerSlider = () => {
    return (
        <div className='container partners'>
            <Swiper
              breakpoints={{
                0: {
                    spaceBetween: 5,
                    slidesPerView: 3,

                },
                480: {
                    spaceBetween: 10,
                    slidesPerView: 5,
                },
                768: {
                    spaceBetween: 15,
                    slidesPerView: 6,
                },

                912: {
                    spaceBetween: 15,
                    slidesPerView: 6,
                },
                1280: {
                    spaceBetween: 70,
                    slidesPerView: 6,
                },
            }}
            >
                
                {
                    partners.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='partner-img'>
                                <img src={item.img} alt="partner" />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default partnerSlider