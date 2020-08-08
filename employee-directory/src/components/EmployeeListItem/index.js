import React from "react";
import './style.css';

function EmployeeListItem(props) {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={props.image} alt="profilepic"></img>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.firstname} {props.lastname}<i className="material-icons right">more_vert</i></span>
    <p><strong>{props.job}</strong></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.firstname} {props.lastname}<i className="material-icons right">close</i></span>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>First Name:</strong> {props.firstname}
                            </li>
                            <li>
                                <strong>Last Name:</strong> {props.lastname}                                
                            </li>
                            <li>
                                <strong>Email:</strong> {props.email}
                            </li>
                            <li>
                                <strong>Department:</strong> {props.job}
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeListItem;
