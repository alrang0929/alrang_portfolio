//portfolio pj - Main컴포넌트
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
//css
import "../../css/main.scss";
//data
import {skilList} from "../data/skil"; 

///////////////////import area//////////////////
function Main() {

    //상태관리변수
    // 1. 애니 상태관리변수
    const [isAni, setIsAni] = useState(false);

    //화면 랜더링 구역////////////////////
    useEffect(() => {

        // 스크롤 위치 도달시 애니
        const handleScroll =()=>{
            //대상선정
            const aniObject = $("#profile-area .profile-wrap");
            //윈도우, 스크롤 영역 변수
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
            const triggerPoint = windowHeight / 2;

            if(scrollTop > triggerPoint && !isAni){
                aniObject.animate({
                    opacity: 1,
                    marginTop: 0,
                },1000);
                setIsAni(true);
            }//if
        };
        $(window).on("scroll", handleScroll);
        return()=>{
            $(window).off("scroll", handleScroll);
        }
        
    }, [isAni]);

    ///코드 리턴구역 /////////////////////////////////////////////////////////
    return (
        <main id="main-area">
            {/* 1. 메인 비쥬얼 영역 */}
            <section id="main-visual-area">
                {/* 1)텍스트 박스 : 타이틀, 텍스트 */}
                <div className="text-wrap">
                    <h2 className="title gilda-display-regular">Alrang’s</h2>
                    <h2 className="title gilda-display-regular">Work Place</h2>
                    <div className="text-box">
                        <span className="text">
                        A new beginning combines three-dimensional excitement and fear, but
                        </span>
                        <span className="text">
                        when you take courage and let go, your mouse begins to grow in an instant.
                        </span>
                     
                    </div>
                </div>
                {/* 2)스크롤 다운 : 아이콘, 텍스트*/}
                <div className="scroll-down">
                    <div className="ani-bar"></div>
                    <span>SCROLL DOWN </span>
                </div>
            </section>
            {/* 2. 프로필 영역 */}
            <section id="profile-area">
                {/* 1) 이미지 박스 */}
                <div className="profile-wrap">
                    <div className="imgbx">
                        <img
                            src={
                                process.env.PUBLIC_URL + "/images/main_img.jpg"
                            }
                            alt="메인 이미지"
                        />
                    </div>
                    {/* 2) 자기소개 : 타이틀, 텍스트 */}
                    <div className="text-wrap">
                        <h4 className="title gilda-display-regular">
                            About Me
                        </h4>
                        <span className="text">
                        웹이 좋아 시작하게된 웹디자이너, 언제부턴가 시각적인 것들 뿐만 아니라 그 뒤에 있는 개발자의 영역이 궁금해졌습니다. 그래서 같이 프로잭트를 진행하던 프론트앤드의 뒤를 기웃거리며 호기심을 하나 둘 채워가다 프론트엔드 개발자에 도전하게 되었습니다.
                        디자인 기획 경험을 통해 프로젝트 전반에 대한 이해도가 높으며, 팀원들과 함께 문제를 분석하고 해결하는 능력을 갖추고 있다고 생각합니다. 이러한 강점은 디자이너, 클라이언트들과 소통과 협업을 할 때 좋은 시너지를 가져올 것이라고 자신합니다.
                        </span>
                    </div>
                    {/* 3) 스킬트리 : [타이틀, 게이지] * n*/}
                </div>
                    <div className="skil-list-wrap">
                    <h4 className="title gilda-display-regular">
                            About Skil
                        </h4>
                        <ul className="skil-list fxbox">
                           {skilList.map((v,i)=>
                            <li key={i} className="fxbox">
                                <div className="icon-box">
                               <img src={process.env.PUBLIC_URL +v.isrc} alt="" />
                                </div>
                                <span className="icon-text">{v.skillName}</span>
                            </li>
                           )}
                        </ul>
                    </div>
            </section>
            {/* 3. CONTACT US */}
            <section id="contact-area">
                {/* 1)텍스트박스 : 타이틀, 이메일, 텍스트, 밑줄 요소 */}
                <div className="text-box">
                    <h3 className="title gilda-display-regular">CONTACT US</h3>
                    <div className="email gilda-display-regular">
                        duudaa0939@gmail.com
                    </div>
                    <div className="text">
                    If you are curious about me? here ▼
                    </div>
                    <span className="under-line-w"></span>
                </div>
                {/* 2) 포트폴리오 이동 링크 */}
                <Link to="/Works" className="gilda-display-regular">
                    Works more view
                </Link>
            </section>
        </main>
    );
}

export default Main;
