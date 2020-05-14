import React from 'react';
import ReactDom from 'react-dom';
import HeaderBlock from './components/HeaderBlock';
import './index.css';
const App = () => {
    return (
    <>
        <HeaderBlock />
    </>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));