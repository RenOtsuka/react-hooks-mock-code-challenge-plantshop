import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, handleDeleteItem}) {

  const plants = plantList.map(plant => (
    <PlantCard
    key={plant.id}
    item={plant}
    handleDeleteItem={handleDeleteItem}
    />
  ));

  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
