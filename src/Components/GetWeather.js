import React, { useState } from "react";
const url =
  "https://api.weatherapi.com/v1/current.json?key=55b319d1fdc440f2b3141713210905&q=auto:ip&aqi=no";

const GetWeather = () => {
  const [temperature, setTemperature] = useState("");
  const [conditions, setConditions] = useState("");
  const [icon, setIcon] = useState("");
  fetch(url)
    .then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        console.log("success");
        return resp.json();
      } else {
        console.log("shit's fucked up");
        throw new Error(resp.statusText);
      }
    })
    .then((data) => {
      // console.log(data);
      setTemperature(data.current.temp_c);
      setConditions(data.current.condition.text);
      setIcon(data.current.condition.icon);
      console.log(temperature, conditions);
    });
  return (
    <div>
      <span>
        Weather: <img src={icon} height="40px" alt="Weather Offline" />
        {conditions}
      </span>
      <span> Temperature: {temperature}</span>
    </div>
  );
};

export default GetWeather;
