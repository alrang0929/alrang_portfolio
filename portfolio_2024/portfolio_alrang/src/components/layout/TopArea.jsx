//portfolio pj - TopArea 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/top_area.scss";
///////////////////import area//////////////////


function TopArea(props) {
    const navigate = useNavigate();
    const goLink = ()=>{
        navigate("/Works");
    };

    ///// 화면 랜더링 구역///////////////////
    return (
        <>
            <header id='gnb-area'>
                <nav>
                    <button onClick={goLink}>
                        Works
                    </button>
                </nav>
            </header>
        </>
    );
}

export default TopArea;