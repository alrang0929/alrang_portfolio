// portfolio js - works Data

/************************************************************* 
[데이터 셋팅]


idx: 프로젝트 구분키
title: 프로젝트 타이틀
category: 프로젝트 카테고리
info: 프로젝트 날짜^사용한 툴 << splice로 컷팅하여 셋팅
isrc: 배경이미지 링크 (ex:`url('/images/Rectangle_27.jpg')`)
*************************************************************/

const worksData = [
    {
        idx: 1,
        title: '아모레퍼시픽 UI/UX Recover',
        category: 'UX / UI desing, fe Development',
        info: '2024.04.15^React, jQuery, SCSS, HTML5',
        text:`아모레퍼시픽의 기존 사이트를 트랜드에 맞게 ui와 ux를 리디자인 했다.
cross over한 사이트는 최근 리브랜딩 사이트를 공개한 정관장을 택했으며
브랜드 소개 페이지 답게 기존의 사이트 보다 쉽고 직관적으로 브랜드 가치를 경험할 수 있도록 했으며
대표 상품을 노출, 소개하여 아모레퍼시픽 내 각 브랜드들의 이미지를 부각시켰다`,
        isrc: {bg:"/images/amr_bg.jpg",ipage:"/images/amr_pg.png"},
        url: {pdf: "https://drive.google.com/file/d/1J0x0dtpHVRxKqZ03WT9dPgYAteJ_-fqg/view?usp=sharing", page:""},
    },
    {
        idx: 2,
        title: '슬밋 UI/UX Recover',
        category: 'UX / UI desing, fe Development',
        info: '2024.07.28^React^jQuery, SCSS, HTML5',
        text:``,
        isrc: {bg:"/images/sm_bg.jpg",ipage:"/images/seulmit_pg.png"},
        url: {pdf: "https://drive.google.com/file/d/1lTuTRm9JZ9qt6WGas2uKq6mgFRPUvaXX/view?usp=sharing", page:""},
    },
    {
        idx: 3,
        title: 'STAR WARS 팀 프로잭트',
        category: 'UX / UI desing, fe Development',
        info: '2024.04.22^React, jQuery, SCSS, HTML5',
        text:``,
        isrc: {bg:"/images/starwars_bg.jpg",ipage:""},
        url: {pdf: "https://drive.google.com/file/d/1J0x0dtpHVRxKqZ03WT9dPgYAteJ_-fqg/view?usp=sharing", page:""},
    },
]

export default worksData;