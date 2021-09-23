import React, { useState } from "react";
import EntryList from "./EntryList";
import "./userInput.css";

const UserInput = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      console.log("nothing here");
      return;
    } else {
      setPosts([...posts, input]);
      setInput("");
    }
  };
  return (
    <div className="">
      <form action="" onSubmit={handleClick}>
        <input
          type="text"
          className="inputBox"
          placeholder="entry here..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="button" className="btn" onClick={handleClick}>
          Add Entry
        </button>
      </form>
      <ul className="entryList">
        <EntryList posts={posts} />
      </ul>
    </div>
  );
};

export default UserInput;
