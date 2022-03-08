import React from "react";

import SelectionButton from "./SelectionButton.js";
function Selection({ Buttons }) {
  const buttonGroups = Buttons.split("|");
  console.log(buttonGroups);
  return <div>Selection</div>;
}

export default Selection;
