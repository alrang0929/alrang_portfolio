import React, { useEffect, useState } from "react";
//css
import "../../css/work_list.scss";
//data
import WorksSwiper from "../plugin/Works_swiper_list";
import WorksPjList from "../func/WorksPjList";
///import area///////////////////////////////////

function WorksList() {
  /********************************************************* 
   [props 정리]
  1. selProjectData 선택된 프로젝트 데이터
  
  *********************************************************/

    // 상태관리변수
    // 1. 조건연상자를 사용하기 위한 가로값을 구해오는 상태관리변수
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  //코드리턴구역/////////////////
  return (
    <section id="works-pj-area">
      {/* 1. 리스트 컴포넌트 */}
      <div className="top-wrap">
      <div className="title gilda-display-regular">
        <span>works List</span>
      </div>
      <button className="fill-button2">GO TO GITHUB</button>
      </div>
      {windowWidth > 999 ? (
        // 해상도가 999보다 크냐? 스와이퍼 보여줘!
      <div className="works-swiper-container">
        <WorksSwiper />
      </div>

      ) : (
        // 그 외는? list 보여줘!
        <div className="pj-list-wrap">
         <WorksPjList/>
        </div>
      ) }
    </section>
  );
}


export default WorksList;
