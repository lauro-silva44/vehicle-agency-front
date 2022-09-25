import { CarCard } from "../../components/car-card/car-card.component";
import { Repository, useFetch } from "../../hooks/useFetch";
import "./my-purches.styles.scss";

export function Purches() {
  const { data } = useFetch<Repository[]>("http://localhost:3000/vehicles");
  const purches = data?.filter((car) => car.bought);
  return (
    <div>
      <h1>My Purches</h1>
      <div className="my-purches">
        {purches?.map((available) => (
          <CarCard data={available} />
        ))}
      </div>
    </div>
  );
}
