import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName, userName, andTitle] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };


  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <input
        type="text"
        placeholder="Name"
        value={userName}
        className="text-input-field"
      />
      <input
        type="text"
        placeholder="AND Title"
        value={andTitle}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;
