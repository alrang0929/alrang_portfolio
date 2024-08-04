import React, { useContext } from "react";
import { SelectCon } from "./SelectCon.jsx";
import "../../css/work_detail.scss";

////import area////////////////////////////

function WorksDetail() {
    //1. workList컴포넌트에서 클릭된 li에서 전달받아오는 데이터
    const selData = useContext(SelectCon);
    console.log("데이터 잘 들고왔나?", selData.selProjectData);
    const pdData = selData.selProjectData;
    console.log("pdData.category.split("^")",pdData.category.split("^"));
    console.log("pdData.url.pdf",pdData.url.pdf);

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
                        <div className="date cont-text">{pdData.info.split("^")[0]}</div>
                    </div>
                    <div className="info-wrap">
                        <div className="tit">USE TOOL</div>
                        <div className="tool cont-text">{pdData.info.split("^")[1]}</div>
                    </div>
                </div>
                {/* 5. 버튼 박스(pdf다운, view demo) */}
                <div className="button-wrap" target="_blank" rel="noopener noreferrer">
                    <a href={pdData.url.pdf}>
                    <button>view gide pdf</button>
                    </a>
                    <button>view demo</button>
                </div>
            </div>
            </div>
        </section>
    );
}

export default WorksDetail;
