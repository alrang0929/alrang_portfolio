import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//css
import "../../css/work_list.scss";
///import area///////////////////////////////////

function WorksList(props) {

    //[상태관리변수]
    //1. 현재 main배경 이미지 상태체크
    const[mainBg, setMainBg] = useState(null);

    //마우스가 올라가면? 메인 BG를 li BG로 설정
    const handleMouseEnter = (listBg) => {
        setMainBg(listBg);
    };
    //마우스가 떠나면? 원래 main bg로 되돌림
    const handleMouseLeave = () => {
        setMainBg(null);
    };

    const navigate = useNavigate();
    const goLink = ()=>{
        navigate("/WorksDetail");
    };
    

    //코드리턴구역/////////////////
    return (
        <main id='works-list-area' style={{ backgroundImage: mainBg }}>
           <ul>
            {/* 테스트 리스트 */}
            <li
            onMouseEnter={()=>handleMouseEnter(`url('/images/Rectangle_27.jpg')`)}
            onMouseLeave={handleMouseLeave}
            onClick={goLink}
            >
                <div className="info-text-wrap">
                    <h3 className='title'>title
                    titletitletitle</h3>
                    <div className="category-wrap">
                        <span>UX / UI desing</span>
                        <span>fe Development</span>
                    </div>
                    <div className="info">
                        <div className="info-wrap">
                            <div className="tit">date</div>
                            <div className="date cont-text">2024.07.28</div>
                        </div>
                        <div className="info-wrap">
                            <div className="tit">use tool</div>
                            <div className="tool cont-text">react, jQuery, SCSS, HTML5</div>
                        </div>
                    </div>
                </div>
            </li>
            {/* 테스트 리스트 끝 */}
            {/* 테스트 리스트 */}
            <li>
                <div className="info-text-wrap">
                    <h3 className='title'>title
                    titletitletitle</h3>
                    <div className="category-wrap">
                        <span>UX / UI desing</span>
                        <span>fe Development</span>
                    </div>
                    <div className="info">
                        <div className="info-wrap">
                            <div className="tit">date</div>
                            <div className="date cont-text">2024.07.28</div>
                        </div>
                        <div className="info-wrap">
                            <div className="tit">use tool</div>
                            <div className="tool cont-text">react, jQuery, SCSS, HTML5</div>
                        </div>
                    </div>
                </div>
            </li>
            {/* 테스트 리스트 끝 */}
            {/* 테스트 리스트 */}
            <li>
                <div className="info-text-wrap">
                    <h3 className='title'>title
                    titletitletitle</h3>
                    <div className="category-wrap">
                        <span>UX / UI desing</span>
                        <span>fe Development</span>
                    </div>
                    <div className="info">
                        <div className="info-wrap">
                            <div className="tit">date</div>
                            <div className="date cont-text">2024.07.28</div>
                        </div>
                        <div className="info-wrap">
                            <div className="tit">use tool</div>
                            <div className="tool cont-text">react, jQuery, SCSS, HTML5</div>
                        </div>
                    </div>
                </div>
            </li>
            {/* 테스트 리스트 끝 */}
        
           </ul>
           <div className="ani-bar"></div>
        </main>
    );
}

export default WorksList;