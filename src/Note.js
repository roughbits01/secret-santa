import React from "react";
import present from "./images/present.svg";

const Note = (props) => {
  return (
    <div className="people-container">
      <div className="note">
        <h5 className="note__title">
          Coucou {props.name.replace("%20", " ")},
        </h5>
        <h5>
          la persone à qui vous offrez un cadeau d'une valeur de 20 euros est{" "}
          <span className="note__santa">{props.decryptHash(props.mykey)}</span>.
        </h5>
        <img src={present} className="note__image" alt="present" />
        <h5>Joyeux Noël !</h5>
      </div>
    </div>
  );
};

export default Note;
