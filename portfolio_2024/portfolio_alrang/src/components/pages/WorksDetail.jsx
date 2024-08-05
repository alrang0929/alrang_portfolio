import React, { useContext, useEffect, useRef, useState } from "react";
import { SelectCon } from "./SelectCon.jsx";
import "../../css/work_detail.scss";

////import area////////////////////////////

function WorksDetail() {
    //1. workList컴포넌트에서 클릭된 li에서 전달받아오는 데이터
    const selData = useContext(SelectCon);
    console.log("데이터 잘 들고왔나?", selData.selProjectData);
    // useContext로 들고온 값이 새로고침이 될때마다 휘발되서 useRef로 저장할까 했는데
    //그럼 리렌더링시 화면에 반영되지 않을 가능성이 있어 상태관리 변수로 대체

    //[상태관리변수]
    const [pdData, setPdData] = useState(selData.selProjectData);
    // 화면 리랜더링 구역/////////////////////////////////////
    useEffect(() => {
        setPdData(selData.selProjectData); // selData 변경될 때 마다 pdData 업데이트
        console.log("pdData.url.pdf",pdData.url.pdf);
    }, [selData]);
    ///low code////////////////////////////////////
    // const pdData = selData.selProjectData;
    // const pdData = useRef(selData.selProjectData);
    // console.log("pdData.category.split("^")",pdData.category.split("^"));
    // console.log("pdData",pdData);

    /////코드 리턴구역 ///////////////////////
    return (
        <section id="works-detail" className="fxbox">
            <div className="img-wrap">
                <img
                    src={`${process.env.PUBLIC_URL}${pdData.isrc.ipage}`}
                    alt={pdData.title}
                />
            </div>
            <div className="fixedbox">
                <div className="info-text-wrap">
                    <h3 className="title">{pdData.title}</h3>
                    <div className="category-wrap">
                        <span>{pdData.category}</span>
                    </div>
                    <div className="info">
                        <div className="info-wrap">
                            <div className="tit">DATE</div>
                            <div className="date cont-text">
                                {pdData.info.split("^")[0]}
                            </div>
                        </div>
                        <div className="info-wrap">
                            <div className="tit">USE TOOL</div>
                            <div className="tool cont-text">
                                {pdData.info.split("^")[1]}
                            </div>
                        </div>
                    </div>
                    <div className="text-wrap">{pdData.text}</div>
                    {/* 5. 버튼 박스(pdf다운, view demo) */}
                    <div className="button-wrap fxbox">
                        <a href={pdData.url.pdf}
                        target="_blank"
                        rel="noopener noreferrer">
                            <button className="line-button fxbox">
                                <div className="icon-box icon-file"></div>
                                <span>view gide pdf</span>
                            </button>
                        </a>
                        <button className="fill-button fxbox">
                        <div className="icon-box icon-page"></div>
                            <span>
                            view demo
                            </span>
                            </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorksDetail;
