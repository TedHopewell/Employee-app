import React from "react";
import deleter from '../images/icons8-delete-64.png'
import editor from '../images/icons8-edit-24.png'

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
                                    <td><button onClick={() => updateEmployee(employee.id)} className="edit"><div><img src={editor} alt="" /></div></button><button onClick={() => deleteEmployee(employee.id)} className="del"><div><img src={deleter} alt="" /></div></button></td>
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