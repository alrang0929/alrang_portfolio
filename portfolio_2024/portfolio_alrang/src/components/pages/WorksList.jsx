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

    const handleScroll = (event) => {
        event.preventDefault(); // 스크롤 이벤트의 기본 동작 방지
      };
    
      useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false }); // 휠 이벤트에도 적용
        window.addEventListener('touchmove', handleScroll, { passive: false }); // 터치 이동에도 적용
    
        return () => {
          window.removeEventListener('wheel', handleScroll);
          window.removeEventListener('touchmove', handleScroll);
        };
      }, []);
    

    //코드리턴구역/////////////////
    return (

        <section 
        id="works-pj-area" 
        className="fxbox" 
        onScroll={handleScroll}
        style={{ overflow: 'auto'}}
        >
            <div className="text-object-wrap fxbox">
            <div className="txt">WORKS LIST</div>
            <div className="ani-bar"></div>
            </div>
            {/* 1. 리스트 컴포넌트 */}
            <WorksSwiper mainBg={mainBg} setMainBg={setMainBg} />
            <div className="bg-box" style={{ backgroundImage: mainBg }}></div>
        </section>

    );
}

export default WorksList;
