import React, { useEffect, useRef, useState } from "react";
import "./sliding-down-text.scss";

function SlidingText({ children, threshold = 0.3, duration = 0.5 }) {
  const textRef = useRef(null);
  const [boxh, setBoxh] = useState(0);
  const [boxw, setBoxw] = useState(0);
  const [animated, setAnimated] = useState(false); // 애니메이션 상태 관리

  const handleScroll = () => {
    if (!textRef.current || animated) return;

    const rect = textRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // threshold 기준으로 요소가 화면에 진입했을 때
    if (rect.top < windowHeight * threshold && rect.bottom > 0) {
      textRef.current.style.animation = `slideDown ${duration}s ease forwards`;
      setAnimated(true); // 중복 실행 방지
    }
  };

  useEffect(() => {
    if (textRef.current) {
      setBoxh(textRef.current.offsetHeight);
      setBoxw(textRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div
      className="sliding-wrap"
      style={{
        width: boxw + "px",
        height: boxh + 40 + "px",
      }}
    >
      <div className="sliding-text" ref={textRef}>
        {children}
      </div>
    </div>
  );
}

export default SlidingText;
