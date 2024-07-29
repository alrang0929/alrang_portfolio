//portfolio pj - Main컴포넌트
import React from 'react';
///////////////////import area//////////////////
function Main() {
    return (
        <main id="main-area">
            {/* 1. 메인 비쥬얼 영역 */}
            <section id='main-visual-area'>
                {/* 1)텍스트 박스 : 타이틀, 텍스트 */}
                <div className="text-wrap">
                    <h2 className='title'>Alrang’s
                    Work Place</h2>
                    <span className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting </span>
                    <span className='text'>industry. Lorem Ipsum has been the industry's standard dummy text </span>
                </div>
                {/* 2)스크롤 다운 : 아이콘, 텍스트*/}
                <div className="scroll-down">
                    <span>SCROLL DOWN </span>
                </div>
            </section>
            {/* 2. 프로필 영역 */}
            <section id='profile-area'>
                {/* 1) 이미지 박스 */}
                <div className="imgbx">
                    <img src="" alt="" />
                </div>
                {/* 2) 자기소개 : 타이틀, 텍스트 */}
                {/* 3) 스킬트리 : [타이틀, 게이지] * n*/}

            </section>
            {/* 3. CONTACT US */}
            <section id='contact-area'>
                {/* 1)텍스트박스 : 타이틀, 이메일, 텍스트, 밑줄 요소 */}
                {/* 2) 포트폴리오 이동 링크 */}
            </section>
        </main>
    );
}

export default Main;