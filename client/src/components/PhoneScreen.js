import React from "react";

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
        {filteredCombinations[0] ? (
          <>
            <h1 className="phone-screen-display-text">Real words:</h1>
            <ul className="combination-list">
              {Object.keys(filteredCombinations).map((combination, i) => (
                <li key={combination} className="phone-screen-display-text">
                  <span className="list-number-text">
                    {parseInt(combination) + 1}:{" "}
                  </span>
                  {filteredCombinations[i]}
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
        {allCombinations[0] ? (
          <>
            <h1 className="phone-screen-display-text all-combinations-heading">
              All combinations
            </h1>
            <ul className="combination-list">
              {Object.keys(allCombinations).map((combination, i) => (
                <li key={combination} className="phone-screen-display-text">
                  <span className="list-number-text">
                    {parseInt(combination) + 1}:{" "}
                  </span>
                  {allCombinations[i]}
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
