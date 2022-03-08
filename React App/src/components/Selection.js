import React from "react";

import SelectionButton from "./SelectionButton.js";
function Selection({ Buttons }) {
  let s = Buttons.replace(/!/g, " ");

  const buttonGroupss = s.split(" ");

  return (
    <>
      {buttonGroupss.map((b) => (
        <SelectionButton key={b} name={b} />
      ))}
    </>
  );
}

export default Selection;
