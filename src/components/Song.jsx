import React from 'react'

const Song = ({currentSong}) => {
  console.log(currentSong)
  return (
 <div className="song-container">
     
     <img src={currentSong.cover} alt="" />
     <h2>{currentSong.name}</h2>
     <h4>{currentSong.artist}</h4>
 </div>
  )
}

export default Song