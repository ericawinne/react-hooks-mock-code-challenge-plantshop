import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
 
function PlantPage() {
  const [ plants, setPlants] = useState([]) 
  const [ searchTerm, setSearchTerm ] =useState("")

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then((plantsArray) => {
        setPlants(plantsArray)
      })
  }, [])

function handleAddPlant(newPlant) {
  const updatedPlantsArray= [...plants, newPlant]
  setPlants(updatedPlantsArray)
}

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;