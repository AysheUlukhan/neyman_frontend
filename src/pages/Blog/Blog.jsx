// import React, { useState, useEffect } from 'react'
// import { LuChevronRight } from "react-icons/lu";
// // import { blogData } from '../../components/Api/BlogData/blogData';
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import './Blog.css'
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { BASE_URL } from '../../httpRequest/httpRequest'
// const Blog = () => {

//   const [currentPage, setCurrentPage] = useState(1);
//   const [userData, setUserData] = useState([]);

//   const recordsPerPage = 9;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = userData.slice(firstIndex, lastIndex);
//   const npage = Math.ceil(userData.length / recordsPerPage);
//   const numbers = [...Array(npage + 1).keys()].slice(1);


//   function prePage() {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1)
//     }
//   }

//   function changeCPage(id) {
//     setCurrentPage(id)
//   }

//   function nextPage() {
//     if (currentPage !== npage) {
//       setCurrentPage(currentPage + 1)
//     }
//   }

  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}en/blog`);
//         setUserData(res.data)
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchData();
//   }, [])



//   const [search, setSearch] = useState('');


//   return (
//     <div className='container blog'>
//       <div className='d-flex align-items-center py-5 blog-head'>
//         <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
//         <p>BLOQ</p>
//       </div>
//       <div className='d-flex justify-content-end pb-5 search'>
//         <input onChange={(e) => setSearch(e.target.value)} type='text' className='w-25 p-3 search' placeholder='Axtar' />
//       </div>
//       <div className='row row-gap-5 blog-card'>
//         {

//           records.filter((post) => {
//             return search.toString().toLowerCase() === ''
//               ? post
//               : post.title.toString().toLowerCase().includes(search);
//           })


//             .map(post =>
//               <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 cards' key={post.id}>
//                 <div className="card">
//                   <div className='blogImg'>

//                     <img src={post.original_blog_image} className="d-block mx-lg-auto img-fluid " />
//                   </div>
//                   <div className="card-body text-center">
//                     <div className='py-2 fs-14'>
//                       <span>{post.title} </span>| <span>{post.show_date}</span>
//                     </div>
//                     <h4 className='fs-24'>{post.title}</h4>
//                     <NavLink key={post.id} to={`/BlogDetail/${post.slug}`}>
//                       <p className='read '>Ətraflı Oxu <span><FaArrowRight /></span></p>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             )
//         }

//         <ul className='d-flex justify-content-center gap-4'>
//           <li className='page-item'>
//             <a href='#/' className='arrow-item' onClick={prePage}><FaArrowLeft /></a>
//           </li>
//           {
//             numbers.map((n, i) => (
//               <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
//                 <a href='#/' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
//               </li>
//             ))
//           }
//           <li className='page-item'>
//             <a href='#/' className='arrow-item' onClick={nextPage}><FaArrowRight /></a>
//           </li>
//         </ul>

//       </div>
//     </div>
//   )
// }

// export default Blog



// // fetch('https://fakestoreapi.com/products')
// //     .then((res) => res.json())
// //     .then(data => {
// //         let div = ""
// //         data.map((item) => {
// //             div += `
// //            <div class="card">
// //                <img src="${item.image}" class="card-img-top" alt="...">
// //                <div class="card-body">
// //                    <h5 class="card-title">${item.title}</h5>
// //                    <p class="card-text">${item.description}</p>
// //                </div>
// //        </div>`

// //         })
// //         results.innerHTML = div
// //     })



// // function changeCPage(id) {
// //     setCurrentPage(id);
// // }















import React, { useState, useEffect } from 'react';
import { LuChevronRight } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Blog.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState('');

  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = userData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(userData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}en/blog`);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className='container blog'>
      <div className='d-flex align-items-center py-5 blog-head'>
        <a href='/' className='d-flex align-items-center gap-1'>ANA SƏHİFƏ <LuChevronRight /></a>
        <p>BLOQ</p>
      </div>
      <div className='d-flex justify-content-end pb-5 search'>
        <input onChange={(e) => setSearch(e.target.value)} type='text' className='w-25 p-3 search' placeholder='Axtar' />
      </div>
      <div className='row row-gap-5 blog-card'>
        {records.filter((post) => {
          return search.toString().toLowerCase() === '' ? post : post.title.toString().toLowerCase().includes(search);
        }).map(post => (
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 cards' key={post.id}>
            <div className="card">
              <div className='blogImg'>
                <img src={post.original_blog_image} className="d-block mx-lg-auto img-fluid " />
              </div>
              <div className="card-body text-center">
                <div className='py-2 fs-14'>
                  <span>{post.title} </span>| <span>{post.show_date}</span>
                </div>
                <h4 className='fs-24'>{post.title}</h4>
                <NavLink key={post.id} to={`/BlogDetail/${post.slug}`}>
                  <p className='read '>Ətraflı Oxu <span><FaArrowRight /></span></p>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        <ul className='d-flex justify-content-center gap-4'>
          <li className='page-item'>
            <a href='#/' className='arrow-item' onClick={prePage}><FaArrowLeft /></a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href='#/' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
            </li>
          ))}
          <li className='page-item'>
            <a href='#/' className='arrow-item' onClick={nextPage}><FaArrowRight /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;

