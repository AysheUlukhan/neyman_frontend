import React from 'react'
import { useParams } from 'react-router-dom'
import { servicesData } from '../../components/Api/ServicesData/servicesData'
import { LuChevronRight } from "react-icons/lu";
import "./portfolioDetail.css"

const portfolioDetail = () => {
    const { id } = useParams()
    let myDetailedPortfolio = servicesData.find((item) => item.id === id)

    return (
        <div className='container portfolio_detail'>
            <div className='d-flex align-items-center py-5 portfolio_detail_head'>
                <a href='/' className='d-flex align-items-center gap-1 '>ANA SƏHİFƏ <LuChevronRight /></a>
                <a href='/Portfolio' className='d-flex align-items-center gap-1 '>LAYİHƏLƏR <LuChevronRight /></a>
                <p>LAYİHƏ DETAIL</p>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                <img src={myDetailedPortfolio.image} className='w-100 d-block mx-lg-auto img-fluid dblog-img' alt="detailportfolio" />

                </div>
            </div>
        </div>
    )
}

export default portfolioDetail