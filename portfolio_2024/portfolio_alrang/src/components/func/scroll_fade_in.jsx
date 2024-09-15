// 1차 플젝 ScrollFadeIng함수 : 스크롤 페이드인 애니

import { useState, useRef, useEffect } from "react";

// ScrollFadeIn 컴포넌트 안에서 children 사용
export default function ScrollFadeIn({ children, threshold = 0.3, duration = 0.5 }) {
    /****************************************************************** 
    [props list]

    1. children: ScrollFadeIn 컴포넌트 태그 사이에 들어가는 내용들 // React지정 porps로 다른 이름사용 XXX
    2. threshold : 애니 작동하는 화면 높이
    3. duration: 동작시간 s 단위
    
    ******************************************************************/


        /*************************************************** 
        [ScrollFadeIn 함수 작동원리]
        
        1. 컴포넌트 태그 사이에 children 내용이 들어감 
        2. children을 감싸고 있는 div, 즉 최상위 div의 ref={domRef}
            를 참조하여 useEffect구역 코드 실행
        2-1) observer 인스턴스 생성할 때
            domRef.current의 정보를 담고있는 entry의 값이 유효하냐?
        2-2) 그러면 isVisible의 상태를 바꿔주는데(isVisible = 스타일 변경 상태관리변수)
        2-3) threshold 값에 도달하면 애니를 실행해라 (ex: threshold: .5 = 화면 절반)

        3. 교차검증 시작, if(domRef.current){observer.observer()}를 통해 화면에 요소가 보이면 감시
        3-1) return clean up!! 화면 밖으로 사라졌냐? unobserver를 사용해 감시 해제

        ***************************************************/

    
    // 상태관리변수:
    // 1) isVisible: 상테에 따라 css 스타일 변경
    const [isVisible, setIsVisible] = useState(false);
    //참조변수: 
    // 1. domRef : 감시자 역할, 실제 dom에 접근할 수 있도록 도와줌
    // 1) Scroll최상위 div에 ref={domRef}를 연결하여 화면 랜더링 후 해당 요소를 current에 할당
    // 2) 할당된 current를 IntersectionObserver에 등록하여 useEffect 훅에서 요소가 화면에 보이는지 감시
    const domRef = useRef(null);

  //화면 랜더링 구역/////////////////////////////////////////////
    useEffect(() => {
        // 대상선정
        // 1. observer 인스턴스 생성
        const observer = new IntersectionObserver(
        // 1.observer 인스턴스를 생성하여 화면에 보이는지 감지
            ([entry]) => {
        //1) 보이면 isVisible 상태 업데이트
          setIsVisible(entry.isIntersecting);
        },
        {
        //2) 화면에 얼마나 보여야 애니메이션 실행할지 설정 (0.5 = 50%)
          threshold: threshold, 
        }
      ); //observer
  
    //  조건: domRef.current 가 true냐? (= 유효한 값이 있냐?)
    if (domRef.current) {
        // 1) 유효한 값이면 observer.observe();를 호출하라
        observer.observe(domRef.current);
    }
    
    //정리함수///////////////////////////////////
    return () => {
          //  조건: domRef.current 가 true냐? (= 유효한 값이 있냐?)
        if (domRef.current) {
            // 1) IntersectionObserver 가 더 필요 없을때 unobserve()로 정리
            // => 고만 감시해라
          observer.unobserve(domRef.current);
        }
      };
    }, []);
  

    // 코드리턴구역//////////////////////////////////////
    return (
      <div
        ref={domRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity ${duration}s ease-in-out, transform ${duration}s ease-in-out`,
        }}
      >
        {children} {/* children prop을 렌더링 */}
      </div>
    );
  }
  
