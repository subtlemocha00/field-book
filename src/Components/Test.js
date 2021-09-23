import React, { useEffect, useState } from "react";

const Test = () => {
  const [items, setItems] = useState(["one", "two", "three", "four"]);
  const [userInput, setUserInput] = useState("");
  const handleClick = () => {
    console.log(userInput);
    setItems([...items, userInput]);
  };
  useEffect(() => {}, [items]);
  const List = () => {
    console.log(items);
    return items.map((item) => <li>{item}</li>);
  };
  return (
    <div>
      <ul>
        <List />
      </ul>
      <input
        type="text"
        placeholder="input here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleClick}>Add List</button>
    </div>
  );
};

export default Test;
