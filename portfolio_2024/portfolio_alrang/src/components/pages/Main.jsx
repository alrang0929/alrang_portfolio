//portfolio pj - Main컴포넌트
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
//css
import "../../css/main.scss";
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
            const aniObject = $("#profile-area .cont-wrap");
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting{" "}
                        </span>
                        <span className="text">
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text{" "}
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
                <div className="cont-wrap">
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived{" "}
                        </span>
                    </div>
                    {/* 3) 스킬트리 : [타이틀, 게이지] * n*/}
                    <div className="skil-list-wrap">
                        {/* 임시 삽입 */}
                        <div className="aa">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/Frame_11.png"
                                }
                                alt=""
                            />
                        </div>
                    </div>
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived
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
