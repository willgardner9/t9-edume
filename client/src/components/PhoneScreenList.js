import React from "react";

export default function PhoneScreenList({combinationsList, headingText}) {
  return (
    <>
      {combinationsList[0] ? (
        <>
          <h1 className="phone-screen-display-text">{headingText}</h1>
          <ul className="combination-list">
            {Object.keys(combinationsList).map((combination, i) => (
              <li key={combination} className="phone-screen-display-text">
                <span className="list-number-text">
                  {parseInt(combination) + 1}:{" "}
                </span>
                {combinationsList[i]}
              </li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
