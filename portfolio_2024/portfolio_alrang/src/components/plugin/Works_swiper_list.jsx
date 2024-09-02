import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//my css
import "./css/works_swiper_list.scss";

//data
import { worksData } from "../data/works";
import { useNavigate } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { SelectCon } from "../pages/SelectCon";

export default function WorksSwiper() {
  // 콘텍스트 사용
  //selProjectData 선택된 프로젝트 데이터
  const myCon = useContext(SelectCon);

  // 클릭시 detail페이지 이동 셋팅
  const navigate = useNavigate();
  const goLink = () => {
    navigate("/WorksDetail");
  };

  const listItemsRef = useRef([]); // li 요소들의 참조를 저장할 배열

  useEffect(() => {
    // 각 li 요소에 순차적으로 애니메이션 적용
    listItemsRef.current.forEach((li, index) => {
      setTimeout(() => {
        if (li) {
          li.style.animation = `slideUp 0.3s ease-in forwards`;
          li.style.animationDelay = `${index * 0.1}s`; // 0.2초 간격으로 딜레이 추가
        }
      }, index * 200); // 200ms 간격으로 애니메이션 실행 (시간 조절 가능)
    });
  }, []);

  return (
    <>
      <Swiper
        // slidesPerView={"auto"}
        spaceBetween={20}
        initialSlide={0} // 초기 활성 슬라이드 인덱스 설정
        modules={[Pagination]}
        //반응형 처리
        direction={"horizontal"}
        //슬라이드 중앙배치
        // centeredSlides={false} 
        // centeredSlidesBounds={false} 
        breakpoints={{
          500: {
            direction: "vertical",
            slidesPerView: 3,
          },
          720: {
            direction: "vertical",
            slidesPerView: 3,
          },
          // 1600px 이상 해상도에서 slidesPerView: 3 설정 추가
          1000: {
            slidesPerView: 3,
          },
        }}
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
              <SwiperSlide key={i}>
                <li
                  className="ani-target"
                  ref={(el) => (listItemsRef.current[i] = el)} // li 요소 참조 저장
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}${v.isrc.bg})`,
                  }}
                  onClick={handleClick}
                >
                  <div className="info-text-wrap">
                    <div className="title-wrap">
                      {v.title.split("^").map((v, i) => (
                        <h3 key={i} className="title">
                          {v}
                        </h3>
                      ))}
                    </div>
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
