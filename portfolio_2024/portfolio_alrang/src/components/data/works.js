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
    title: "아모레퍼시픽^UI/UX Recover",
    engtitle: "Amorepacific UI/UX Recover",
    category: "UX / UI design, fe Development",
    info: "2024.04.15^React, jQuery, SCSS, HTML5",
    text: `아모레퍼시픽의 기존 사이트를 트랜드에 맞게 ui와 ux를 리디자인 했다.
cross over한 사이트는 최근 리브랜딩 사이트를 공개한 정관장을 택했으며
브랜드 소개 페이지 답게 기존의 사이트 보다 쉽고 직관적으로 브랜드 가치를 경험할 수 있도록 했으며
대표 상품을 노출, 소개하여 아모레퍼시픽 내 각 브랜드들의 이미지를 부각시켰다`,
    isrc: {
      bg: "/images/amr_bg.jpg",
      mainlist: "/images/main/PC_project_side_amore.jpg",
      workslist: "/images/main/PC_main_list_amore.jpg",
      ipage: "/images/amr_pg.png",
    },
    url: {
      pdf: "https://drive.google.com/file/d/1J0x0dtpHVRxKqZ03WT9dPgYAteJ_-fqg/view?usp=sharing",
      page: "https://alrang0929.github.io/FED-RF-2th-PJ-jihyeon/1%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/",
    },
  },
  {
    idx: 2,
    title: "슬밋^UI/UX Recover",
    engtitle: "Seulmit UI/UX Recover",
    category: "UX / UI design, fe Development",
    info: "2024.07.28^React^jQuery, SCSS, HTML5",
    text: `리액트SPA환경에서 작업한 프로젝트,
리액트의 강점인 대량의 데이터처리, 데이터 재활용에 중점을 두고
코드 설계를 했다. 검색, 로그인, 장바구니 기능은 레지스토리를 활용하여 구현`,
    isrc: {
      bg: "/images/sm_bg.jpg",
      mainlist: "/images/main/PC_project_side_seumit.jpg",
      workslist: "/images/main/PC_main_list_seumit.jpg",
      ipage: "/images/seulmit_pg.png",
    },
    url: {
      pdf: "https://drive.google.com/file/d/1lTuTRm9JZ9qt6WGas2uKq6mgFRPUvaXX/view?usp=sharing",
      page: "https://alrang0929.github.io/FED-RF-2th-PJ-jihyeon/2%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/seulmit-app/build/",
    },
  },
  {
    idx: 3,
    title: "STAR WARS^팀 프로잭트 서브페이지^BAD BATCH",
    engtitle: "STAR WARS Team Project Subpage BAD BATCH",
    category: "UX / UI design, fe Development",
    info: "2024.04.22^React, jQuery, SCSS, HTML5",
    text: `팀프로잭트이니 만큼 공통소스 설계에 중점을 뒀다.
공통으로 사용되는 소스로는 [컬러(포인트, 텍스트, 디사블) / 폰트(타이틀, 서브타이틀, 텍스트) / 버튼 디자인(노말, 엑티브, 디사블), 하단 타 서브타이틀 이동 배너 컴포넌트]가 있으며
공통으로 사용되는 디자인은 회의를 통해 디자인 class 를 작성 후 공통으로 사용하도록 진행했다.`,
    isrc: {
      bg: "/images/starwars_bg.jpg",
      mainlist: "/images/main/PC_project_side_star.jpg",
      workslist: "/images/main/PC_main_list_star.jpg",
      ipage: "/images/star_pg.png",
    },
    url: {
      pdf: "https://docs.google.com/presentation/d/1MibZw2WQNsFUq7TPcNIZ10EAOOt63oFwqapo76ChAvQ/edit?usp=sharing",
      page: "https://alrang0929.github.io/FED_2rd_star_wars/000_React_PJ/star-app/build",
    },
  },
];

const worksThumbs = [
  { isrc: "/images/main/PC_project_thumb_amore.jpg", key: "amore" },
  { isrc: "/images/main/PC_project_thumb_seumit.jpg", key: "seumit" },
  { isrc: "/images/main/PC_project_thumb_star.jpg", key: "star" },
];
// export default worksData;
export { worksData, worksThumbs };
