import React, { useState } from "react";

function GetTime() {
  const rawDate = new Date();
  const [currentTime, setCurrentTime] = useState({
    hour: rawDate.getHours(),
    minute: rawDate.getMinutes(),
    second: rawDate.getSeconds(),
  });
  return (
    <>
      {currentTime.hour}:{currentTime.minute}:{currentTime.second}
    </>
  );
}

export default GetTime;
