import { Repository, useFetch } from "../../hooks/useFetch";
import { CarCard } from "../car-card/car-card.component";
import "./car-list.styles.scss";

export const CarList = () => {
  const { data } = useFetch<Repository[]>("http://localhost:3000/vehicles");

  return (
    <div className="card-list">
      {data?.map((repo) => (
        <CarCard data={repo} key={repo.id} />
      ))}
    </div>
  );
};
