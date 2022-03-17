import React from "react";
import Librarysongs from "./Librarysongs";
const Library = ({songs}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
          {/* {songs.map((song)=>(
           <Librarysongs song={song} />
          ))} */}
      </div>
    </div>
  );
};

export default Library;
