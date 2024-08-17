import React, { useEffect, useRef, useState } from "react";
import "./sliding-down-text.scss";
import $ from "jquery";
function SlidingText({ text, font, fontsize, delay }) {
  //1. text 텍스트 저장을 위한 참조변수
  //2. font : 지정하고 싶은 폰트
  //3. fontsize: 지정하고 싶은 폰트 사이즈
  //4. delay: 애니 딜레이 없을 시 x

  const textRef = useRef(null);
  // 2. 텍스트 박스 세로값 저장을 위한 참조변수
  //   const boxhRef = useRef(null);
  //상태관리변수
  //1. 텍스트 박스 세로값 변화 감지용
  const [boxh, setBoxh] = useState(0);
  const [boxw, setBoxw] = useState(0);
  // 2. 애니관리 상태변수
  const [isAni,setIsAni] = useState(false);

  // console.log("boxh",boxh);

  useEffect(() => {
    // 스크롤 도달시 애니
    // 대상선정
    const scrollAni=()=>{
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight / 2;
  
      if (scrollTop > triggerPoint && !isAni) {
        // 스크롤이 화면 절반 이상 내려갔을 때 애니메이션 실행
        textRef.current.style.animation = "none"; // 애니메이션 초기화
        void textRef.current.offsetWidth; // 리플로우(reflow) 발생시켜 애니메이션 재시작 트리거
        // void 를 사용한 이유: void는 항상 undefined 값을 반환, 따라서 offsetWidth값을 읽어오는 과정에서 요소를 다시 계산하여 애니를 다시 실행시키도록 함
        textRef.current.style.animation = "slideDown 0.5s ease forwards"; // 애니메이션 적용
        textRef.current.style.animationDelay = `${delay}s`;
        setIsAni(true); // 애니메이션 실행 후 isAni 값을 true로 변경
      }
      
    }; //scrollAni
    window.addEventListener('scroll', scrollAni);

    return () => {
      window.removeEventListener('scroll', scrollAni);
    };
    
  }, [delay, textRef.current]);

  useEffect(() => {
    if (textRef.current) {
      setBoxh(textRef.current.offsetHeight);
    }
    if (textRef.current) {
      setBoxw(textRef.current.offsetWidth);
    }
  }, []);
  console.log("boxh", boxh);
  console.log("boxw", boxw);
  return (
    <div
      className="sliding-wrap"
      style={{
        width: boxw + "px",
        height: boxh + "px",
        fontSize: fontsize + "rem",
      }}
    >
      <div className={`sliding-text` + " " + font} ref={textRef}>
        {text}
      </div>
    </div>
  );
}

export default SlidingText;
