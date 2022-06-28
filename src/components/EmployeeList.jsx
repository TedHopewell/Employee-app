import React from "react";

const EmployeeList = ({ employees, deleteEmployee, updateEmployee }) => {

    
    return(
        <div>
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
                                    <td><button onClick={() => updateEmployee(employee.id)}>edit</button><button onClick={() => deleteEmployee(employee.id)}>delete</button></td>
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