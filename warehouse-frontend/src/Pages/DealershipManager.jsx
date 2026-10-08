import React, {useEffect, useState} from "react";
import { dealershipApi } from "./services/DealershipService";
import { listVehicles } from "./services/DealershipService";

async function handleUpdate(e) { //Handle a new employee being submitted
    return (
        <>
        <form id="form">
            <label>Model<input type="text" name="vehicleModel" /></label>
            <label>Brand<input type="text" name="vehicleBrand" /></label>
        </form>
        </>
    );
}

async function handleDelete(e) { //Handle an existing employee being deleted
    console.log(e);
    await dealershipApi.delete(`/${e}`).then((response) => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.error(error.response.data);
    })
}
const DealershipManager = () => {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        listVehicles().then((response) => {
            setVehicles(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

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
                            <td><button onClick={() => handleDelete(vehicleId)}>Delete Vehicle</button><button onClick={() => handleUpdate(vehicleId)}>Update Vehicle</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <CreateNewVehicle />
        </>
    ); 

}
function CreateNewVehicle() {
    const [vehicle, setVehicle] = useState({
        vehicleModel: "",
        vehicleBrand: "",
        vehiclePrice: "",
        vehicleMileage: "",
        isUsed: "",
    })
    const { vehicleId, vehicleModel, vehicleBrand, vehiclePrice, vehicleMileage, isUsed } = vehicle;
    async function handleSubmit(e) { //Handle a new employee being submitted
        e.preventDefault();
        console.log(vehicle);
        await dealershipApi.post("", JSON.stringify(vehicle)).then((response) => {
            console.log(response);
            return response;
        })
            .catch(error => {
                console.error(error.response.data);
            })
    }

    const onInputChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    };
    return (
        <form onSubmit={handleSubmit} id="form">
            <label>Model<input type="text" name="vehicleModel" onChange={onInputChange} /></label>
            <label>Brand<input type="text" name="vehicleBrand" onChange={onInputChange} /></label>
            <label>Price<input type="number" name="vehiclePrice" onChange={onInputChange} /></label>
            <label>Mileage<input type="number" name="vehicleMileage" onChange={onInputChange} /></label>
            <label>Is Used<input type="text" name="isUsed" onChange={onInputChange} /></label>
            <input type="submit" className="counter" />
        </form>
    );
}
export default DealershipManager;