import axios from "axios";
import { useEffect, useState } from "react";

export type Repository = {
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
export function useFetch<Repository>(url: string) {
  const [data, setData] = useState<Repository | null>(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return { data };
}
