//portfolio pj - Layout 컴포넌트

import React from 'react';

//page
import TopArea from './TopArea';
import MainArea from './MainArea';
import FooterArea from './FooterArea';
/////import area/////////////////////////////

function Layout(props) {
    return (
        <>
            <TopArea/>
            <MainArea/>
            <FooterArea/>
        </>
    );
}

export default Layout;