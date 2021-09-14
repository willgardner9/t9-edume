import React from "react";
import PhoneScreenList from "./PhoneScreenList";

export default function PhoneScreen({t9Combinations}) {
  const {allCombinations, filteredCombinations} = t9Combinations;
  return (
    <section className="phone-screen-container">
      <div className="phone-screen">
        {/* if there are no keys in allCombinations object, display prompt to get started */}
        {allCombinations[0] ? (
          ""
        ) : (
          <h1 className="phone-screen-display-text">
            Press the buttons to write in t9. Press * to start again.
          </h1>
        )}
        {/* else display first filtered combinations then all combinations */}
        <PhoneScreenList
          combinationsList={filteredCombinations}
          headingText="Real words"
        />
        <PhoneScreenList
          combinationsList={allCombinations}
          headingText="All combinations"
        />
      </div>
    </section>
  );
}
