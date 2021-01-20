import axios from "axios";
import { useQuery } from "react-query"; // react-query fetch with axios

export function ActiveCases() {
  const { isLoading, data, status } = useQuery("covid", () =>
    axios("https://covid19.mathdro.id/api")
  );

  return (
    <div>{isLoading ? status : data.data.confirmed.value.toLocaleString()}</div>
  );
}

export function Recovered() {
  const { isLoading, data, status } = useQuery("covid", () =>
    axios("https://covid19.mathdro.id/api")
  );

  return (
    <div>{isLoading ? status : data.data.recovered.value.toLocaleString()}</div>
  );
}

export function Death() {
  const { isLoading, data, status } = useQuery("covid", () =>
    axios("https://covid19.mathdro.id/api")
  );

  return (
    <div>{isLoading ? status : data.data.deaths.value.toLocaleString()}</div>
  );
}

export function LastUpdated() {
  const { isLoading, data, status } = useQuery("covid", () =>
    axios("https://covid19.mathdro.id/api")
  );

  return (
    <div>{isLoading ? status : data.data.lastUpdate.toLocaleString()}</div>
  );
}
