import React from 'react';
import axios from 'axios';

const Character = ({character, currChar, setCurrChar}) => {
  // console.log(character);
  const handleClick = () => {
    setCurrChar(character.id);
  }

  return (
    <div className={currChar === character.id ? "current-character" : "character-box"} onClick={handleClick}>
      <img className="character" id={character.name} src={character.url}/>
    </div>
  );
}

export default Character;