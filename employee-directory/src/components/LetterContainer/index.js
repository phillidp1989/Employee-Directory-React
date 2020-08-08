import React from 'react';
import './style.css';
import Letter from '../Letter/index';

function LetterContainer(props) {
    return (
        <div className="letter-container">                  
            <Letter 
            letter={props.all}            
            key={props.all}            
            handleLetterBtnSubmit={props.handleLetterBtnSubmit}
            />
            {props.alpha.map(letter => (
                <Letter 
                letter={letter}
                key={letter}
                handleLetterBtnSubmit={props.handleLetterBtnSubmit}
                />
            ))}
        </div>
    )
}

export default LetterContainer
