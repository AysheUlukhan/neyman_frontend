// import React, { useState, useEffect } from 'react'
// // import { blogData } from '../../components/Api/BlogData/blogData';
// import { NavLink, useParams } from 'react-router-dom';
// import { LuChevronRight } from "react-icons/lu";
// import './blogDetail.css'
// import axios from 'axios';
// import { BASE_URL } from '../../httpRequest/httpRequest'


// const blogDetail = () => {
//   const [userData, setUserData] = useState([]);
//   const { slug } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}en/blog/{slug}`);
//         setUserData(res.data)
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchData();
//   }, [slug])

//   // let myDetailedBlog = userData.find((item) => item.id === id)

//   // const filteredCategory = userData.filter((item) => {
//   //   return myDetailedBlog.title === item.title
//   // })

//   return (
//     <div className='container blogDetail'>
//       <div className='d-flex align-items-center py-5 blogDetail-head'>
//         <a href='/' className='d-flex align-items-center gap-1 '>ANA SƏHİFƏ <LuChevronRight /></a>
//         <a href='/Blog' className='d-flex align-items-center gap-1 '>BLOQ <LuChevronRight /></a>
//         <p>BLOQ DETAIL</p>
//       </div>
//       <div className="row g-lg-5 py-5">
//         <div className="col-lg-8 col-sm-12 col-12">
//           <article className="blog-post">
//             {/* <img src={userData.compress_blog_image} className='w-100 h-25 d-block mx-lg-auto img-fluid dblog-img' alt="detailblog" />  */}
//             <div className='py-3'><span>{userData.title}</span> | <span>{userData.show_date}</span></div>
//             <h3>{userData.title}</h3>
//             {/* {/* <p className='pt-3'>{myDetailedBlog.text}</p> */}
//           </article>
//         </div>
//         <div className="col-lg-4 col-sm-12 col-12 left-related-posts">
//           <div>

//             <div>
//               <div className='related-posts pb-3'>
//                 <h4>Əlaqədar Yazılar</h4>
//               </div>
//               <ul className="list-unstyled">
//                 {/* {
//                   filteredCategory.slice(0, 3).map((item) => (
//                     <NavLink className='text-decoration-none'  to={`/BlogDetail/${item.id}`}>
//                       <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
//                         <img src={item.image} className='d-block mx-lg-auto img-fluid dblog-img' alt="detailblog" />
//                         <div className="col-lg-8">
//                           <small className="text-body-secondary"><span>{item.title}</span> | <span>{item.date}</span></small>
//                           <h6 className="mb-0">{item.content}</h6>
//                         </div>
//                       </a>
//                     </NavLink>
//                   ))
//                 } */}

//               </ul>
//             </div>

//           </div>


//         </div>
//       </div>
//     </div>
//   )
// }

// export default blogDetail










import React, { useState, useEffect } from 'react';
import { LuChevronRight } from "react-icons/lu";
import './blogDetail.css';
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest';
import { useParams, NavLink } from 'react-router-dom';

const BlogDetail = () => {
  const [userData, setUserData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/blog/${slug}`);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/blog_category`);
        const blogCategoryId = res.data.id;
        const filteredData = Array.isArray(userData) ? userData.filter((item) => {
          return item.category_id === blogCategoryId && item.id !== userData.id;
        }) : [];
        setFilteredCategory(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, [userData]);

  return (
    <div className='container blogDetail'>
      <div className='d-flex align-items-center py-5 blogDetail-head'>
        <a href='/' className='d-flex align-items-center gap-1 '>ANA SƏHİFƏ <LuChevronRight /></a>
        <a href='/Blog' className='d-flex align-items-center gap-1 '>BLOQ <LuChevronRight /></a>
        <p>BLOQ DETAY</p>
      </div>
      <div className="row g-lg-5 py-5">
        <div className="col-lg-8 col-sm-12 col-12">
          <article className="blog-post">
            <img src={userData.compress_blog_image} className='w-100 h-25 d-block mx-lg-auto img-fluid dblog-img' alt="detailblog" /> 
            <div className='py-3'><span>{userData.title}</span> | <span>{userData.show_date}</span></div>
            <h3>{userData.title}</h3>
            <p>{userData.content}</p>
          </article>
        </div>
        <div className="col-lg-4 col-sm-12 col-12 left-related-posts">
          <div>
            <div>
              <div className='related-posts pb-3'>
                <h4>Əlaqədar Yazılar</h4>
              </div>
              <ul className="list-unstyled">
                 {
                   filteredCategory.slice(0, 3).map((item) => (
                     <NavLink className='text-decoration-none'  to={`/BlogDetail/${item.id}`} key={item.id}>
                       <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                         <img src={item.compress_blog_image} className='d-block mx-lg-auto img-fluid dblog-img' alt="detailblog" />
                         <div className="col-lg-8">
                          <small className="text-body-secondary"><span>{item.title}</span> | <span>{item.show_date}</span></small>
                           <h6 className="mb-0">{item.content}</h6>
                         </div>
                       </a>
                     </NavLink>
                   ))
                } 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
