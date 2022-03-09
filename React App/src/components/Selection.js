import React from "react";

import SelectionButton from "./SelectionButton.js";
function Selection({ Buttons, car, setCars, cars, onSave }) {
  const selectedHandler = (group, value) => {
    return car[group] == value;
  };

  let s = Buttons.replace(/!/g, " ");

  const buttonGroups = Buttons.split("!");

  return (
    <>
      <div className="row">
        {buttonGroups[0].split(" ").map((b) => (
          <SelectionButton
            key={b}
            value={b}
            selected={selectedHandler("transmission", b)}
            onSave={onSave}
            name={"transmission"}
          />
        ))}
      </div>
      <div className="row">
        {buttonGroups[1].split(" ").map((b) => (
          <SelectionButton
            key={b}
            selected={selectedHandler("type", b)}
            value={b}
            onSave={onSave}
            name={"type"}
          />
        ))}
      </div>
      <div className="row">
        {buttonGroups[2].split(" ").map((b) => (
          <SelectionButton
            key={b}
            selected={selectedHandler("seats", b)}
            value={b}
            onSave={onSave}
            name={"seats"}
          />
        ))}
      </div>
    </>
  );
}

export default Selection;
