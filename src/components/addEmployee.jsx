import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";




const AddEmployee = (props) => {
    return(
        <div className="addEmployees">
            <h1 id="heading1">Add Employees</h1>
            <div className="input-control">
                <label htmlFor="name"></label>
                <input type="text" placeholder="Enter name" id="name"  onChange={ e => props.setName(e.target.value)} />
            </div>

            <div className="input-control">
                <label htmlFor="lastName"></label>
                <input type="text" placeholder="Enter last name" id="lastname" onChange={ e => props.setLastname(e.target.value)} />
            </div>

            <div className="input-control">
                <label htmlFor="email"></label>
                <input type="text" placeholder="Enter email" id="email" onChange={ e => props.setEmail(e.target.value)}/>
            </div>

            <button onClick={props.addEmployee} className="add"><FontAwesomeIcon icon={faPlus} /></button>
            
            
        </div>
    )
}

export default AddEmployee;