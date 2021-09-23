import React, { useState } from "react";
// import EntryList from "./EntryList";
import "./userInput.css";

const UserInput = () => {

  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  const handleClick = () => {
    setPost({
      value: { input },
      id: { input },
    });
    setInput("");
    console.log(post);
  };
  const handleInput = (entry) => {
    setInput(entry);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="entry here..."
        value={input}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Add Entry
      </button>
    </div>
  );
};

export default UserInput;
