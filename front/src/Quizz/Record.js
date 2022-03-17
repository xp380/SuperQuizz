import React from "react";

const Record = (props) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Votre score personnelle</h2>
      <ul style={{ textAlign: "center", marginLeft: 700 }}>
        <li style={{ marginRight: 730 }}> Code:{props.recordCode}</li>
        <li style={{ marginRight: 730 }}> History:{props.recordHistory}</li>
        <li style={{ marginRight: 730 }}> Joke:{props.recordJoke}</li>
      </ul>
    </div>
  );
};

export default Record;
