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
          <ul className="fxbox">
            <li className="link-box2">
              <Link
                style={{
                  color:
                    location.pathname == "/WorksDetail" ? "white" : "black",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="link-box2">
              <Link
                style={{
                  color:
                    location.pathname == "/WorksDetail" ? "white" : "black",
                }}
                to="/Works"
              >
                Works
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default TopArea;
