import { format } from "date-fns";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState();
  const [date] = useState(new Date());
  const formattedDate = format(date, "PP");

  useEffect(() => {
    fetch(`https://cavity-care.herokuapp.com/available?${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);
  return [services, setServices];
};

export default useServices;
