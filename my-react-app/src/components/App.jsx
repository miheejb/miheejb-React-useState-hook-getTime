import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  function getTime(){
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime)
  }

  setInterval (getTime,1000);


  return (
    <div className="container">
      <h1> {currentTime} </h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
