import { useNavigate } from "react-router-dom";

import "./home.style.scss";
import { CarList } from "../../components/car-list/car-list.component";

export const HomePage = () => {
  let navigate = useNavigate();
  function takeMetoPurches() {
    navigate("/purches", { replace: false });
  }
  function letMeSeeAvailables() {
    navigate("/availale-vehicles", { replace: false });
  }
  return (
    <div className="home">
      <h1>Welcome to Vehicle Agency</h1>
      <div className="buttons">
        <button onClick={letMeSeeAvailables}>Available Vehicle</button>
        <button onClick={takeMetoPurches}>myPurches</button>
      </div>
      <div>
        <CarList />
      </div>
    </div>
  );
};
