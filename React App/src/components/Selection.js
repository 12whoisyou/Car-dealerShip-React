import React from "react";

import SelectionButton from "./SelectionButton.js";
function Selection({ buttons, car, onSave, types }) {
  const selectedHandler = (group, value) => {
    return car[group] == value;
  };

  let s = buttons.replace(/!/g, " ");

  const buttonGroups = buttons.split("!");
  const buttonTypes = types.split("!");

  return (
    <>
      {buttonTypes.map((type, index) => (
        <div className="row">
          {buttonGroups[index].split(" ").map((b) => (
            <SelectionButton
              key={b}
              value={b}
              selected={selectedHandler(type, b)}
              onSave={onSave}
              name={type}
              colSize={Math.ceil(12 / buttonGroups[index].split(" ").length)}
            />
          ))}
        </div>
      ))}{" "}
    </>
  );
}

export default Selection;
