import React, { useState, useEffect } from 'react';
import './App.css';
import './components/AddEmp.css'
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';
import { db } from "./config/firebase";

//to delete add doc and deleteDoc
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util';

function App() {

  //all the states
  const [name1, setName1] = useState("");
  const [lastname1, setLastname1] = useState("");
  const [email1, setEmail1] = useState("");


  //state for all employees
  const [employees, setEmployees] = useState([]);



  //database reference object
  const employeeRef = collection(db, "employees")


  //function to get employees
  //async and await always goes together

  const getEmployees = async() =>{

    let data = await getDocs(employeeRef);
    setEmployees(data.docs.map((doc)=>({...doc.data(), id: doc.id})));

  }


  //function to add employee

  const addEmployee = async() => {
      await addDoc(employeeRef, {name: name1, lastname: lastname1, email: email1})
      getEmployees();

  }

  //function to delete
  const deleteEmployee = async(id) =>{
      let employee = await doc( employeeRef, id);
      await deleteDoc(employee)
      getEmployees();
  }

  const updateEmployee = async(id) =>{
    let employee = await doc( employeeRef, id);
    await updateDoc(employee, {name:name1, lastname:lastname1, email:email1})
    getEmployees();
}

  //use effect to call data from the database 
  useEffect(()=>{
    getEmployees();
  }, [])

  return (
    <div className="App">

      <div className='home'>
          <AddEmployee addEmployee ={addEmployee} setName={setName1} setLastname={setLastname1} setEmail={setEmail1}/>
          <EmployeeList employees = {employees} deleteEmployee = {deleteEmployee} updateEmployee = {updateEmployee}/>
      </div>
        
    </div>
  );
}

export default App;
