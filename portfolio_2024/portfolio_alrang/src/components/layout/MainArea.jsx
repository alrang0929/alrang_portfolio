//portfolio pj - MainArea 컴포넌트
import React from 'react';
import { Outlet } from "react-router-dom";
///////////////////import area//////////////////

function MainArea() {
    return (
        <main className='cont'>
            <Outlet/>
        </main>
    );
}

export default MainArea;