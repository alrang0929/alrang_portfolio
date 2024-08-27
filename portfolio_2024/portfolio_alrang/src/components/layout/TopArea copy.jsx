//portfolio pj - TopArea 컴포넌트
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/top_area.scss";
///////////////////import area//////////////////

function TopArea() {
  //상태관리변수
  //1. 홈이동 상태관리
  const [isHome, setIsHome] = useState(true);

  const navigate = useNavigate();
  const goLink = () => {
    //클릭시 isHome 상태 반전
    setIsHome(!isHome);
    //isHome이 true냐? works, false냐? root
    navigate(isHome ? "/Works" : "/");
  };

  ///// 화면 랜더링 구역///////////////////
  return (
    <>
      <header id="gnb-area">
        <nav>
          {!isHome && <Link to="/Works">WORKS</Link>}
          <button className="fill-button2" onClick={goLink}>
            {isHome ? "Works" : "Home"}
          </button>
        </nav>
      </header>
    </>
  );
}

export default TopArea;
