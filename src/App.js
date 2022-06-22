import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

import AddEmployee from './components/addEmployee';
import EmployeeList from './components/EmployeeList';
import { async } from '@firebase/util';

function App() {
  const [users, setUsers] = useState([]);
  const employeesRef = collection(db, "employees");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let data = await getDocs(employeesRef);
    setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  }

  const addEmployee = async (name, lastname, email) => {
      await addDoc(employeesRef, {name: name, lastname: lastname, email: email});
      getUsers();
  }

  const deleleEmployee = async (id) => {
    let employee = await doc(employeesRef, id);
    await deleteDoc(employee).then(getUsers());
    
  }

  const updateEmployee = async (id, empData) => {
    let employee = await doc(employeesRef, id);
    await updateDoc(employee, empData).then(getUsers());
  }



  return (
    <div className="App">
      <div className='container'>
        <AddEmployee addUser={addEmployee} name={name} setName={setName} lastname={lastname} setLastname={setLastname} email={email} setEmail={setEmail} />
        <EmployeeList users ={users} deleteEmp = {deleleEmployee} updateEmp ={updateEmployee} name={name} lastname={lastname} email={email} />
      </div>
      
    </div>
  );
}

export default App;
