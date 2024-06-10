import React from 'react';
import axios from 'axios';
// import LoadingGif from '../assets/loading.gif';

const MoveGif = ({currChar, characters}) => {
  // const [isLoading, setIsLoading] = React.useState(true);

  // const handleImageLoad = () => {
  //   setIsLoading(false);
  // };

  return (
    <div className="move-gif-box" onClick={() => window.open(characters[currChar - 1] !== undefined ? characters[currChar - 1].move : "")}>
      {/* {isLoading ? (
        <img src={LoadingGif} alt="Loading" />
      ) : ( */}
        <img className="move-gif" alt="Move Gif" src={characters[currChar - 1] !== undefined ? characters[currChar - 1].move : ""} />
      {/* )} */}
    </div>
  );
}

export default MoveGif;

