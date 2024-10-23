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
* **인터랙션 슬라이:** Intersection Observer API를 사용하여 스크롤에 따라 콘텐츠가 부드럽게 나타나는 애니메이션 효과를 적용했습니다.
* **마우스 인터랙션:**  마우스 움직임을 감지하여 이미지가 따라다니는 효과를 구현하여 사용자 참여를 유도합니다.
* **프로젝트 상세 페이지:** 각 프로젝트의 상세 정보, 기술 스택, GitHub 링크 등을 제공하며, 프로젝트의 핵심 내용을 명확하게 전달합니다.

### 기술 스택

* **React:** 성능 최적화와 컴포넌트를 통한 유지보수 최적화를 위해 React를 선택했습니다.
* 컴포넌트의 재사용성과 useState, useContext hook을 사용하여 컴포넌트 상의 상태값을 효율적으로 관리했습니다.</br>
* Main컴포넌트에서 useState hook을 하용하여 화면 크기, 호버 상태, 애니메이션 상태등을 관리하고 useConstext Hook을 사용하여 WorksDetail 데이터를 공유했습니다.
* **SCSS:** CSS의 구조화와 변수, mixin을 통한 css 관리가 용이하여 해당 기술을 선택했습니다.

### 퍼포먼스 점수
* **Lighthouse**를 통한 퍼포먼스 진단 결과
* ![화면 캡처 2024-10-24 022850](https://github.com/user-attachments/assets/51ad1603-cf0c-4bb8-9530-7dfcbe40acf0)
* **성능 저하의 원인**: 불필요한 렌더링 요소와 이미지 관련 속도저하가 주된 원인으로 지적됐습니다.
* 개선 방법으로는 이미지 용량의 최적화와, css와 JavaScript의 분할을 통한 필수 요소만 렌더링을 통하여 해결해나갈 예정입니다.

### 문제발생 / 해결방법
* **1. TopArea의 home버튼의 이동기능 문제 발생**
* 삼항연산자를 이용하여 isHome의 상태에 따라 Works와 Home의 링크, 버튼 내 텍스트와 링크 토글기능 구현
* 그러나 해당 버튼이 worksDetail 컴포넌트에 들어갈 경우 works와 worksDetail path를 토글하는 문제 발생
* ```
     <header id="gnb-area">
        <nav>
          {!isHome && <Link to="/Works">WORKS</Link>}
          <button className="fill-button2" onClick={goLink}>
            {isHome ? "Works" : "Home"}
          </button>
        </nav>
      </header>
  ```
* 당시 코드를 다시 보니 중복 라우팅으로 인한 충돌 때문에 해당 문제가 발생했을거라 판단하여
* ```
  {!isHome && <Link to="/Works">WORKS</Link>}
  ```
*해당 코드 제거하여 문제 해결

* **2. Intersection Observer API로 제작한 슬라이드 애니메이션의 오류**
* 포트폴리오 피드백을 받는 중 Intersection Observer API를 사용하는 구간에서 ios와 android 환경 이용자의 화면이 다른 것을 발견.
* 구글링을 해봐도 별다른 해결책이 없어보여 props로 받아오던 width값과 height 값을 직접적으로 입력하니 문제가 해결됨
* 따라서 Intersection Observer API를 사용한 컴포넌트의 기존버전
* ```
          <SlidingText
                text={"connecting"}
                font={"ephesis-regular"+" "+"fz-large"}
                fontsize={12}
                delay={0}
              />
  ```
* 에서 props로 받아오는 fontsize와 컴포넌트 네 사이즈에 관련된 코드를 제거하고, 사이즈는 컴포넌트를 사용하는 곳에서 직접적으로 관리하게 하여 해결함.
* 
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
