///portfolio - index
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.scss';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from './components/pages/Main';
///////////////import area

export default function MainComponent(){

  return(
    <>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Main/>}/>
       </Route>
       </Routes>
       </BrowserRouter>
    </>
  );
}

//root객체 생성
const root = ReactDOM.createRoot(document.querySelector('#root'));
//출력하기
root.render(<MainComponent />);
