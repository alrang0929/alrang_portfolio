//portfolio pj - Layout 컴포넌트
import React, { useState } from "react";

//page
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { SelectCon } from "../pages/SelectCon";

/////import area/////////////////////////////

function Layout() {

    /*********************************************************************************** 
            [useContext 정리]
    1. selectCon : 선택 데이터값 관리 con, 해당되는 works데이터 전달을 위해 사용
    2. HomeNavCon (index에서 관리) : Home으로 돌아가기 위해 사용하는 con, topArea 에서 링크 값이 꼬여 사용
    ***********************************************************************************/

  //1.선택된 데이터 전달 상태변수
  const [selProjectData, setSelProjectData] = useState(null);


  ///코드리턴구역 ////////////////////////
  return (
    
      //[상태관리변수]//////////////////////////////////
      <SelectCon.Provider
      value={{
        selProjectData,
        setSelProjectData,
      }}
      >
        <div>

        {/* <Flowmouse /> */}
        <TopArea />
        <MainArea />
        <FooterArea />
        </div>
      </SelectCon.Provider>

  );
}

export default Layout;
