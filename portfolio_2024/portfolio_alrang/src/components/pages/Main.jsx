//portfolio pj - Main컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
//css
import "../../css/main.scss";
///////////////////import area//////////////////
function Main() {
    return (
        <main id="main-area">
            {/* 1. 메인 비쥬얼 영역 */}
            <section id='main-visual-area'>
                {/* 1)텍스트 박스 : 타이틀, 텍스트 */}
                <div className="text-wrap">
                    <h2 className='title'>Alrang’s</h2>
                    <h2 className='title'>Work Place</h2>
                    <div className="text-box">
                    <span className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting </span>
                    <span className='text'>industry. Lorem Ipsum has been the industry's standard dummy text </span>
                    </div>
                </div>
                {/* 2)스크롤 다운 : 아이콘, 텍스트*/}
                <div className="scroll-down">
                    <div className="ani-bar"></div>
                    <span>SCROLL DOWN </span>
                </div>
            </section>
            {/* 2. 프로필 영역 */}
            <section id='profile-area'>
                {/* 1) 이미지 박스 */}
                <div className="cont-wrap">
                <div className="imgbx">
                    <img src={process.env.PUBLIC_URL+"/images/main_img.jpg"} alt="메인 이미지" />
                </div>
                {/* 2) 자기소개 : 타이틀, 텍스트 */}
                <div className="text-wrap">
                    <h4 className='title'>About Me</h4>
                    <span className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived </span>
                </div>
                {/* 3) 스킬트리 : [타이틀, 게이지] * n*/}
                <div className="skil-list-wrap">
                    {/* 임시 삽입 */}
                    <div className="aa">
                        <img src={process.env.PUBLIC_URL+"/images/Frame 11.png"} alt="" />
                    </div>
                </div>
                </div>
            </section>
            {/* 3. CONTACT US */}
            <section id='contact-area'>
                {/* 1)텍스트박스 : 타이틀, 이메일, 텍스트, 밑줄 요소 */}
                <div className="text-box">
                <h3 className='title'>CONTACT US</h3>
                <span className="email gilda-display-regular">
                duudaa0939@gmail.com
                </span>
                <span className='text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                </span>
                <span className="under-line-w"></span>
                </div>
                {/* 2) 포트폴리오 이동 링크 */}
                <Link to="/WorksList" className='gilda-display-regular'>Works more view</Link>
            </section>
        </main>
    );
}

export default Main;