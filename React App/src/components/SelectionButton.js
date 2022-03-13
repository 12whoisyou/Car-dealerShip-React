import React from "react";

function SelectionButton({ value, selected, onSave, name, colSize }) {
  return (
    <button
      onClick={() => {
        onSave({ name, value });
      }}
      className={
        selected
          ? "btn my-1 col-" + colSize + " btn-primary"
          : "btn  my-1 col-" + colSize + " btn-outline-primary"
      }
    >
      {value}
    </button>
  );
}

export default SelectionButton;
