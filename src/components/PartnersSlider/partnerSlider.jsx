import React from 'react'
import { partners } from '../Api/Partners/partners'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

const partnerSlider = () => {
    return (
        <div className='container'>
            <Swiper>
                {
                    partners.map((item) => (
                        <SwiperSlide>
                                <div key={item.id}>
                                    <img src={item.img} alt="" />
                                </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default partnerSlider