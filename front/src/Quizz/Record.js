import React from "react";
import "./Record.css"

const Record = (props) => {
  return (
    <div>
      <h2 className="HeadRecord">Votre score personnelle</h2>
      <ul className="listRecord" >
        <li className="listContent"> Code:{props.recordCode}</li>
        <li className="listContent"> History:{props.recordHistory}</li>
        <li className="listContent"> Joke:{props.recordJoke}</li>
      </ul>
    </div>
  );
};

export default Record;
