import React from "react";
import GetDate from "./GetDate";
import "./heading.css";

const Heading = () => {
  // const [projectInfo, setProjectInfo] = useState({});
  const projectInfoPopup = () => {
    console.log("add info");
    return <alert>Add your info</alert>;
  };
  return (
    <div className="heading">
      <div className="headingItem">
        <button className="btn" onClick={projectInfoPopup}>
          Project Info
        </button>
      </div>
      <div className="projectInfo">
        <span className="headingItem">
          Project Title :
          <input
            name="project title"
            type="text"
            placeholder=" Project Title..."
          />
        </span>
        <span className="headingItem">
          Project Number :
          <input
            name="project number"
            type="text"
            placeholder=" Project Number..."
          />
        </span>
      </div>
      <span className="headingItem date">
        <GetDate />
      </span>
    </div>
  );
};

export default Heading;
