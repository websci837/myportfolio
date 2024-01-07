import { useEffect, useState } from "react";
import "./App.css";
import PortflioPage from "./pages/portfolio";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  const [fromAPI, setFromApi] = useState("k");

  useEffect(() => {
    fetch("/portfolio_backend")
      .then((res) => res.json())
      .then((data) => setFromApi(data.likes));
  }, []);
  return (
    <div>
      <div>api {fromAPI}</div>
      <PortflioPage />
    </div>
  );
}

export default App;
