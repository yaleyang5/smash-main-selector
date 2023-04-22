import React from 'react';
import axios from 'axios';

const SelectedCharacter = ({characters, currChar}) => {
  return (
    <div className={characters[currChar - 1] !== undefined ? "selected-character" : "hidden"}>
      <div className="character-description">
        {characters[currChar - 1] !== undefined ? characters[currChar - 1].name : ""}
        <p className="character-attributes">
          Franchise: {characters[currChar - 1] !== undefined ? characters[currChar - 1].franchise : ""}
        </p>
        <p className="character-attributes">
          Play-Style: {characters[currChar - 1] !== undefined ? characters[currChar - 1].style : ""}
        </p>
        <p className="character-attributes">
          Best Move: {characters[currChar - 1] !== undefined ? characters[currChar - 1].moveName : ""}
        </p>
        <p className="character-synopsis">
          Synoposis: {characters[currChar - 1] !== undefined ? characters[currChar - 1].synopsis : ""}
        </p>
      </div>
      <img className="move-gif" src={characters[currChar - 1] !== undefined ? characters[currChar - 1].move : ""}/>
    </div>
  );
}

export default SelectedCharacter;