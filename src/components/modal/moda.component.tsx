import React, { useState } from "react";
import { CarPage, Props } from "../../pages/car/car.page";
import { CarProps } from "../car-card/car-card.component";
import "./modal.styles.scss";

export function Modal(display: boolean, { data }: Props) {
  const [open, setOpen] = useState(display);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className={"modal-wrapper"}>
      <div onClick={toggle} className={"modal-backdrop"} />
      <div className={"modal-box"}>
        <CarPage data={data} />
      </div>
    </div>
  );
}
