# Alrang's work place (2024)

## bash
```
npm run build
```

이 포트폴리오는 React를 기반으로 구축되었으며,
2024년 동안 제가 진행했던 다양한 프로젝트들을 선보이는 공간입니다. 

Git: https://github.com/alrang0929/alrang_portfolio/tree/main/portfolio_2024/portfolio_alrang<br/>
link : https://alrang-portfolio.vercel.app/

## 📝 프로젝트 소개

이 포트폴리오는 단순히 프로젝트 결과물만을 나열하는 것이 아니라,
사용자와의 상호 작용을 통해 몰입도를 높이고 제가 가진 기술과 경험을 효과적으로 전달하는 데 중점을 두었습니다.


### 핵심 기능

* **반응형 디자인:** 데스크탑, 태블릿, 모바일 등 다양한 기기에서 최적화된 화면을 제공합니다.
* **인터랙션 슬라이드:** Intersection Observer API를 사용하여 스크롤에 따라 콘텐츠가 부드럽게 나타나는 애니메이션 효과를 적용했습니다.
* **마우스 인터랙션:**  useState, useEffect, useRef Hook을 사용하여 타이틀 영역에 마우스 hover시 따라 랜덤한 이미지가 마우스 포인터를 따라다니는 애니메이션 구현
</br>
* **랜덤 이미지 생성 및 추가(handleMouseEnter)** </br>
1)handleMouseEnter 함수는 마우스가 title-wrap 요소에 진입할 때 실행됩니다.</br>
2)Math.random()을 사용하여 1부터 4까지의 랜덤한 숫자를 생성하고, 이를 이용하여 랜덤 이미지 파일 경로를 생성합니다.</br>
3)setImages([...images, randomImage])를 사용하여 기존 images 배열에 새로운 랜덤 이미지를 추가합니다. useState Hook을 통해 images 배열이 업데이트되면 컴포넌트가 다시 렌더링되어 새로운 이미지가 화면에 나타납니다.</br>

```
 const handleMouseEnter = () => {
    const randomImage = `/images/random_img/random_0${
      Math.floor(Math.random() * 4) + 1
    }.jpg`;
    setImages([...images, randomImage]);
  };
```

* **2. 마우스 위치 추적 및 이미지 이동**</br>
1) handleMouseMove 함수는 마우스가 title-wrap 요소 내에서 움직일 때마다 실행됩니다.</br>
2) titleWrapRef.current.getBoundingClientRect()를 사용하여 title-wrap 요소의 위치와 크기 정보를 가져옵니다.</br>
3) isWithinTitleWrap 변수를 통해 마우스 좌표가 title-wrap 요소 내부에 있는지 확인합니다.</br>
4) 마우스 좌표가 title-wrap 요소 내부에 있는 경우, imageRef.current.style.top과 imageRef.current.style.left 속성을 업데이트하여 이미지를 마우스 위치에 따라 이동시킵니다.</br>
5) 마우스 좌표가 title-wrap 요소 외부에 있는 경우, imageRef.current.style.display = "none";을 사용하여 이미지를 숨깁니다.</br>

**3. useEffect에서 이벤트 리스너를 등록 및 제거합니다.**
</br>
메모리 누수 방지와 불필요한 이벤트 처리를 막기 위하여 useEffect Hook에서 mousemove이벤트를 등록하고 컴포넌트가 언마운트 될때 이벤트 리스너를 제거합니다.</br>
```
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
```
**4. 이미지 렌더링 및 Ref 연결**</br>
images 배열을 map 함수를 사용하여 순회하며 각 이미지를 렌더링합니다.</br>
ref={index === images.length - 1 ? imageRef : null}를 사용하여 가장 최근에 추가된 이미지에만 imageRef를 연결합니다. 이를 통해 마지막 이미지만 마우스를 따라다니도록 구현했습니다.</br>
```
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
```
  
  
* **프로젝트 상세 페이지:** 각 프로젝트의 상세 정보, 기술 스택, GitHub 링크 등을 제공하며, 프로젝트의 핵심 내용을 명확하게 전달합니다.

