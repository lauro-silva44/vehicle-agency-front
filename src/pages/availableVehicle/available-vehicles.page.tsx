import { CarCard } from "../../components/car-card/car-card.component";
import { Repository, useFetch } from "../../hooks/useFetch";
import "./available-vehicle.styles.scss";

export function AvailableVehicle() {
  const { data } = useFetch<Repository[]>("http://localhost:3000/vehicles");
  const availableOne = data?.filter((car) => car.bought === false);
  return (
    <div className="available-vehicles">
      <h1>Available Vehicles</h1>
      <div className="card-available">
        {availableOne?.map((available) => (
          <CarCard data={available} />
        ))}
      </div>
    </div>
  );
}
