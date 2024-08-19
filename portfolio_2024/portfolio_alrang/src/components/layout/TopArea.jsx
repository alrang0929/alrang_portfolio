//portfolio pj - TopArea 컴포넌트
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../css/top_area.scss";
import HomeNavCon from "../pages/HomeNavCon";
import { SelectCon } from "../pages/SelectCon";
///////////////////import area//////////////////

function TopArea() {
  const location = useLocation(); // 현재 경로 정보 가져오기
  console.log("logation", location);
  ///// 화면 랜더링 구역///////////////////
  return (
    <>
      <header id="gnb-area">
      <nav> 
          <Link style={{ color: location.pathname == '/' ? 'black' : 'white' }} to="/">Home</Link>
          <Link style={{ color: location.pathname == '/' ? 'black' : 'white' }} to="/Works">Works</Link>
        </nav>
      </header>
    </>
  );
}

export default TopArea;
