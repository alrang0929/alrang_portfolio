import React, { useEffect, useRef, useState } from "react";
import "./sliding-down-text.scss";
import $ from "jquery";
function SlidingText({ text, font, fontsize, delay, }) {
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
  // const [isAni,setIsAni] = useState(false);

  // console.log("boxh",boxh);

  useEffect(() => {
    // 스크롤 도달시 애니
    // 대상선정
    if (textRef.current) {
      textRef.current.style.animation = "slideDown 0.5s ease forwards";
      
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { // 엘리먼트가 화면에 보일 때
              // 애니메이션 재시작 (delay 적용)
              textRef.current.style.animation = 'none';
              void textRef.current.offsetWidth;
              textRef.current.style.animation = `slideDown 0.5s ease forwards`;
              textRef.current.style.animationDelay = `${delay}s`;
              observer.unobserve(entry.target); // 애니메이션 실행 후 관찰 해제
            }
          });
        },
        { threshold: 0.5 } // 50% 이상 보일 때 감지
      );
  
      observer.observe(textRef.current);
  
      return () => {
        observer.disconnect();
      };
    }
    
  }, [textRef.current]);

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