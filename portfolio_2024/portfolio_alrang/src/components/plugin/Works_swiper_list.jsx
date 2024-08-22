import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/works_swiper_list.scss";

//data
import { worksData } from "../data/works";
import { useNavigate } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { SelectCon } from "../pages/SelectCon";

export default function WorksSwiper() {
  // 콘텍스트 사용
  const myCon = useContext(SelectCon);
  // 클릭시 detail페이지 이동 셋팅
  const navigate = useNavigate();
  const goLink = () => {
    navigate("/WorksDetail");
  };
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        //반응형 처리
        direction={"horizontal"}
        centeredSlides={true}
        // slidesPerView={'auto'}
        // breakpoints={{
        //   500: {
        //     slidesPerView: 1,
        //     // spaceBetween: 40,
        //   },
        //   1600: {
        //     slidesPerView: 2,
        //   },

        //   1620: {
        //     slidesPerView: 3,
        //   },

        //   1900: {
        //     slidesPerView: 3,
        //   },
        // }}
        className="mySwiper-works"
      >
        {
          worksData.map((v, i) => {
            const infoData = v.info.split("^");
            const categoryData = v.category.split("^");
            //click핸들에 클릭시 데이터값 받는 함수도 추가
            const handleClick = () => {
              myCon.setSelProjectData(v); // 선택된 li의 데이터 설정
              goLink();
            };

            // console.log("infoData", infoData[0]);
            // console.log("v.isrc.bg", v.isrc.bg);
            return (
              <SwiperSlide 
              key={i}
              >
                <li
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}${v.isrc.bg})`,
                  }}
        
                  onClick={handleClick}
                >
                  <div className="info-text-wrap">
                      {v.title.split("^").map((v,i)=>
                    <h3 key={i} className="title">{v}</h3>
                      )}
                    <div className="category-wrap">
                      <span>{categoryData[0]}</span>
                      <span>{categoryData[1]}</span>
                    </div>
                    <div className="info">
                      <div className="info-wrap">
                        <div className="tit">DATE</div>
                        <div className="date cont-text">{infoData[0]}</div>
                      </div>
                      <div className="info-wrap">
                        <div className="tit">USE TOOL</div>
                        <div className="tool cont-text">{infoData[1]}</div>
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
