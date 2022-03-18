import React, {useState} from "react";

function PlantCard({item, handleDeleteItem}){

  const {id, name, image, price} = item;
  const [isInStock, setIsInStock] = useState(true);
  //console.log(name);

  function handleInStock(){
    setIsInStock( (isInStock) => !isInStock);
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json)
    .then( () => handleDeleteItem(item));
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
