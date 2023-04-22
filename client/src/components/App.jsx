import React from 'react';
import axios from 'axios';
import Character from './Character.jsx';
import CharacterList from './CharacterList.jsx';
import SelectedCharacter from './SelectedCharacter.jsx';

import characters from './../assets/characters.js';

const App = () => {
  // console.log(characters);
  const [currChar, setCurrChar] = React.useState(0);

  React.useEffect(() => {
    console.log("We are just rerendering the page for the images.");
  }, []);

  return (
    <div className="app">
      <h1 className="title">
        Super Smash Bros. Main Selector
      </h1>
      <h2 className="description">
        Find the perfect character for you!
      </h2>
      <CharacterList characters={characters} currChar={currChar} setCurrChar={setCurrChar}/>
      <SelectedCharacter currChar={currChar} characters={characters}/>
      {/* <h3 className="character-attributes">
        Tournament Results/Viability:
      </h3> */}
    </div>
  );
}

export default App;