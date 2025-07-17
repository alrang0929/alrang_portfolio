// portfolio js - works Data

/************************************************************* 
[데이터 셋팅]


idx: 프로젝트 구분키
title: 프로젝트 타이틀
engtitle: 프로젝트 타이틀
category: 프로젝트 카테고리
info: 프로젝트 날짜^사용한 툴 << splice로 컷팅하여 셋팅
isrc: 배경이미지 링크 (ex:`url('/images/Rectangle_27.jpg')`)
*************************************************************/

const worksData = [
  {
    idx: 1,
    title: "슬밋^UI/UX Recover",
    engtitle: "Seulmit^UI/UX Recover",
    category: "UX / UI design, fe Development",
    info: "2024.07.28^React^jQuery, SCSS, HTML5",
    text: `React, SCSS 환경에서 작업하였으며,
리액트의 강점인 대량의 데이터처리, 데이터 재활용에 중점을 두고 코드 설계를 했다.
로컬 스토리지를 사용하여 "검색, 로그인, 장바구니" 기능을 구현하였으면 슬라이드는 swiper를 사용했다.`,
    isrc: {
      bg: "/images/sm_bg.jpg",
      mainlist: "/images/main/PC_project_side_seumit.jpg",
      workslist: "/images/main/PC_main_list_seumit.jpg",
      ipage: "/images/seulmit_pg.png",
      thumbs: "/images/main/PC_project_thumb_seumit.jpg", key: "seumit",
    },
    url: {
      pdf: "https://drive.google.com/file/d/1lTuTRm9JZ9qt6WGas2uKq6mgFRPUvaXX/view?usp=sharing",
      page: "https://alrang0929.github.io/FED-RF-2th-PJ-jihyeon/2%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/seulmit-app/build/",
    },
  },
  {
    idx: 2,
    title: "아모레퍼시픽^UI/UX Recover",
    engtitle: "Amorepacific^UI/UX Recover",
    category: "UX / UI design, fe Development",
    info: "2024.04.15^jQuery, CSS, HTML5",
    text: `
이전에 개발한 HTML 기반 웹사이트를 React 환경으로 마이그레이션하여 코드 재활용성을 높이고 전반적 성능 개선했습니다`,
    isrc: {
      bg: "/images/amr_bg.jpg",
      mainlist: "/images/main/PC_project_side_amore.jpg",
      workslist: "/images/main/PC_main_list_amore.jpg",
      ipage: "/images/amr_pg.png",
      thumbs: "/images/main/PC_project_thumb_amore.jpg", key: "amore"
    },
    url: {
      pdf: "https://drive.google.com/file/d/1J0x0dtpHVRxKqZ03WT9dPgYAteJ_-fqg/view?usp=sharing",
      page: "https://project-amr.vercel.app/",
    },
  },
 
  { 
    idx: 3,
    title: "쭈물 마켓",
    engtitle: "Zumul Market",
    category: "UX / UI design, fe Development",
    info: "2024.12 ~ 2025.1^React, React Hook Form, TanStack Query, Zustand, SCSS, Vite, yarn, styled-components,Supabase, Node.js",
    text: `
    창작자(판매자)가 자신의 작품(음원, 디지털 콘텐츠, 예술품 등)을 쉽게 판매하고, 팬과 직접 연결될 수 있는 오픈 마켓 플랫폼 입니다`,
    isrc: {
      bg: "/images/zm2_bg.png",
      mainlist: "/images/main/zm2_bg.png",
      workslist: "/images/main/zm2_bg.png",
      ipage: "/images/zm_pg.png",
      thumbs:"/images/main/zm2_bg.png", key: "star",
    },
    url: {
      pdf: "https://docs.google.com/presentation/d/1MibZw2WQNsFUq7TPcNIZ10EAOOt63oFwqapo76ChAvQ/edit?usp=sharing",
      page: "https://zumul-market-git-main-alrangs-projects.vercel.app/",
    },
  },
];

const worksThumbs = [
  { isrc: "/images/main/PC_project_thumb_seumit.jpg", key: "seumit" },
  { isrc: "/images/main/PC_project_thumb_amore.jpg", key: "amore" },
  { isrc: "/images/main/zm2_bg.png", key: "star" },
];
// export default worksData;
export { worksData, worksThumbs };
