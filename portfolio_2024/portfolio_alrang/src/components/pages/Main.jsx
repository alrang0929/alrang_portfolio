//portfolio pj - Main컴포넌트
import React, { useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import $, { event } from "jquery";
//css
import "../../css/main.scss";
//data
import { skillList } from "../data/skill";
import { worksData, worksThumbs } from "../data/works";
///////////////////import area//////////////////
function Main() {
  // [참조변수]//////////////////////////////////
  // 1. 이미지가 마우스 따라다니는 값을 저장하기 위한 참조변수
  const titleWrapRef = useRef(null);
  // 2. li 가로값 저장을 위한 참조변수
  const liRef = useRef(null);
  // 3. 슬라이더 기능 구현을 위한 참조변수
  const sliderBtnRef = useRef(null);
  const slideListRef = useRef(null);
  // [상태관리변수]//////////////////////////////////
  // 1. 리스트 넓이값을 알기위한 상태변수
  const [liWidth, setLiWidth] = useState(0);
  // 2. 마우스 이미지 따라다니는 효과의 이미지 배열 저장
  const [images, setImages] = useState([]);
  // 대상선정
  // show-works-box의 li 한개 넓이
  // const liWidth = $('.show-works-box ul li').eq(1).width();
  // console.log("target",target);
  // console.log("liWidth",liWidth);

  // console.log("미친데이터", worksData);

  //화면 랜더링 구역/////////////////////////////////////////////////
  // 한번만 실행
  useEffect(() => {
    //ul 감싸고 있는 박스의 whith 값을 구하기 위함
    if (liRef.current) {
      setLiWidth(liRef.current.offsetWidth);
    }

    //슬라이더 기능구현
    // 대상선정
    const $sliderBtns = $(sliderBtnRef.current).find("li"); // jQuery 객체로 변환
    const $slideList = $(slideListRef.current);
    // const inner = $(".show-works-box ul li");

    $sliderBtns.each((idx, ele) => {
      $(ele).on("mouseenter", () => {
        $slideList.css({
          left: -100 * idx + "%",
        });
      }); //on
    }); //each

    return () => {
      $sliderBtns.off("click"); //컴포넌트 언마운트시 핸들러 제거
    };
  }, []);

  //images 의존성
  useEffect(() => {
    let randomImage;
    // let intervalId;
    let animationFrameId; // requestAnimationFrame ID 저장할 변수 추가
    let isMouseOverTitleWrap = false; //나타내는 상태 변수 추가
    let latestMouseEvent = null; // 마지막 mousemove 이벤트 저장할 변수 추가

    const handleMouseMove = (event) => {
      if (titleWrapRef.current && titleWrapRef.current.contains(event.target)) {
        isMouseOverTitleWrap = true;
        latestMouseEvent = event; // 마지막 이벤트 저장
      } else {
        isMouseOverTitleWrap = false;
      }
    }; //handleMouseMove

    const createRandomImage = () => {
      if (isMouseOverTitleWrap && latestMouseEvent) {
        // 이미지 배열에서 랜덤 이미지 선택
        randomImage = new Image();
        randomImage.src = `/images/random_img/random_0${
          Math.floor(Math.random() * 4) + 1
        }.jpg`;
        // 이미지 페이드 인 애니메이션
        $(randomImage).css({ opacity: 0 }); // 페이드 인 전에 투명도 0으로 설정

        // 이미지를 먼저 추가하고 페이드 인 애니메이션 실행
        titleWrapRef.current.appendChild(randomImage);
        setImages([...images, randomImage]);

        // .title-wrap 요소의 실제 위치 정보 가져오기
        const titleWrapRect = titleWrapRef.current.getBoundingClientRect();

        // 이미지 스타일 설정 및 추가
        const imageWidth = 128;
        const imageHeight = 150;
        $(randomImage).css({
          position: "absolute",
          left:
            latestMouseEvent.clientX -
            imageWidth / 2 -
            titleWrapRect.left +
            (Math.random() * 50 - 25) +
            "px",
          top:
            latestMouseEvent.clientY -
            imageHeight / 2 -
            titleWrapRect.top +
            (Math.random() * 50 - 25) +
            "px",
          width: imageWidth + "px",
          height: imageHeight + "px",
          objectFit: "cover",
          zIndex: 1,
        });
        $(randomImage).animate({ opacity: 1 }, 100);

        // 잠시 후 이미지 제거 (페이드 아웃 효과 추가)
        setTimeout(() => {
          $(randomImage).animate({ opacity: 0 }, 100, function () {
            this.remove();
            setImages(images.filter((img) => img !== randomImage));
          });
        }, 400);
      } //if
      // 다음 프레임 요청
      animationFrameId = requestAnimationFrame(createRandomImage);
    }; //createRandomImage
    window.addEventListener("mousemove", handleMouseMove);
    const handleMouseEnter = () => {
      isMouseOverTitleWrap = true;
      createRandomImage(); // 마우스가 들어왔을 때 바로 첫 이미지 생성
    };

    const handleMouseLeave = () => {
      isMouseOverTitleWrap = false;
      cancelAnimationFrame(animationFrameId); // requestAnimationFrame 중지
    };

    if (titleWrapRef.current) {
      titleWrapRef.current.addEventListener("mouseenter", handleMouseEnter);
      titleWrapRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    //코드 정리
    return () => {
      // window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleMouseMove);
      if (titleWrapRef.current) {
        titleWrapRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        titleWrapRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
      cancelAnimationFrame(animationFrameId); // 컴포넌트 언마운트 시 requestAnimationFrame 중지
      images.forEach((img) => img.remove());
    };
  }, [images]); // images 상태가 변경될 때마다 useEffect 실행

  ///코드 리턴구역 /////////////////////////////////////////////////////////
  return (
    <main id="main-area">
      {/* 1. 메인 슬라이드 */}
      <div id="main-visual-area">
        {/* 1) 타이틀 박스 */}
        {/* 2) mouse leave시 등장하는 이미지 박스 : ref값에 배열 저장하여 액팅 */}
        <div className="title-wrap gilda-display-regular" ref={titleWrapRef}>
          <span>Alrang’s</span>
          <span>Work Place</span>
        </div>
        {/* 3) works list 리스트 */}
        <div className="works-list-wrap fxbox">
          <div className="title">selected project</div>
          <ul className="works-list fxbox" ref={sliderBtnRef}>
            {worksThumbs.map((v, i) => (
              <li
                key={i}
                // onClick={}
              >
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="imgbx">
                    <img src={process.env.PUBLIC_URL + v.isrc} alt={v.key} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4) works list 호버시 우측에서 등장하는 이미지 */}
        <div className="show-works-box" style={{ width: liWidth + "px" }}>
          <ul
            className="fxbox"
            ref={slideListRef}
            style={{ transition: "left 0.2s ease" }}
          >
            {worksData.map((v, i) => (
              <li key={i} ref={liRef}>
                <a href="">
                  <div className="title">
                    {v.title.split("^").map((v, i) => (
                      <span key={i}>{v}</span>
                    ))}
                  </div>
                  <div className="imgbx">
                    <img
                      src={process.env.PUBLIC_URL + v.isrc.mainlist}
                      alt={v.title}
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/**************** 2. 프로필 영역: 인삿말, 스킬, 인포 ****************/}
      <div id="profile-area">
        <div id="intro-area">
          {/* 1) 인삿말 */}
          <div className="hello-text-wrap">
            {/* 1)hello-img */}
            <div className="imgbx">
              <img
                src={process.env.PUBLIC_URL + "/images/main/PC_hello.jpg"}
                alt="hello"
              />
            </div>
            {/* 2)back-text-bubbles*/}
            <div className="back-text-bubbles-wrap">
              <ul>
                <li>
                  <span>
                    오늘 <b>점심</b> 뭐먹지
                  </span>
                </li>
                <li>
                  <span>
                    <b>commit</b> 하기 전에 생각했나요?
                  </span>
                </li>
                <li>
                  <span>저장저장..</span>
                </li>
                <li>
                  <span>
                    이 <b>에러</b>의 정체는...??^ㅠ
                  </span>
                </li>
              </ul>
              <div className="introduction">
                안녕하세요, 언제나 고민하는
                <b>프론트앤드 개발자 김지현</b>입니다.
              </div>
            </div>
            {/* 3)BG acting text */}
            <div className="ani-text gilda-display-regular">
              Alrang’s Work Place
            </div>
          </div>
          {/* 2) 스킬트리 */}
          <div className="skill-wrap">
            <div className="title"></div>
            <ul className="skill-list fxbox">
              {skillList.map((v, i) => (
                <li className="fxbox" key={i}>
                  <div className="icon">
                    <img
                      src={process.env.PUBLIC_URL + v.isrc}
                      alt={v.skillName}
                    />
                  </div>
                  <div className="text">{v.skillName}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* 3) 인포 텍스트 */}
          <div className="info-text-wrap">
            <div className="big-title">
              <span> connecting</span>
              <span>the dots</span>
            </div>
            <div className="img-wrap fxbox">
              <div className="imgbx">
                <img
                  src={process.env.PUBLIC_URL + "/images/main/PC_main_jabs.jpg"}
                  alt="스티븐 잡스"
                />
              </div>
              <div className="text">
                스티븐 잡스 유명한 격언이자 지금의 제가 있게 해준 격언입니다.
                웹이 좋아 웹디자이너로 이 세계에 발을 들이고 팀 구성원들,
                사용자들과 소통을 하다 생긴 물음표를 해결해나가다보니 사용자들과
                가장 밀접한 상호관계를 가지고 있는 프론트앤드 개발자로 전향을
                결심하게 되었습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*********************** 2. 프로필영역 끝 ***********************/}
      {/* 3. works 영역: works list */}
      <div id="works-list-area">
        {/* ul은 그리드로 구성, 12col, a는 각 프로젝트로 링크 */}
        <ul>
          {worksData.map((v, i) => (
            <li key={i}>
              <a href="">
                <div className="img-wrap">
                  <div className="eng-title gilda-display-regular">
                    {v.engtitle}
                  </div>
                  <div className="kor-title">{v.title}</div>
                  <div className="imgbx">
                    <img
                      src={process.env.PUBLIC_URL + v.isrc.workslist}
                      alt={v.title}
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* 4. conect us */}
      <div id="conect-us-area">
        {/* 1) 얼굴 이미지 */}
        <div className="imgbx">
          <img
            src={process.env.PUBLIC_URL + "/images/main/PC_conectus.jpg"}
            alt="conect face"
          />
        </div>
        {/* 2) 타이틀 */}
        <div className="title">CONTACT US</div>
        {/* 3) 정보 */}
        <ul>
          <li className="fxbox">
            <div className="icon-box">
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/icon_mail.png"}
                  alt="email"
                />
              </div>
              <div className="text">eMail</div>
            </div>
            <div className="text">sellbell0929@gmail.com</div>
          </li>
          <li className="fxbox">
            <div className="icon-box">
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/icon_git.png"}
                  alt="git"
                />
              </div>
              <div className="text">Github</div>
            </div>
            <div className="text">
              https://github.com/alrang0929/alrang_portfolio
            </div>
          </li>
        </ul>
      </div>
      {/* 저작권 표시 */}
      <div className="copy">© 2024 Alrang. All rights reserved.</div>
    </main>
  );
}

export default Main;
