import React from "react";

function SelectionButton({ value, selected, onSave, name }) {
  return (
    <button
      onClick={() => {
        onSave({ name, value });
      }}
      className={
        selected
          ? "btn m-1 col-3 btn-primary"
          : "btn m-1 col-3 btn-outline-primary"
      }
    >
      {value}
    </button>
  );
}

export default SelectionButton;
