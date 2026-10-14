import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "./services/EmployeeService";

function UpdateEmployeeForm() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        employeeID: id,
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        address: "",
    })
    useEffect(() => {
        api.get(`/${id}`).then((response) => {
            setEmployee({
                ...employee,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                emailAddress: response.data.emailAddress,
                phoneNumber: response.data.phoneNumber,
                address: response.data.address
            });
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`/${id}`, employee).then((response) => {
            console.log(response);
            alert("Employee updated successfully!");
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <>
        <form id="form">
            <label>First Name<input type="text" name="firstName" value={employee.firstName} onChange={(e) => setEmployee({...employee, firstName: e.target.value})} /></label>
            <label>Last Name<input type="text" name="lastName" value={employee.lastName} onChange={(e) => setEmployee({...employee, lastName: e.target.value})} /></label>
            <label>Email Address<input type="text" name="emailAddress" value={employee.emailAddress} onChange={(e) => setEmployee({...employee, emailAddress: e.target.value})} /></label>
            <label>Phone Number<input type="text" name="phoneNumber" value={employee.phoneNumber} onChange={(e) => setEmployee({...employee, phoneNumber: e.target.value})} /></label>
            <label>Address<input type="text" name="address" value={employee.address} onChange={(e) => setEmployee({...employee, address: e.target.value})} /></label>
            <input type="submit" className="counter" onClick={handleSubmit}/>
        </form>
        </>
    );
}

export default UpdateEmployeeForm;