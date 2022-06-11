import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Songs } from "../Context";
function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="col-span-1 md:col-span-2 overflow-y-scroll">
      <table
        className="table-auto w-full"
        cellSpacing="0"
        cellPadding="0"
      >
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%] md:w-[15%]">Author</th>
            <th className="w-[10%]">
              <FontAwesomeIcon icon={faDownload} />
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 text-gray-500 hover:bg-slate-700 hover:text-cyan-500 h-12 cursor-pointer ${
                idSong === song.id && "text-cyan-500"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{song.id}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
