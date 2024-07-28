///portfolio - index
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

///////////////import area

export default function MainComponent(){

  return(
    <>
      <MainComponent />
    </>
  );
}

//root객체 생성
const root = ReactDOM.createRoot(document.querySelector('#root'));
//출력하기
root.render(<MainComponent />);
