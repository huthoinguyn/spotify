import { useState } from "react";
import "./App.css";
import DetailSong from "./Components/DetailSong";
import ListSong from "./Components/ListSong";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-700 h-screen-nav-player overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
