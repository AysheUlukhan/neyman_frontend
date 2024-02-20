import React, { useState } from 'react';
import { faqData } from '../../components/Api/FaqAccordionData/faqData';
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

import './Faq.css'

const Faq = () => {
    const [selected, setSelected] = useState(null);
    const toogle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className='container faq'>
            <div className='py-5 faq-head'>
                <p className='fs-18 pb-4'>Tez-tez verilən suallar</p>
            </div>
            <div className='wrapper'>
                <div className='accordion'>
                    {faqData.map((item, i) => (
                        <div className='item border p-2 mb-2' key={item.id}>
                            <div className='title d-flex justify-content-between align-items-center gap-2 pb-2 cursor-pointer' onClick={() => toogle(i)}>
                                <div>
                                    <p className=' fw-medium'>{item.number}</p>
                                    <h4 className='pt-2'>{item.title}</h4>
                                </div>

                                <span>{selected === i ? <FiArrowUpRight className='fs-22' /> : <FiArrowDownRight className='fs-22' />}</span>
                            </div>
                            <div className={selected === i ? 'answer show' : 'answer'}>
                                <p className='fs-18 '>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq