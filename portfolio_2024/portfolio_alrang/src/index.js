///portfolio - index
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "../src/css/index.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//page
import Main from "./components/pages/Main";
import WorksDetail from "./components/pages/WorksDetail";
import WorksList from "./components/pages/WorksList";
import Layout from "./components/layout/Layout";
import HomeNavCon from "./components/pages/HomeNavCon.jsx";
///////////////import area

export default function MainComponent() {
  /*********************************************************************************** 
            [useContext 정리]
    1. selectCon : 선택 데이터값 관리 con, 해당되는 works데이터 전달을 위해 사용
    2. HomeNavCon : Home으로 돌아가기 위해 사용하는 con, topArea 에서 링크 값이 꼬여 사용
    ***********************************************************************************/

  //2.  isHome 상태관리변수
  const [isHome, setIsHome] = useState(true);

  //////코드리턴구역 ////////////////////////////
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HomeNavCon.Provider value={{ isHome, setIsHome }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/Works" element={<WorksList />} />
              <Route path="/WorksDetail" element={<WorksDetail />} />
            </Route>
          </Routes>
        </HomeNavCon.Provider>
      </BrowserRouter>
    </>
  );
}

//root객체 생성
const root = ReactDOM.createRoot(document.querySelector("#root"));
//출력하기
root.render(<MainComponent />);
