import React, { useState } from "react";
import variables from "../../variables";

export default function FooterBar() {


  const allColors = ["primary", "secondary", "danger", "warning", "info", "light", "dark", "white"];

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [primaryColor, setPrimaryColor] = useState("secondary");
  const [secondaryColor, setSecondaryColor] = useState("primary");
  const [fontColor, setFontColor] = useState("dark");

  //methode qui change les valeurs des variables de variables.js en fonction des valeurs dans le tableau allColors
  const switchColor = (color, method) => {
    const currentIndex = allColors.indexOf(color);
    const nextIndex = (currentIndex + 1) % allColors.length;
    const nextColor = allColors[nextIndex];
    
    setColor(method, nextColor);
    variables.color = nextColor;
  };

  const setColor = (method, nextColor) => {
    method(nextColor);
  }

  return (
<footer className={`d-flex justify-content-evenly col-sm-12 col-md-10 col-lg-8 fixed-bottom bg-light rounded mx-auto mb-2 border p-1`} style={{ height: "70px" }}>
  <button className={`btn border col-sm-3 col-md-2 btn-${backgroundColor}`} onClick={() => switchColor(backgroundColor, setBackgroundColor)}>
    Background
  </button>
  <button className={`btn col-sm-3 col-md-2 btn-${fontColor}`} onClick={() => switchColor(fontColor, setFontColor)}>
    Font
  </button>
  <button className={`btn col-sm-3 col-md-2 btn-${primaryColor}`} onClick={() => switchColor(primaryColor, setPrimaryColor)}>
    Primary
  </button>
  <button className={`btn col-sm-3 col-md-2 btn-${secondaryColor}`} onClick={() => switchColor(secondaryColor, setSecondaryColor)}>
    Secondary
  </button>
</footer>

  );
}
