import "./App.css";
import { CarList } from "./components/car-list/car-list.component";
import { useFetch } from "./hooks/useFetch";
import { CarPage } from "./pages/car/car.page";
import { HomePage } from "./pages/home/home.page";
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

function App() {
  const something = {
    id: "f7c3b25d-a8ae-44a2-91d3-29c59252d357",
    model: "Sonata hybrid anothter copy",
    brand: "Hyundai ",
    yearOfManufacture: "2016",
    plate: "00-00-00",
    color: "blue",
    chassi: "2h2xa5kpskscuuos",
    purchaseValue: 21700,
    bought: false,
    photo:
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/15q3/660804/hyundai-for-2016-whats-new-feature-car-and-driver-photo-661487-s-original.jpg?resize=1200:*",
  };
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
