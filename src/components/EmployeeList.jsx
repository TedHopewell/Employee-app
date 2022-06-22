import React from "react";

const EmployeeList = ({ users, deleteEmp, updateEmp, name, lastname, email }) => {
    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Lastname</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                {
                    users.map( user => (
                        (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={()=> updateEmp(user.id, {name:name, lastname:lastname, email:email})}>Edit</button>
                                    <button onClick={()=> deleteEmp(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    ))
                }
                </tbody>
                
                
            </table>
        </div>
    )
}

export default EmployeeList;