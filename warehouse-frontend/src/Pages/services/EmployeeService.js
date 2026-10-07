import axios from "axios";

const REST_API_BASE_URL = '/api/employees';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

export const addEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, {
        employee
    })
}