import React, { useState } from "react";
import "./AddEmp.css";

const AddEmployee = ({addUser, name, setName, lastname, setLastname, email, setEmail}) => {
    
    return (
        <div className="AddEmp">
            <h1>New employee</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Name..." id="name" onChange={ e => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="lastname">Lastname:</label>
                <input type="text" placeholder="Lastname..." id="lastname" onChange={ e => setLastname(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email"> Email </label>
                <input type="email" placeholder="Email..." id="email" onChange={ e => setEmail(e.target.value)} />
            </div>
            
            
            <button type="button" onClick={() => addUser(name, lastname, email)}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;