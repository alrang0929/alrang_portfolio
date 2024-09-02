import React, { useContext, useEffect, useState } from "react";
import { SelectCon } from "./SelectCon.jsx";
import "../../css/work_detail.scss";

////import area////////////////////////////

function WorksDetail() {
  // 상태관리변수
  // 1. 조건연상자를 사용하기 위한 가로값을 구해오는 상태관리변수
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const selData = useContext(SelectCon);
  console.log("데이터 잘 들고왔나?", selData.selProjectData);
  //selProjectData : 최상위 컴포넌트 context에서 불러오고 있는 상태변수


  // useContext로 들고온 값이 새로고침이 될때마다 휘발되서 useRef로 저장할까 했는데
  //그럼 리렌더링시 화면에 반영되지 않을 가능성이 있어 상태관리 변수로 대체

  //[상태관리변수]
  const [pdData, setPdData] = useState(selData.selProjectData);

  // 화면 리랜더링 구역/////////////////////////////////////
  //selData 의존
  useEffect(() => {
    setPdData(selData.selProjectData); // selData 변경될 때 마다 pdData 업데이트
    
  }, [selData]);
  ///low code////////////////////////////////////
  // const pdData = selData.selProjectData;
  // const pdData = useRef(selData.selProjectData);
  // console.log("pdData.category.split("^")",pdData.category.split("^"));
  // console.log("pdData",pdData);

  //한번만 실행
  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])



  /////코드 리턴구역 ///////////////////////
  return (
    <section id="works-detail" className="fxbox">
      <div className="img-wrap">
        <a href={pdData.url.page} target="_blank" rel="noopener noreferrer">
          <img
            src={`${process.env.PUBLIC_URL}${pdData.isrc.ipage}`}
            alt={pdData.title}
          />
        </a>
      </div>
      <div className="fixedbox">
        <div className="info-text-wrap">
          {
            // 삼항연산자로 변경
            //해석: windowWidth가 999 보다 크냐?
            // ㄴ> split("^")로 배열을 생성하여 셋팅해라
            windowWidth > 999 ? 
            pdData.title.split("^").map((v, i) => (
              <h3 className="title">{v}</h3>
            )) :
            // 아니냐? "^" 를 제외하고 타이틀을 셋팅해라
            //replace 메서드 사용 ("^"를 찾아 " "로 재배치 해라)
            <h3 className="title">{pdData.title.replace('^', ' ')}</h3>
          }

          <div className="category-wrap">
            <span>{pdData.category}</span>
          </div>
          <div className="info">
            <div className="info-wrap">
              <div className="tit">DATE</div>
              <div className="date cont-text">{pdData.info.split("^")[0]}</div>
            </div>
            <div className="info-wrap">
              <div className="tit">USE TOOL</div>
              <div className="tool cont-text">{pdData.info.split("^")[1]}</div>
            </div>
          </div>
          <div className="text-wrap">{pdData.text}</div>
          {/* 5. 버튼 박스(pdf다운, view demo) */}
          <div className="button-wrap fxbox">
            <a href={pdData.url.pdf} target="_blank" rel="noopener noreferrer">
              <button className="line-button fxbox">
                <div className="icon-box icon-file"></div>
                <span>view guide pdf</span>
              </button>
            </a>
            <a href={pdData.url.page} target="_blank" rel="noopener noreferrer">
              <button className="fill-button fxbox">
                <div className="icon-box icon-page"></div>
                <span>view demo</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksDetail;