### 기술 스택

* **React:** 성능 최적화와 컴포넌트를 통한 유지보수 최적화를 위해 React를 선택했습니다.
  컴포넌트의 재사용성과 useState, useContext hook을 사용하여 컴포넌트 상의 상태값을 효율적으로 관리했습니다.</br>
  Main컴포넌트에서 useState hook을 하용하여 화면 크기, 호버 상태, 애니메이션 상태등을 관리하고 useConstext Hook을 사용하여 WorksDetail 데이터를 공유했습니다.</br>
* **SCSS:** CSS의 구조화와 변수, mixin을 통한 css 관리가 용이하여 해당 기술을 선택했습니다.

### 퍼포먼스 점수
* **Lighthouse**를 통한 퍼포먼스 진단 결과
  ![화면 캡처 2024-10-24 022850](https://github.com/user-attachments/assets/51ad1603-cf0c-4bb8-9530-7dfcbe40acf0)
* **성능 저하의 원인**: 불필요한 렌더링 요소와 이미지 관련 속도저하가 주된 원인으로 지적됐습니다.
  개선 방법으로는 이미지 용량의 최적화와, css와 JavaScript의 분할을 통한 필수 요소만 렌더링을 통하여 해결해나갈 예정입니다.

### 문제발생 / 해결방법
* **1. TopArea의 home버튼의 이동기능 문제 발생**
 삼항연산자를 이용하여 isHome의 상태에 따라 Works와 Home의 링크, 버튼 내 텍스트와 링크 토글기능 구현</br>
 그러나 해당 버튼이 worksDetail 컴포넌트에 들어갈 경우 works와 worksDetail path를 토글하는 문제 발생</br>
```
     <header id="gnb-area">
        <nav>
          {!isHome && <Link to="/Works">WORKS</Link>}
          <button className="fill-button2" onClick={goLink}>
            {isHome ? "Works" : "Home"}
          </button>
        </nav>
      </header>
```
 당시 코드를 다시 보니 중복 라우팅으로 인한 충돌 때문에 해당 문제가 발생했을거라 판단하여</br>
```
  {!isHome && <Link to="/Works">WORKS</Link>}
```
해당 코드 제거하여 문제 해결</br>

* **2. Intersection Observer API로 제작한 슬라이드 애니메이션의 오류**
* 포트폴리오 피드백을 받는 중 Intersection Observer API를 사용하는 구간에서 ios와 android 환경 이용자의 화면이 다른 것을 발견.</br>
  구글링을 해봐도 별다른 해결책이 없어보여 props로 받아오던 width값과 height 값을 직접적으로 입력하니 문제가 해결됨</br>
  따라서 Intersection Observer API를 사용한 컴포넌트의 기존버전</br>
  
  ```
          <SlidingText
                text={"connecting"}
                font={"ephesis-regular"+" "+"fz-large"}
                fontsize={12}
                delay={0}
              />
  ```
  
  에서 props로 받아오는 fontsize와 컴포넌트 네 사이즈에 관련된 코드를 제거하고, 사이즈는 컴포넌트를 사용하는 곳에서 직접적으로 관리하게 하여 해결함.</br>
  
## 📁 프로젝트 구조

src/</br>
├── components/          // 재사용 가능한 UI 컴포넌트</br>
│   ├── data/         // 공통적으로 사용하는 데이터(skill, works등)</br>
│   ├── func/        // 공통함수(스크롤애니 함수, WorksPJList 컴포넌트)</br>
│   ├── Layout/          // 레이아웃 컴포넌트 (Header, Footer 등)</br>
│   ├── Plugin/          // 플러그인 컴포넌트 관리(Swiper 등)</br>
│   └── Page/             // 페이지별 컴포넌트 (Home, Projects 등)</br>
├── CSS/              // 스타일 관련 파일</br>
│   └── common/         // 공통 CSS, 초기화 CSS</br>
│   └── variables/         // 일관성을 위한 변수셋팅</br>
├── index/              // Router 관리 js</br>
