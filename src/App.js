import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";


const App = () => {
  const [loadingLaptops, setLoadingLaptops] = useState(false);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    setLoadingLaptops(true);
    fetch("api/laptop")
      .then((res) => res.json())
      .then((data) => setLaptops(data))
      .finally(() => setLoadingLaptops(false));
  }, []);

  return (
    <div>
      <h1>Laptops</h1>
      {loadingLaptops && <LoadingMask />}
      {laptops ? (
        laptops.map((laptop) => (
          <Laptop
            key={laptop.name}
            name={laptop.name}
            brand={laptop.brand}
            weigth={laptop.weigth}
          />
        ))
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default App;