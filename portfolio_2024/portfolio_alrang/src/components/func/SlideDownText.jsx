import { useState, useRef, useEffect } from "react";

export default function ScrollFadeIn({ children, threshold = 0.3, duration = 0.5 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (domRef.current) {
        const { top, bottom } = domRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 요소가 화면에 threshold 비율 이상 보이는 경우
        if (bottom >= 0 && top <= windowHeight * (1 - threshold)) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 렌더링 시에도 가시성 확인

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}s ease-in-out, transform ${duration}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
}