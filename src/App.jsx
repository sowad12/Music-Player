import React, { useState } from "react";
//add scss
import "./style/app.scss";
//add components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//import musiclist
import data from "./utils";
const App = () => {
  //state
  const [songs, setSong] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
       <Library songs={songs}/> 
    </div>
  );
};

export default App;
