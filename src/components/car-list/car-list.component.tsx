import { useFetch } from "../../hooks/useFetch";
import { CarCard } from "../car-card/car-card.component";
import "./car-list.styles.scss";

type Repository = {
  model: string;
  brand: string;
  yearOfManufacture: string;
  plate: string;
  color: string;
  chassi: string;
  purchaseValue: number;
  bought: boolean;
  id: string;
  photo: string;
};

export const CarList = () => {
  const { data } = useFetch<Repository[]>("http://localhost:3000/vehicles");

  return (
    <div className="card-list">
      {data?.map((repo) => (
        <CarCard data={repo} />
      ))}
    </div>
  );
};
