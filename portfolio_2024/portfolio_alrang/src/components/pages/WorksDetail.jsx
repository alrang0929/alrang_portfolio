import React, { useContext } from "react";
import { SelectCon } from "./SelectCon.jsx";

////import area////////////////////////////

function WorksDetail() {

    const selData = useContext(SelectCon);

    /////코드 리턴구역 ///////////////////////
    return (
        <section id="works-detail">
            <div className="img-wrap">
                <img src="" alt="" />
            </div>
                <div className="info-text-wrap">
                    <h3 className="title"></h3>
                    <div className="category-wrap">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="info">
                        <div className="info-wrap">
                            <div className="tit">DATE</div>
                            <div className="date cont-text"></div>
                        </div>
                        <div className="info-wrap">
                            <div className="tit">USE TOOL</div>
                            <div className="tool cont-text"></div>
                        </div>
                    </div>
                {/* 5. 버튼 박스(pdf다운, view demo) */}
                <div className="button-wrap">
                    <button>view gide pdf</button>
                    <button>view demo</button>
                </div>
            </div>
        </section>
    );
}

export default WorksDetail;
