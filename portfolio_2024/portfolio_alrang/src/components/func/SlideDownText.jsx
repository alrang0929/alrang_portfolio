import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./sliding-down-text.scss";
import $ from "jquery";
function SlidingText({ children, threshold = 0.3, duration = 0.5 }) {
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

  useEffect(() => {
    // 스크롤 도달시 애니
    // 대상선정
    if (textRef.current) {
      // textRef.current.style.animation = "slideDown 0.5s ease forwards";
      console.log("textRef.current", textRef.current);
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("entry.isIntersecting", entry.isIntersecting);
            observer.unobserve(entry.target);
          } //if
        },
        { threshold: threshold } // 50% 이상 보일 때 감지
        // console.log("IntersectionObserver",IntersectionObserver),
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
        height: (boxh+40) + "px",
      }}
    >
      <div className={`sliding-text`} ref={textRef}>
        {children}
      </div>
    </div>
  );
}

export default SlidingText;
