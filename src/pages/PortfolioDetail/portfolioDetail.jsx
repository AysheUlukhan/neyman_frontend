// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'
// // import { servicesData } from '../../components/Api/ServicesData/servicesData'
// import { LuChevronRight } from "react-icons/lu";
// import "./portfolioDetail.css"
// import axios from 'axios';
// import { BASE_URL } from '../../httpRequest/httpRequest'

// const portfolioDetail = () => {
//     const { project_slug } = useParams();
//     const [portfolioDetail, setPortfolioDetail] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axios.get(`${BASE_URL}en/projects/${project_slug}`);
//                 setPortfolioDetail(res.data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         fetchData();
//     }, [project_slug]);


//     return (
//         <div className='container portfolio_detail'>
//             <div className='d-flex align-items-center py-5 portfolio_detail_head'>
//                 <a href='/' className='d-flex align-items-center gap-1 '>ANA SƏHİFƏ <LuChevronRight /></a>
//                 <a href='/Portfolio' className='d-flex align-items-center gap-1 '>LAYİHƏLƏR <LuChevronRight /></a>
//                 <p>LAYİHƏ DETAIL</p>
//             </div>
//             <div className='row'>
//                 <div className='col-md-12'>
//                     <img src={portfolioDetail.project_compress_image} className='w-100 d-block mx-lg-auto img-fluid dblog-img' alt="detailportfolio" />

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default portfolioDetail




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { LuChevronRight } from "react-icons/lu";
import "./portfolioDetail.css"
import axios from 'axios';
import { BASE_URL } from '../../httpRequest/httpRequest'

const PortfolioDetail = () => {
    const { project_slug } = useParams();
    const [portfolioDetail, setPortfolioDetail] = useState({});
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${BASE_URL}en/projects/${project_slug}`);
                setPortfolioDetail(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchProjectImages = async () => {
            try {
                const res = await axios.get(`${BASE_URL}en/project_all_images/`);
                setProjectImages(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
        fetchProjectImages();
    }, [project_slug]);

    return (
        <div className='container portfolio_detail'>
            <div className='d-flex align-items-center py-5 portfolio_detail_head'>
                <a href='/' className='d-flex align-items-center gap-1 '>ANA SƏHİFƏ <LuChevronRight /></a>
                <a href='/Portfolio' className='d-flex align-items-center gap-1 '>LAYİHƏLƏR <LuChevronRight /></a>
                <p>LAYİHƏ DETAIL</p>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={portfolioDetail.project_compress_image} className='w-100 d-block mx-lg-auto img-fluid dblog-img' alt="detailportfolio" />
                </div>
            </div>
            <div className="row mt-4">
                {projectImages.map((image, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <img src={image.original_image} className="img-fluid" alt={`Project Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioDetail;
