import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import './About.css'


const About = () => {
  return (
    <div className='container about'>
      <div className='d-flex align-items-center py-5 about-head'>
        <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
        <p>HAQQIMIZDA</p>
      </div>
      <div className="row align-items-center g-lg-5 row-gap-5 py-5">
      <div className="col-lg-6 col-sm-12 col-12">
        <h1 className="fw-bold lh-1 mb-4">Şirkət haqqında</h1>
        <p className="fs-18 mb-3">2015-ci ildən bu günə qədər veb xidmətləri göstərən agentliyik. Təsis edildiyimiz gündən bu günə qədər uzunmüddətli investisiyalara, qısa müddət ərzində qazanc əldə etməyə üstünlük verdik. Ən böyük qazancımız, işimizə duyduğumuz hörmət hissi və vurğunluqdur…</p>
        <p className='fs-18'>Və eyni hissləri bölüşən böyük ailəyə çevrildik. Hər il qazandığımız uğurlar bizi ruhlandırır və həvəsimizi daha da artırır. Ancaq ən böyük mükafat sizin tərif dolu sözləriniz və razılığınızdır.</p>
        <hr/>
      </div>
      <div className="col-12 col-sm-12 col-lg-6">
        <img src="https://webline.az/wp-content/uploads/2023/06/about-us.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
    </div>
    </div>
  )
}

export default About