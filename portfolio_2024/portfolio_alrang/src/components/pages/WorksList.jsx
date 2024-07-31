import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//css
import "../../css/work_list.scss";
//data
import WorksSwiper from "../plugin/Works_swiper_list";
///import area///////////////////////////////////

function WorksList() {
    //[상태관리변수]
    //1. 현재 main배경 이미지 상태체크
    const [mainBg, setMainBg] = useState(null);

    //코드리턴구역/////////////////
    return (
        <main id="works-list-area" >
            <div className="txt">WORKS LIST</div>
            <div className="ani-bar"></div>
            <div className="bg-box" style={{ backgroundImage: mainBg }}>
            <WorksSwiper/>
            </div>
        </main>
    );
}

export default WorksList;
