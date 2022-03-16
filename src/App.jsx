import React,{useState} from 'react'
//add scss
import './style/app.scss'
//add components
import Player from './components/Player'
import Song from './components/Song'
//import musiclist
import data from './utils'
const App = () => {
  //state
  const[song,setSong]=useState(data);
  const[currentSong,setCurrentSong]=useState(song[0]);
  return (
   <div className="App">
    <Song currentSong={currentSong}/>
    <Player/>
 
   </div>
  )
}

export default App