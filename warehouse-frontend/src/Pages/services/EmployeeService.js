import axios from "axios";

const REST_API_BASE_URL = '/api/employees';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL).then((response) => {
        console.log(response);
        return response;
    }).catch(error => {
        console.error(error);
    })
}

export const api = axios.create({
    baseURL: REST_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});