import React from 'react';
import './style.css';

function Sort(props) {
    return (
        <div className="sort-container">
            <div className="input-field col s6">
                <select onChange={props.handleSort}>
                    <option value="" defaultValue>How would you like to sort?</option>
                    <option value="1">Last Name</option>
                    <option value="2">First Name</option>                    
                </select>                
            </div>
        </div>
    )
}

export default Sort
