//portfolio pj - Main컴포넌트
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import $ from "jquery";

//css
import "../../css/main.scss";
//data
import { skillList } from "../data/skill";
import { worksData, worksThumbs } from "../data/works";
import SlidingText from "../func/SlideDownText";
import ScrollFadeIn from "../func/scroll_fade_in";
import { SelectCon } from "./SelectCon";
import { Navigate, useNavigate } from "react-router-dom";

///////////////////import area//////////////////
function Main() {
  // useContext 사용
  const { selProjectData, setSelProjectData } = useContext(SelectCon);
  // navigate 사용
  const navigate = useNavigate();

  // [참조변수]//////////////////////////////////
  // 1. 이미지가 마우스 따라다니는 값을 저장하기 위한 참조변수
  const titleWrapRef = useRef(null);
  // 2. li 가로값 저장을 위한 참조변수
  const liRef = useRef(null);
  // 3. 이미지 위치저장 변수
  const imageRef = useRef(null);
  // 3. 슬라이더 기능 구현을 위한 참조변수
  const sliderBtnRef = useRef(null);
  const slideListRef = useRef(null);

  // [상태관리변수]//////////////////////////////////
  // 1. 리스트 넓이값을 알기위한 상태변수
  const [liWidth, setLiWidth] = useState(0);
  // 2. 마우스 이미지 따라다니는 효과의 이미지 배열 저장
  const [images, setImages] = useState([]);
  // 3.호버된 li의 인덱스 상태 관리
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // 4. bg 변경을 위한 상태변수
  const [objectBg, setObjectBg] = useState(null);
  // 4. 애니 상태 확인을 위한 상태관리변수
  const [isAni, setIsAni] = useState(false);

  /****************** 1. 호버시 li에 맞는 div 보이는 기능구현 ******************/
  const handleObjectEnter = (index, listBg) => {
    setHoveredIndex(index);
    setObjectBg(listBg);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setObjectBg(null);
  };

  /* 2. 클릭시 해당되는 디테일 페이지로 이동 */
  // const goLink = useCallback(() => {
  //   navigate("/WorksDetail");
  // }, [navigate]);
  // //화면 랜더링 구역/////////////////////////////////////////////////
  // useEffect(() => {
  //   if (selProjectData) { // selProjectData가 설정되었을 때만 페이지 이동
  //     goLink();
  //   }
  // }, [selProjectData]); // selProjectData 또는 goLink가 변경될 때만 useEffect 실행

  const handleItemClick = useCallback(
    (item) => {
      setTimeout(() => {
        setSelProjectData(item);
        navigate("/WorksDetail"); // WorksDetail 페이지로 이동
      }, 10);
    },
    [setSelProjectData, navigate]
  );

  useEffect(() => {
    //ul 감싸고 있는 박스의 whith 값을 구하기 위함
    if (liRef.current) {
      setLiWidth(liRef.current.offsetWidth);
    }
    /***************************메인 비쥬얼 영역 슬라이더 기능구현 ***************************/
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
  }, []);

  useEffect(() => {
    const aniTg = $(".ani-target");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAni) {
            // $(entry.target).animate({ opacity: 1, transform: "translate(0, -10%)", }, 1000);
            $(entry.target).css("animation", "slideUp 0.5s ease forwards");
            // $(entry.target).style.animation = `slideUp 0.5s ease forwards`; << js와 jquary 혼용 ㄴㄴ 따라서 jquary css 속성에 animation 속성
            setIsAni(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    aniTg.each((index, element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // 빈 배열 추가

  /********************* 마우스 엔터 이미지 기능 구현 *********************/
  // 마우스 엔터시 셋팅된 이미지 배열에 추가
  const handleMouseEnter = () => {
    const randomImage = `/images/random_img/random_0${
      Math.floor(Math.random() * 4) + 1
    }.jpg`;
    setImages([...images, randomImage]);
  };

  const handleMouseMove = (event) => {
    if (imageRef.current && titleWrapRef.current) {
      const titleWrapRect = titleWrapRef.current.getBoundingClientRect();

      // 마우스 좌표가 title-wrap 박스 안에 있는지 확인
      const isWithinTitleWrap =
        event.clientX > titleWrapRect.left &&
        event.clientX < titleWrapRect.right &&
        event.clientY > titleWrapRect.top &&
        event.clientY < titleWrapRect.bottom;

      if (isWithinTitleWrap) {
        // title-wrap 박스 안에 있을 때만 이미지 위치 업데이트
        imageRef.current.style.top = `${
          event.clientY - titleWrapRect.top - imageRef.current.offsetHeight / 2
        }px`;
        imageRef.current.style.left = `${
          event.clientX - titleWrapRect.left - imageRef.current.offsetWidth / 2
        }px`;
      } else {
        // title-wrap 박스 밖에 있을 때 이미지 숨기기 (선택 사항)
        imageRef.current.style.display = "none";
      }
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  ///코드 리턴구역 /////////////////////////////////////////////////////////
  return (
    <main id="main-area">
      {/* 1. 메인 슬라이드 */}
      <div id="main-visual-area">
        {/* 1) 타이틀 박스 */}
        {/* 2) mouse leave시 등장하는 이미지 박스 : ref값에 배열 저장하여 액팅 */}
        <div
          className="title-wrap"
          ref={titleWrapRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove} // title-wrap 내에서도 마우스 이동 추적
        >
          {images.map((image, index) => (
            <div
              className="random-img"
              key={index}
              style={{ zIndex: 9 }}
              // 이미지를 절대 위치로 설정
            >
              <img
                src={image}
                alt={`Random Image ${index}`}
                ref={index === images.length - 1 ? imageRef : null} // 가장 최근 이미지에 ref 연결
              />
            </div>
          ))}
          {/* 텍스트애니 있던 자리.. */}
          <SlidingText>
            <span className="gilda-display-regular">Alrang’s</span>
          </SlidingText>
          <SlidingText>
            <span className="gilda-display-regular">Work Place</span>
          </SlidingText>
          {/* <span className="gilda-display-regular">Alrang’s</span>
          <span className="gilda-display-regular">Work Place</span> */}
          <div className="scroll-down">
            scroll down
            <div className="ani-bar"></div>
          </div>
        </div>
        {/* 3) works list 리스트 */}
        <div className="works-list-wrap fxbox">
          <div className="title">selected project</div>
          <ul className="works-list fxbox" ref={sliderBtnRef}>
            {worksData.map((v, i) => (
              <li key={i}>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(v);
                    console.log("item 1", v);
                  }}
                >
                  <div className="imgbx">
                    <img
                      src={process.env.PUBLIC_URL + v.isrc.thumbs}
                      alt={v.key}
                    />
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
                <div className="title">
                  {v.title.split("^").map((v, i) => (
                    <span key={`title-${i}`}>{v}</span>
                  ))}
                </div>
                <div className="imgbx">
                  <img
                    src={process.env.PUBLIC_URL + v.isrc.mainlist}
                    alt={v.title}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/**************** 2. 프로필 영역: 인삿말, 스킬, 인포 ****************/}
      <div id="profile-area">
        {/* <div className="top-ani-text fxbox">
          <div className="gilda-display-regular">
            Alrang’s Work Place Alrang’s Work Place
          </div>
          <div className="gilda-display-regular">
            Alrang’s Work Place Alrang’s Work Place
          </div>
          <div className="gilda-display-regular">
            Alrang’s Work Place Alrang’s Work Place Alrang’s Work Place
          </div>
        </div> */}
        <div id="intro-area">
          {/* 1) 인삿말 */}
          <div className="hello-text-wrap">
            <div className="img-wrap">

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
            </div>
            {/* 1)hello-img */}
            <div className="imgbx">
              <img
                src={process.env.PUBLIC_URL + "/images/main/PC_hello.png"}
                alt="hello"
              />
            </div>
            </div>
            <div className="introduction">
              <span>안녕하세요, 언제나 고민하는</span>
              <span>
                <b>프론트엔드 개발자 김지현</b>입니다.
              </span>
            </div>
            {/* 2) 스킬트리 */}
            <div className="skill-wrap">
              <div className="title">Skill & Tool</div>
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
            {/* 3)BG acting text */}

            {/* <div className="bottom-ani-text fxbox">
              <div className="gilda-display-regular">
                Alrang’s Work Place Alrang’s Work Place
              </div>
              <div className="gilda-display-regular">
                Alrang’s Work Place Alrang’s Work Place
              </div>
              <div className="gilda-display-regular">
                Alrang’s Work Place Alrang’s Work Place Alrang’s Work Place
              </div>
            </div> */}
          </div>

          {/* 3) 인포 텍스트 */}
          <div className="info-text-wrap">
            {/* 텍스트애니 있던 자리.. */}
            <ScrollFadeIn >
              <div className="ani-title-object">

              <span className="ephesis-regular">connecting </span>
              <span className="ephesis-regular">the dots</span>
              </div>
            </ScrollFadeIn>
      
            {/* 텍스트애니 있던 자리.. */}
            <div className="img-wrap ani-target fxbox">
              <div className="imgbx">
                <img
                  src={process.env.PUBLIC_URL + "/images/main/PC_main_jabs.jpg"}
                  alt="스티븐 잡스"
                />
              </div>
              <div className="text">
                {/* <b>connecting the dots</b> */}
                스티븐 잡스 유명한 격언이자 지금의 제가 있게 해준 격언입니다.
                웹이 좋아 웹디자이너로 이 세계에 발을 들이고 팀 구성원들,
                사용자들과 소통을 하다 생긴 물음표를 해결해나가다보니 사용자들과
                가장 밀접한 상호관계를 가지고 있는 프론트엔드 개발자로 전향을
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

        {worksData.map((v, i) => (
          <>
            <div
              className="back-title-wrap"
              key={i}
              style={{ opacity: hoveredIndex === i ? 1 : 0 }}
            >
              <div className="eng-title gilda-display-regular">
                {v.engtitle.split("^").map((v, i) => (
                  <span key={"eng" + v + i}>{v}</span>
                ))}
              </div>
              <div className="kor-title">
                {v.title.split("^").map((v, i) => (
                  <span key={"kor" + v + i}>{v}</span>
                ))}
              </div>
            </div>
          </>
        ))}

        <ul>
          {worksData.map((v, i) => (
            <>
              <li
                className="ani-target"
                key={i}
                onMouseEnter={() =>
                  handleObjectEnter(
                    i,
                    `url(${process.env.PUBLIC_URL}${v.isrc.bg})`
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                <div className="mo-title">
                  <div className="eng-title gilda-display-regular">
                    {v.engtitle.split("^").map((v, i) => (
                      <span key={"eng" + v + i}>{v}</span>
                    ))}
                  </div>
                  <div className="kor-title">
                    {v.title.split("^").map((v, i) => (
                      <span key={"kor" + v + i}>{v}</span>
                    ))}
                  </div>
                </div>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(v);
                    console.log("item 2", v);
                  }}
                >
                  <div className="img-wrap">
                    <div className="kor-title">
                      {v.title.split("^").map((v, i) => (
                        <span key={i}>{v}</span>
                      ))}
                    </div>
                    <div className="imgbx ">
                      <img
                        src={process.env.PUBLIC_URL + v.isrc.workslist}
                        alt={v.title}
                      />
                    </div>
                  </div>
                </a>
              </li>
            </>
          ))}
        </ul>
        {/* 3. parallax 배경요소 */}
        <div className="bg-wrap">
          <div className="blurbx"></div>
          <div className="bg-box" style={{ backgroundImage: objectBg }}></div>
        </div>
      </div>
      {/* 4. conect us */}
      <div id="conect-us-area">
        <div className="img-wrap">

        {/* 1) 얼굴 이미지 */}
        <div className="imgbx">
          <img
            src={process.env.PUBLIC_URL + "/images/main/PC_conectus.png"}
            alt="conect face"
          />
        </div>
        {/* 2) 타이틀 */}
        <div className="title gilda-display-regular">CONTACT US</div>
        </div>
        {/* 3) 정보 */}
        <ul>
          <li className="fxbox">
            <div className="icon-box fxbox">
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/icon_mail.png"}
                  alt="email"
                />
              </div>
              <div className="topic">eMail</div>
            </div>
            <div className="text">sellbell0929@gmail.com</div>
          </li>
          <li className="fxbox">
            <div className="icon-box fxbox">
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon/icon_git.png"}
                  alt="git"
                />
              </div>
              <div className="topic">Github</div>
            </div>
            <div className="text">
              <a href="https://github.com/alrang0929" target="_blank">
                https://github.com/alrang0929
              </a>
            </div>
          </li>
        </ul>
        {/* 저작권 표시 */}
        <div className="copy">© 2024 Alrang. All rights reserved.</div>
      </div>
    </main>
  );
}

export default Main;
