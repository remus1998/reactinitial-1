import React, { useState } from "react";
import SearchBar from './SearchBar';

const Laptop = ({ name, brand, weigth }) => {
  const [shown, setShown] = useState(false);

  return (
    <div>
     
      <p>{name}</p>
      {shown && (
        <div>
          <p>Brand: {brand}</p>
          <p>Weigth: {weigth}kg</p>
        </div>
      )}
      
      {shown ? (
        <div>
          <button onClick={() => setShown(false)}>Show less</button>
        </div>
      ) : (
        <button onClick={() => setShown(true)}>Show more</button>
      )}
    </div>
  );
};

export default Laptop;

