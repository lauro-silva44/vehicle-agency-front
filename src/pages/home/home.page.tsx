import "./home.style.scss";
import { CarList } from "../../components/car-list/car-list.component";

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Vehicle Agency</h1>
      <button>
        <a href="">Available Vehicle</a>
      </button>
      <button>
        <a href="">myPurches</a>
      </button>
      <CarList />
    </div>
  );
};
