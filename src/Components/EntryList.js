import React from "react";
import "./entryList.css";
import GetTime from "./GetTime";

const EntryList = (props) => {
  const posts = props.posts;
  const deletePost = (e) => {
    console.log(e.target);
    console.log("delete item");
  };
  const editPost = (e) => {
    console.log(e.target);
    console.log("edit item");
  };
  return posts.map((post) => {
    // const id = new Date().getDate().toString();
    return (
      <li key={new Date().getDate().toString()} className="entry">
        <span className="text">
          <GetTime />
        </span>
        <span className="text">{post}</span>
        <button className="btn" onClick={editPost}>
          EDIT
        </button>
        <button className="btn" onClick={deletePost}>
          DELETE
        </button>
      </li>
    );
  });
};

export default EntryList;
