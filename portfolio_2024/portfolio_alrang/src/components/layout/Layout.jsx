//portfolio pj - Layout 컴포넌트
import React, { useState } from "react";

//page
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { SelectCon } from "../pages/SelectCon";
import Flowmouse from "../func/flowmouse.jsx";
/////import area/////////////////////////////

function Layout() {
    //1.선택된 데이터 전달 상태변수
    const [selProjectData, setSelProjectData] = useState(null);
    ///코드리턴구역 ////////////////////////
    return (
        <SelectCon.Provider
            value={{
                selProjectData,
                setSelProjectData,
            }}
        >
            <Flowmouse />
            <TopArea />
            <MainArea />
            <FooterArea />
        </SelectCon.Provider>
    );
}

export default Layout;
