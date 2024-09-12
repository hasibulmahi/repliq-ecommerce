import { useEffect, useState } from "react";

const useDebounce = (searchText) => {
  const [debouncedText, setDebouncedText] = useState(searchText);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(searchText);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  return debouncedText;
};

export { useDebounce };