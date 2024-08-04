import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//css
import "../../css/work_list.scss";
//data
import WorksSwiper from "../plugin/Works_swiper_list";
import { SelectCon } from "./SelectCon";
///import area///////////////////////////////////

function WorksList() {
    //1. selProjectData 선택된 프로젝트 데이터
    //[상태관리변수]
    //1. 현재 main배경 이미지 상태체크
    const [mainBg, setMainBg] = useState(null);

    //코드리턴구역/////////////////
    return (

        <section id="works-list-area" className="fxbox" >
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
