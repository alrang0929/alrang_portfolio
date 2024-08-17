import React, { useEffect, useRef, useState } from "react";
import "./sliding-down-text.scss";
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

  // console.log("boxh",boxh);

//참조변수에 애니 스타일 셋팅중이므로 변경시 여기서
  useEffect(() => {
    if (textRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              // 스크롤 절반 이상 보일 때 애니메이션 실행
              textRef.current.style.animation = `slideDown 0.5s ease forwards`;
              textRef.current.style.animationDelay = `${delay}s`;
              observer.unobserve(entry.target); // 애니메이션 실행 후 관찰 해제
            }
          });
        },
        { threshold: 0.5 } // 교차 비율 50% 이상 감지
      );

      observer.observe(textRef.current); // 텍스트 요소 관찰 시작

      return () => {
        observer.disconnect(); // 컴포넌트 언마운트 시 관찰 해제
      };
    }
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
