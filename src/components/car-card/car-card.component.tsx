import "./car-card.styles.scss";

type ProsType = {
  model: string;
  brand: string;
  yearOfManufacture: string;
  purchaseValue: number;
  photo: string;
};

export type CarProps = {
  data: ProsType;
};

export const CarCard = ({ data }: CarProps) => (
  <div style={{ backgroundImage: `url(${data.photo})` }} className="card-card">
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
