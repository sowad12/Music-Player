import React from 'react'

const Librarysongs = ({currentSong}) => {
  
  return (
 <div className="librarys-song">
     
     <img src={currentSong.cover} alt="" />
     <h2>{currentSong.name}</h2>
     <h3>{currentSong.artist}</h3>
 </div>
  )
}

export default Librarysongs;