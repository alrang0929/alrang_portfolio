import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import "./css/works_swiper_list.scss";

//data
import worksData from "../data/works";
import { useNavigate } from "react-router-dom";

import { Pagination } from 'swiper/modules';

export default function WorksSwiper({mainBg, setMainBg}) {

    //마우스가 올라가면? 메인 BG를 li BG로 설정
    const handleMouseEnter = (listBg) => {
        setMainBg(listBg);
    };
    //마우스가 떠나면? 원래 main bg로 되돌림
    const handleMouseLeave = () => {
        setMainBg(null);
    };
    const navigate = useNavigate();
    const goLink = () => {
        navigate("/WorksDetail");
    };
    /////////코드리턴구역////////////
  return (
    <>
      <Swiper
        slidesPerView={'2'}
        spaceBetween={50}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
                    worksData.map((v, i) => {
                        const infoData = v.info.split("^");
                        const categoryData = v.category.split("^");
                        console.log("infoData", infoData[0]);
                        console.log("v.isrc.bg", v.isrc.bg);
                        return (
                            <SwiperSlide key={i}>
                                <li
                                    style={{
                                        backgroundImage: `url(${process.env.PUBLIC_URL}${v.isrc.bg})`,
                                    }}
                                    onMouseEnter={() =>
                                        handleMouseEnter(
                                            `url(${process.env.PUBLIC_URL}${v.isrc.bg})`
                                        )}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={goLink}
                                >
                                    <div className="info-text-wrap">
                                        <h3 className="title">{v.title}</h3>
                                        <div className="category-wrap">
                                            <span>{categoryData[0]}</span>
                                            <span>{categoryData[1]}</span>
                                        </div>
                                        <div className="info">
                                            <div className="info-wrap">
                                                <div className="tit">DATE</div>
                                                <div className="date cont-text">
                                                    {infoData[0]}
                                                </div>
                                            </div>
                                            <div className="info-wrap">
                                                <div className="tit">
                                                    USE TOOL
                                                </div>
                                                <div className="tool cont-text">
                                                    {infoData[1]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                        ); //li반환
                    }) //map
                }
      </Swiper>
    </>
  );
}
