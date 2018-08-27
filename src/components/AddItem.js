import React from "react";

const AddItem = props => {
  const handleSubmit = event => {
    props.handleSubmit(event);
  }
  
  const handleInputChanges = event => {
    props.handleInputChanges(event);
  }

  // onSubmit handles submit when adding a new item (and clear it)
  // onChange handles input changes and update the item
  // Input value is set on item to clear the text box when it's submitted
  return (
    <form className="add-item-container" onSubmit={handleSubmit}>
      <input type="text" value={props.item} onChange={handleInputChanges}/>
      <button>&#10010;</button>
    </form>
  );
};

export default AddItem;

