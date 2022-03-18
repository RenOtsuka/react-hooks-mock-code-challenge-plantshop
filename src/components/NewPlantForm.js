import React from "react";

function NewPlantForm({handleSubmit, newName, newImg, newPrice, handleNewName, handleNewImg, handleNewPrice}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newName} placeholder="Plant name" onChange={handleNewName}/>
        <input type="text" name="image" value={newImg} placeholder="Image URL"  onChange={handleNewImg}/>
        <input type="number" name="price" step="0.01" value={newPrice} placeholder="Price"  onChange={handleNewPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
