import React from 'react';
import axios from 'axios';
import Character from './Character.jsx';

const CharacterList = ({currChar, setCurrChar, characters}) => {

  return (
    <div className="character-list">
      {characters.map((character) => {
        return <Character key={character.id} character={character} currChar={currChar} setCurrChar={setCurrChar}/>;
      })}
    </div>
  );
}

export default CharacterList;