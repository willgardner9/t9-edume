import React from "react";

export default function PhoneButton({mainDisplay, altDisplay, onClick}) {
  return (
    <button className="phone-button" onClick={onClick}>
      <h2 className="main-display-text">{mainDisplay}</h2>
      <h3 className="alt-display-text">{altDisplay}</h3>
    </button>
  );
}
