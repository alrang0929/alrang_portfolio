import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectCon } from "../pages/SelectCon";
// data
import { worksData } from "../data/works";
//css
import "./worjs_pj_list.scss";

//import area///////////////////////////////////////////////////////////

function WorksPjList(props) {
    // useContext 사용
    const { selProjectData, setSelProjectData } = useContext(SelectCon);
    // navigate 사용
    const navigate = useNavigate();
  

  //상태관리변수
  // 3.호버된 li의 인덱스 상태 관리
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // 4. bg 변경을 위한 상태변수
  const [objectBg, setObjectBg] = useState(null);

  const handleObjectEnter = (index, listBg) => {
    setHoveredIndex(index);
    setObjectBg(listBg);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setObjectBg(null);
  };

  const handleItemClick = useCallback(
    (item) => {
      setTimeout(() => {
        setSelProjectData(item);
        navigate("/WorksDetail"); // WorksDetail 페이지로 이동
      }, 10);
    },
    [setSelProjectData, navigate]
  );

  // 코드리턴구역//////////////////////////////////////
  return (
    <>
      <ul className="pj-list-wrap">
        {worksData.map((v, i) => (
          <>
            <li
              className="ani-target"
              key={i}
              onMouseEnter={() =>
                handleObjectEnter(
                  i,
                  `url(${process.env.PUBLIC_URL}${v.isrc.bg})`
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className="mo-title">
                <div className="eng-title gilda-display-regular">
                  {v.engtitle.split("^").map((v, i) => (
                    <span key={"eng" + v + i}>{v}</span>
                  ))}
                </div>
                <div className="kor-title">
                  {v.title.split("^").map((v, i) => (
                    <span key={"kor" + v + i}>{v}</span>
                  ))}
                </div>
              </div>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(v);
                  console.log("item 2", v);
                }}
              >
                <div className="img-wrap">
                  <div className="kor-title">
                    {v.title.split("^").map((v, i) => (
                      <span key={i}>{v}</span>
                    ))}
                  </div>
                  <div className="imgbx ">
                    <img
                      src={process.env.PUBLIC_URL + v.isrc.workslist}
                      alt={v.title}
                    />
                  </div>
                </div>
              </a>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default WorksPjList;
