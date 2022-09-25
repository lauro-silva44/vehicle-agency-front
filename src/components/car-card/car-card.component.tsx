import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { passID } from "../../redux/slices/carPageSlice";

import "./car-card.styles.scss";

type ProsType = {
  id: string;
  model: string;
  brand: string;
  yearOfManufacture: string;
  purchaseValue: number;
  photo: string;
};

export type CarProps = {
  data: ProsType;
};

export const CarCard = ({ data }: CarProps) => {
  const { vehicleId } = useSelector((state: any) => state.car);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function takeMeToCar() {
    dispatch(passID(data.id));
    navigate("/vehicles/car");
  }

  console.log(vehicleId);
  return (
    <div
      style={{ backgroundImage: `url(${data.photo})` }}
      className="card-card"
      onClick={takeMeToCar}
    >
      <div className="color-back">
        <div className="info">
          <div className="model-brand">
            <p>
              {" "}
              <strong>{data.model}</strong>{" "}
            </p>
            <span> {data.brand} </span>
          </div>
          <div className="model-brand" style={{ alignItems: "flex-end" }}>
            <h2>${data.purchaseValue}</h2>
            <p>{data.yearOfManufacture}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
