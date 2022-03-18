import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  //for displaying plants
  const [plantList, setPlantList] = useState([]);

  //for filtering plant list
  const [findPlant, setFindPlant] = useState("");

  //for adding a new plant
  const [newName, setNewName] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  useEffect( () => {
    fetch(`http://localhost:6001/plants`)
    .then(r => r.json())
    .then(data => setPlantList(data));

  }, []);

  function handleFindPlant(e){
    setFindPlant(e.target.value);
    //console.log(findPlant);
  }

  function handleSubmit(e){
    e.preventDefault();

    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newName,
        "image": newImg,
        "price": parseFloat(newPrice)
      })
    })
    .then(r => r.json())
    .then(data => setPlantList([...plantList, data]))

  setNewName("");
  setNewImg("");
  setNewPrice(0);

  }

  function handleDeleteItem(deletedPlant){
    const newList = plantList.filter( plant => plant.id !== deletedPlant.id);
    setPlantList(newList);
  }


  function handleNewName(e){
    setNewName(e.target.value)
  }

  function handleNewImg(e){
    setNewImg(e.target.value)
  }

  function handleNewPrice(e){
    setNewPrice(e.target.value)
  }


  const plantsToDisplay = plantList.filter( item => {
    if(findPlant.length > 0){
      return item.name.toLowerCase().includes(findPlant);
    }
    else{
      return true;
    }
  })

  return (
    <main>
      <NewPlantForm
      handleSubmit={handleSubmit}
      newName={newName}
      newImg={newImg}
      newPrice={newPrice}
      handleNewName={handleNewName}
      handleNewImg={handleNewImg}
      handleNewPrice={handleNewPrice}
      />
      <Search 
      findPlant={findPlant}
      handleFindPlant={handleFindPlant}
      />
      <PlantList plantList={plantsToDisplay}
      handleDeleteItem={handleDeleteItem}
      />
    </main>
  );
}

export default PlantPage;
