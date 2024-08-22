import React, { useEffect, useState } from "react";
//css
import "../../css/work_list.scss";
//data
import WorksSwiper from "../plugin/Works_swiper_list";
///import area///////////////////////////////////

function WorksList() {
  //1. selProjectData 선택된 프로젝트 데이터

  //코드리턴구역/////////////////
  return (
    <section id="works-pj-area">
      {/* 1. 리스트 컴포넌트 */}
      <div className="top-wrap">
      <div className="title gilda-display-regular">
        <span>works List</span>
      </div>
      <button className="fill-button">GO TO GITHUB</button>
      </div>
      <div className="works-swiper-container">
        <WorksSwiper />
      </div>
    </section>
  );
}

export default WorksList;
