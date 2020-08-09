import React from 'react';
import './style.css';

function Letter({ letter, handleLetterBtnSubmit }) {
    return (
        <div name={letter}>
            <a className="btn-floating btn waves-effect waves-light" name={letter} onClick={handleLetterBtnSubmit}>{letter}</a>
        </div>
    )
}

export default Letter
