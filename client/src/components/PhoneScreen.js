import React from "react";

export default function PhoneScreen({t9Combinations}) {
  const {allCombinations, filteredCombinations} = t9Combinations;
  return (
    <section className="phone-screen-container">
      <div className="phone-screen">
        <h1 className="phone-screen-display-text">
          {allCombinations ? JSON.stringify(allCombinations, null, 2) : ""}
          {filteredCombinations
            ? JSON.stringify(filteredCombinations, null, 2)
            : ""}
        </h1>
      </div>
    </section>
  );
}
