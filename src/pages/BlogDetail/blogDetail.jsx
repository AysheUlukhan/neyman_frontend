import React from 'react';
import { blogData } from '../../components/Api/BlogData/blogData';
import { useParams } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";
import sectionshap from '../../assets/images/svg/section-shap.svg';
import './blogDetail.css'

const blogDetail = () => {
  const { id } = useParams();
  let myDetailedBlog = blogData.find((item) => item.id === id)
  return (
    <div className='container blogDetail'>
      <div className='d-flex align-items-center py-5 blogDetail-head'>
        <a href='/' className='d-flex align-items-center gap-1 '>ANA SƏHİFƏ <LuChevronRight /></a>
        <a href='/Blog' className='d-flex align-items-center gap-1 '>BLOQ <LuChevronRight /></a>
        <p>BLOQ DETAIL</p>
      </div>
      <div className="row g-lg-5 py-5">
        <div className="col-lg-8 col-sm-12 col-12">

          <article className="blog-post">
            <img src={myDetailedBlog.image} className='w-100 h-25 d-block mx-lg-auto img-fluid dblog-img' alt="detailblog" />
            <div className='py-3'><span>{myDetailedBlog.title}</span> | <span>{myDetailedBlog.date}</span></div>
            <h3>{myDetailedBlog.content}</h3>
            <p className='pt-3'>{myDetailedBlog.text}</p>

          </article>


        </div>

        <div className="col-lg-4 col-sm-12 col-12 left-related-posts">
          <div className="sticky-top">

            <div>
              <div className='related-posts pb-3'>
                <h4>Əlaqədar Yazılar</h4>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                    <div className="col-lg-8">
                      <small className="text-body-secondary">January 15, 2023</small>
                      <h6 className="mb-0">Example blog post title</h6>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                    <div className="col-lg-8">
                      <small className="text-body-secondary">January 14, 2023</small>
                      <h6 className="mb-0">This is another blog post title</h6>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                    <div className="col-lg-8">
                      <small className="text-body-secondary">January 13, 2023</small>
                      <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default blogDetail