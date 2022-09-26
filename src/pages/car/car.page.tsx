import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./car.style.scss";
import { Repository, useFetch } from "../../hooks/useFetch";
import carPageSlice from "../../redux/slices/carPageSlice";

export const CarPage = () => {
  const { vehicleId } = useSelector((state: any) => state.car);
  const { data } = useFetch<Repository[]>("http://localhost:3000/vehicles");
  const theCar = data?.filter((car) => car.id === vehicleId);

  function buy() {
    axios({
      method: "post",
      url: "http://localhost:3000/purches",
      data: {
        vehicle_id: vehicleId,
      },
    });
  }

  return (
    <div className="car-page">
      {theCar !== null &&
        theCar?.map((car) => (
          <>
            <div>
              <h1> {car.model.toUpperCase()} </h1>
              <img src={car.photo} alt={car.brand} />
            </div>
            <div className="car-info">
              <p>{car.brand}</p>
              <p>{car.yearOfManufacture}</p>
              <p>{car.plate}</p>
              <p>{car.chassi.toUpperCase()}</p>
            </div>
            <div className="button">
              {!car.bought && <button onClick={buy}>BUY NOW</button>}
            </div>
          </>
        ))}
    </div>
  );
};
