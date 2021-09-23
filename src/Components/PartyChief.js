import React, { useState } from "react";

const PartyChief = () => {
  const [input, setInput] = useState("");
  const [inspector, setInspector] = useState("");
  const handleClick = () => {
    setInspector(input);
    console.log(input);
  };
  const Inspector = () => {
    return <div>Inspector: {inspector}</div>;
  };
  return (
    <div>
      <div className="inspectorInput">
        <input
          type="text"
          name="Party Chief"
          value={input}
          placeholder="Party Chief"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="btn" onClick={handleClick}>
          Enter
        </button>
      </div>
      <Inspector />
    </div>
  );
};

export default PartyChief;
