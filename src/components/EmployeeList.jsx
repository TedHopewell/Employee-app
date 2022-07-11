import React from "react";

const EmployeeList = ({ employees, deleteEmployee, updateEmployee }) => {

    
    return(
        <div className="employeeList">
            <h1 id="heading2">Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        employees.map(employee =>(
                            (
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                    <td><button onClick={() => updateEmployee(employee.id)} className="edit">edit</button><button onClick={() => deleteEmployee(employee.id)} className="del">delete</button></td>
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