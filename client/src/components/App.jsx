import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Character from './Character.jsx';
import CharacterList from './CharacterList.jsx';
import SelectedCharacter from './SelectedCharacter.jsx';

import characters from './../assets/characters.js';

const App = () => {
  // console.log(characters);
  const [currChar, setCurrChar] = React.useState(0);

  React.useEffect(() => {
    // console.log("We are just rerendering the page for the images.");
  }, []);

  return (
    <div className="app">
      <CharacterList characters={characters} currChar={currChar} setCurrChar={setCurrChar}/>
      <Header currChar={currChar}/>
      <SelectedCharacter currChar={currChar} characters={characters}/>
      {/* <h3 className="character-attributes">
        Tournament Results/Viability:
      </h3> */}
    </div>
  );
}

export default App;