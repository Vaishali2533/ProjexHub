import React from 'react';
import Header from '../header/Header';
import './Output.css';

function Output(props) {
    const paragraph = document.querySelector('#paragraph');
    const params = new URLSearchParams(window.location.search);


    params.forEach((value, key) => {
        paragraph.append(`${key} --> ${value}`);
        paragraph.append(document.createElement('br'));
    });
    return (
        <>
            <Header /> 
        <div className='body'> 
            <h1>WELCOME, USER</h1>
        </div>
        </>
    );
}

export default Output;