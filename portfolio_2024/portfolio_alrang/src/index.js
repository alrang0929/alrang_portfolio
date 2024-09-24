///portfolio - index
import React, { useContext, useEffect, useState } from "react";
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
      <ScrollTop/>
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

/******************************************* 
  컴포넌트로 만들고 라우터 안에 넣고
  라우터 경로변경시 스크롤 최상단이동
*******************************************/
const ScrollTop = () => {
  // 라우터 경로 변경시 path 값 읽어오기
  // pathname 객체 속성에 담긴다!
  const { pathname } = useLocation();

  // 화면랜더링 구역에 스크롤상단이동 코드넣기
  useEffect(() => {
    // 스크롤 최상단 이동
    window.scrollTo(0, 0);
    // 변경된 라우터 경로값 확인
    // console.log("라우터경로:", pathname);
  }, [pathname]);
  // 의존성을 라우터 경로 변수로 설정한다!

  // 컴포넌트 리턴이 필요하나
  // 소스리턴이 아니므로 null를 쓴다
  return null;
}; /////////// ScrollTop 컴포넌트 ////////////
//root객체 생성
const root = ReactDOM.createRoot(document.querySelector("#root"));
//출력하기
root.render(<MainComponent />);
