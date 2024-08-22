import React, { useEffect, useState } from "react";
//css
import "../../css/work_list.scss";
//data
import WorksSwiper from "../plugin/Works_swiper_list";
///import area///////////////////////////////////

function WorksList() {
  //1. selProjectData 선택된 프로젝트 데이터
  //[상태관리변수]
  //1. 현재 main배경 이미지 상태체크
  const [mainBg, setMainBg] = useState(null);

  //코드리턴구역/////////////////
  return (
    <section id="works-pj-area">
      {/* 1. 리스트 컴포넌트 */}
      {/* <div className="swiper-list"> */}
      <div className="works-swiper-container">
        <WorksSwiper />
      </div>
      {/* </div> */}
    </section>
  );
}

export default WorksList;
