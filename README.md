# Alrang's work place (2024)

##bash
...
npm run build
...

**✨ 안녕하세요! 프론트엔드 개발자를 꿈꾸는 알랑입니다. ✨**

이 포트폴리오는 React를 기반으로 구축되었으며,
2024년 동안 제가 진행했던 다양한 프로젝트들을 선보이는 공간입니다. 

Git: https://github.com/alrang0929/alrang_portfolio/tree/main/portfolio_2024/portfolio_alrang<br/>
link : https://alrang-portfolio.vercel.app/

## 📝 프로젝트 소개

이 포트폴리오는 단순히 프로젝트 결과물만을 나열하는 것이 아니라, 사용자와의 상호 작용을 통해 몰입도를 높이고 제가 가진 기술과 경험을 효과적으로 전달하는 데 중점을 두었습니다.


### 핵심 기능

* **반응형 디자인:** 데스크탑, 태블릿, 모바일 등 다양한 기기에서 최적화된 화면을 제공합니다.
* **인터랙티브 UI:** Observer을 활용한 부드러운 애니메이션과 마이크로 인터랙션으로 사용자 경험을 향상시켰습니다.
* **프로젝트 필터링:** React Query를 사용하여 프로젝트 목록을 효율적으로 관리하고, 사용자가 원하는 기술 스택 또는 카테고리별로 필터링하여 볼 수 있도록 구현했습니다.
* **프로젝트 상세 페이지:** 각 프로젝트의 상세 정보, 기술 스택, GitHub 링크 등을 제공하며, 프로젝트의 핵심 내용을 명확하게 전달합니다.

### 기술 스택

* **React:** 사용자 인터페이스 구축
* **SCSS:** CSS의 구조화
* **React Query:** 데이터 fetching 및 상태 관리
* **Router:** 전역 상태 관리

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
