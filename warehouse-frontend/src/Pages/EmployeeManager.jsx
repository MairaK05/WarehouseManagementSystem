import React, {useEffect, useState} from "react";
import axios from "axios";
import { listEmployees } from "./services/EmployeeService";
import { addEmployee } from "./services/EmployeeService";
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
        const { firstName, lastName, emailAddress, phoneNumber, address } = employee;
        async function handleSubmit(e) { //Handle a new employee being submitted
            e.preventDefault();
            alert("Employee Submitted");
            await axios.post("/api/employees", employee);
        }

        const onInputChange = (e) => {
            setEmployee({...employee, [e.target.firstName]: e.target.value });
        };

        return (
        <form onSubmit={handleSubmit} id="form">
            <label>First Name<input type="text" onChange={(e) => onInputChange(e)}/></label>
            <label>Last Name<input type="text" onChange={(e) => onInputChange(e)}/></label>
            <label>Email Address<input type="text" onChange={(e) => onInputChange(e)}/></label>
            <label>Phone Number<input type="text" onChange={(e) => onInputChange(e)}/></label>
            <label>Address<input type="text" onChange={(e) => onInputChange(e)}/></label>
            <input type="submit" className="counter" onChange={(e) => onInputChange(e)}/>
        </form>
        );
    }
}

export default EmployeeManager;