import axios from "axios";
import { useEffect, useState } from "react";
import { PostRequestHooks } from "../../hooks/usePostRequesHook";
import "./car.style.scss";
type CarType = {
  model: string;
  brand: string;
  yearOfManufacture: string;
  plate: string;
  color: string;
  chassi: string;
  purchaseValue: number;
  bought: boolean;
  photo: string;
  id: string;
};

type Props = {
  data: CarType;
};

export const CarPage = ({ data }: Props) => {
  const [disable, setDesable] = useState(false);
  function buy() {
    axios({
      method: "post",
      url: "http://localhost:3000/purches",
      data: {
        vehicle_id: data.id,
      },
    });

    setDesable(true);
  }

  console.log("id here: ", data.id);

  return (
    <div className="car-page">
      <div>
        <h1> {data.model.toUpperCase()} </h1>
        <img src={data.photo} alt={data.brand} />
      </div>
      <div className="car-info">
        <p>{data.brand}</p>
        <p>{data.yearOfManufacture}</p>
        <p>{data.plate}</p>
        <p>{data.chassi.toUpperCase()}</p>
      </div>
      <div className="button">
        {data.bought && (
          <button onClick={buy} disabled={disable}>
            BUY NOW
          </button>
        )}
      </div>
    </div>
  );
};
