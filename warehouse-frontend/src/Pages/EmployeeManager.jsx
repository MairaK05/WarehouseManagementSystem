import React, {useEffect, useState} from "react";
import axios from "axios";
import { listEmployees } from "./services/EmployeeService";
import { api } from "./services/EmployeeService";
const EmployeeManager = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <>
        <table>
            <thead>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </thead>
            <tbody>
                {employees.map(employee => {
                    const {
                        employeeID, firstName, lastName, emailAddress, phoneNumber, address} = employee;
                    return (
                        <tr key={employeeID}>
                            <td>{employeeID}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{emailAddress}</td>
                            <td>{phoneNumber}</td>
                            <td>{address}</td>
                            <td><button onClick={() => handleDelete(employeeID)}>Delete Employee</button><button onClick={() => handleUpdate(employeeID)}>Update Employee</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <CreateNewEmployee />
        </>
    ); 

    function CreateNewEmployee() {
        const [employee, setEmployee] = useState({
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            address: "",
        })
        const { employeeID, firstName, lastName, emailAddress, phoneNumber, address } = employee;
        async function handleSubmit(e) { //Handle a new employee being submitted
            e.preventDefault();
            console.log(employee);
            await api.post("", JSON.stringify(employee)).then((response) => {
                console.log(response);
                return response;
            })
            .catch(error => {
                console.error(error.response.data);
            })
        }

        const onInputChange = (e) => {
            setEmployee({...employee, [e.target.name]: e.target.value}); 
        };

        return (
        <form onSubmit={handleSubmit} id="form">
            <label>First Name<input type="text" name="firstName" onChange={(e) => onInputChange(e)}/></label>
            <label>Last Name<input type="text" name="lastName" onChange={(e) => onInputChange(e)}/></label>
            <label>Email Address<input type="text" name="emailAddress" onChange={(e) => onInputChange(e)}/></label>
            <label>Phone Number<input type="text" name="phoneNumber" onChange={(e) => onInputChange(e)}/></label>
            <label>Address<input type="text" name="address" onChange={(e) => onInputChange(e)}/></label>
            <input type="submit" className="counter"/>
        </form>
        );
    }
}

export default EmployeeManager;