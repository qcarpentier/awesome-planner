import React from "react";

const AddItem = props => {
  const handleSubmit = event => {
    props.handleSubmit(event);
  }
  
  const handleInputChanges = event => {
    props.handleInputChanges(event);
  }

  return (
    <form className="add-item-container" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChanges}/>
      <button>&#10010;</button>
    </form>
  );
};

export default AddItem;

