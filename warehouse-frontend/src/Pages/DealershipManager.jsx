import React, {useEffect, useState} from "react";
import axios from "axios";
import { listVehicles } from "./services/DealershipService";

const DealershipManager = () => {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        listVehicles().then((response) => {
            setVehicles(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])
    function handleSubmit(e) {
        e.preventDefault();
        alert("Vehicle Submitted");
    }


    return (
        <>
        <table>
            <thead>
                <th>Vehicle ID</th>
                <th>Vehicle Model</th>
                <th>Vehicle Brand</th>
                <th>Vehicle Price</th>
                <th>Vehicle Mileage</th>
                <th>Vehicle Used</th>
            </thead>
            <tbody>
                {vehicles.map(vehicle => {
                    const {
                        vehicleId, vehicleModel, vehicleBrand, vehiclePrice, vehicleMileage, isUsed} = vehicle;
                    return (
                        <tr key={vehicleId}>
                            <td>{vehicleId}</td>
                            <td>{vehicleModel}</td>
                            <td>{vehicleBrand}</td>
                            <td>{vehiclePrice}</td>
                            <td>{vehicleMileage}</td>
                            <td>{isUsed}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <form onSubmit={handleSubmit}>
            <label>Model<input type="text"/></label>
            <label>Brand<input type="text"/></label>
            <label>Price<input type="number"/></label>
            <label>Mileage<input type="number"/></label>
            <label>Is Used<input type="text"/></label>
            <input type="submit" />
        </form>
        </>
    ); 
}

export default DealershipManager;