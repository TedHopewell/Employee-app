import React from "react";



const AddEmployee = (props) => {
    return(
        <div className="addEmployees">
            <h1>Add Employees</h1>
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

            <button onClick={props.addEmployee}>Add</button>
            
        </div>
    )
}

export default AddEmployee;