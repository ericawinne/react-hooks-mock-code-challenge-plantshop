import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePlant }) {
  const listOfPlants = plants.map((plant) => {
  return <PlantCard 
      key={plant.id}
      plant={plant}
      onDelete={onDeletePlant}
      onUpdatePlant={onUpdatePlant}
      />
  })
  console.log("plant list", listOfPlants )
  return (
    <ul className="cards"> 
    {listOfPlants}
    </ul>
  );
}

export default PlantList;