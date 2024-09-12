import { useState, useEffect } from "react";

const useLocalStorage = (storeKye, defaultValue) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(storeKye)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storeKye, JSON.stringify(data));
  }, [data, storeKye]);

  return [data, setData];
};

export { useLocalStorage };