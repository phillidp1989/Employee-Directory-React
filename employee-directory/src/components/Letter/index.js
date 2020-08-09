import React from 'react'

function Letter({ letter, handleLetterBtnSubmit }) {
    return (
        <div name={letter}>
            <a className="btn-floating btn-large waves-effect waves-light red" name={letter} onClick={handleLetterBtnSubmit}>{letter}</a>
        </div>
    )
}

export default Letter
