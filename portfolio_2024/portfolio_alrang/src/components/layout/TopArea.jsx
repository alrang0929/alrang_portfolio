//portfolio pj - TopArea 컴포넌트
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/top_area.scss";
import HomeNavCon from "../pages/HomeNavCon";
import { SelectCon } from "../pages/SelectCon";
///////////////////import area//////////////////

function TopArea() {
  ///// 화면 랜더링 구역///////////////////
  return (
    <>
      <header id="gnb-area">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Works">Works</Link>
        </nav>
      </header>
    </>
  );
}

export default TopArea;
