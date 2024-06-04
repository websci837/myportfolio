import { useEffect, useState } from "react";
import "./App.css";
import PortflioPage from "./pages/portfolio";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  const [fromAPI, setFromApi] = useState("no");

  useEffect(() => {
    fetch("/portfolio_backend")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        console.log(data); // Log the data to verify
        setFromApi(data.message); // Assuming you want to update 'fromAPI' state with the 'likes' value
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(fromAPI);
  return (
    <div>
      <PortflioPage />
    </div>
  );
}

export default App;
