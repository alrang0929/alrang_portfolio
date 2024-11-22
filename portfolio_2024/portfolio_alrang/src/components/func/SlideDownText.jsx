import React, { useEffect, useRef, useState } from "react";
import "./sliding-down-text.scss";
function SlidingText({ children, threshold = 0.3, duration = 0.5 }) {

  const textRef = useRef(null);
  const [boxh, setBoxh] = useState(0);
  const [boxw, setBoxw] = useState(0);

  useEffect(() => {
    // 스크롤 도달시 애니
    // 대상선정
    if (textRef.current) {
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
