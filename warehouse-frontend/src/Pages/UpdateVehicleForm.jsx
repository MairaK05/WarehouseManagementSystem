import React from "react";
import { useEffect, useState } from "react";
import { dealershipApi } from "./services/DealershipService";
import { useParams } from "react-router-dom";

function UpdateVehicleForm() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState({
        vehicleId: id,
        vehicleModel: "",
        vehicleBrand: "",
        vehiclePrice: "",
        vehicleMileage: "",
        isUsed: ""
    });

    useEffect(() => {
        dealershipApi.get(`/${id}`).then((response) => {
            setVehicle({
                ...vehicle,
                vehicleModel: response.data.vehicleModel,
                vehicleBrand: response.data.vehicleBrand,
                vehiclePrice: response.data.vehiclePrice,
                vehicleMileage: response.data.vehicleMileage,
                isUsed: response.data.isUsed
            });
        }).catch(error => {
            console.error(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dealershipApi.put(`/${id}`, vehicle).then((response) => {
            console.log(response);
            alert("Vehicle updated successfully!");
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
        <form id="form">
            <label>Model<input type="text" name="vehicleModel" value={vehicle.vehicleModel} onChange={(e) => setVehicle({...vehicle, vehicleModel: e.target.value})} /></label>
            <label>Brand<input type="text" name="vehicleBrand" value={vehicle.vehicleBrand} onChange={(e) => setVehicle({...vehicle, vehicleBrand: e.target.value})} /></label>
            <label>Price<input type="number" name="vehiclePrice" value={vehicle.vehiclePrice} onChange={(e) => setVehicle({...vehicle, vehiclePrice: e.target.value})} /></label>
            <label>Mileage<input type="number" name="vehicleMileage" value={vehicle.vehicleMileage} onChange={(e) => setVehicle({...vehicle, vehicleMileage: e.target.value})} /></label>
            <label>Is Used<input type="text" name="isUsed" value={vehicle.isUsed} onChange={(e) => setVehicle({...vehicle, isUsed: e.target.value})} /></label>
            <input type="submit" className="counter" onClick={handleSubmit}/>
        </form>
        </>
    );
}

export default UpdateVehicleForm;