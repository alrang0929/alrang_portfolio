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
        isrc: {bg:"/images/amr_bg.jpg",ipage:""},
        url: {pdf: "", page:""},
    },
    {
        idx: 2,
        title: '슬밋 UI/UX Recover',
        category: 'UX / UI desing, fe Development',
        info: '2024.07.28^React^jQuery, SCSS, HTML5',
        isrc: {bg:"/images/sm_bg.jpg",ipage:""},
        url: {pdf: "", page:""},
    },
    {
        idx: 3,
        title: 'STAR WARS 팀 프로잭트',
        category: 'UX / UI desing, fe Development',
        info: '2024.04.22^React, jQuery, SCSS, HTML5',
        isrc: {bg:"/images/starwars_bg.jpg",ipage:""},
        url: {pdf: "", page:""},
    },
]

export default worksData;