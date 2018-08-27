import React from "react";

const AddItem = props => {
  const handleInputChanges = event => {
    props.handleInputChanges(event);
  }

  return (
    <form className="add-item-container">
      <input type="text" onChange={handleInputChanges}/>
      <button>&#10010;</button>
    </form>
  );
};

export default AddItem;

