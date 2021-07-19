import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(updatedPlantsArray) {
  const [ plants, setPlants ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(plantArrayData => setPlants(plantArrayData))
  }, [])

  function handlePlantFormSubmit(newPlantData) {
    const updatedPlantsArray = [...plants, newPlantData]
    setPlants(updatedPlantsArray)
  }

  function handleDeletePlant(id) {
    const updatedPlantsArray = plants.filter((plant) => plant.id !== id)
    setPlants(updatedPlantsArray)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handlePlantFormSubmit}/>
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;