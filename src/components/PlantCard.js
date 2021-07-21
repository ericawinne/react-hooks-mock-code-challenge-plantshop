import React, { useState } from "react";


function PlantCard({plant}) {
 // const { id, name, image, price } = plant

  const [ isInStock, setIsInStock ] = useState(true)

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
        In Stock
      </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;