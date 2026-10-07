import axios from "axios";

const REST_API_BASE_URL = '/api/vehicles';

export const listVehicles = () => {
    return axios.get(REST_API_BASE_URL);
}