import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;







// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList({plants}) {
//   const listOfPlants = plants.map((plant) => {
//   return (<PlantCard
//     key={plant.id} 
//     name={plant.name}
//     image={plant.image}
//     price={plant.price}
//    />
//   )})
//   return (
//     <ul className="cards"> 
//     {listOfPlants}
//     </ul>
//   );
// }

// export default PlantList;









// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList({plants}) {
//   return (
//     <ul className="cards">
//     {plants.map((plant) => {
//       return (
//         <PlantCard
//     key={plant.id} 
//     plant={plant}
//    />
//       )
//     })}
//     </ul>
//   )
// }

// export default PlantList;