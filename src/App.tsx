import "./App.css";
import { CarList } from "./components/car-list/car-list.component";
import { Modal } from "./components/modal/moda.component";
import { useFetch } from "./hooks/useFetch";
import { CarPage } from "./pages/car/car.page";
import { HomePage } from "./pages/home/home.page";
const test = {
  id: "5f896268-9018-4ea4-a585-36877205a8c9",
  model: "Range Rover",
  brand: "Land Rover",
  yearOfManufacture: "2020",
  plate: "00-00-25",
  color: "grey",
  chassi: "2h2xa5kpskscuuos",
  purchaseValue: 21700,
  bought: false,
  photo:
    "https://hips.hearstapps.com/hmg-prod/images/2020-land-rover-range-rover-mmp-1-1573162813.jpg?crop=0.782xw:0.655xh;0.107xw,0.345xh&resize=1200:*",
};
function App() {
  return (
    <div className="App">
      <CarPage data={test} />
    </div>
  );
}

export default App;
