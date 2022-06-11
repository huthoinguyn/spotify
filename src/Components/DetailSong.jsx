import React from "react";

function DetailSong() {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing:</h2>
      <h2 className="text-3xl text-gray-300">Sing me to sleep</h2>
      <div className="w-[240px] mx-auto mt-4">
        <img
          className="w-full object-cover"
          src="https://pbs.twimg.com/media/FE1FhWHWUAEXfQK.jpg:large"
          alt=""
        />
      </div>
      <div className="flex justify-evenly items-center mt-4">
        <img
          className="w-[70px] h-[70px] object-cover rounded-full"
          src="https://pbs.twimg.com/media/FE1FhWHWUAEXfQK.jpg:large"
          alt=""
        />
        <span className="text-xl text-cyan-500">Alan Walker</span>
      </div>
    </div>
  );
}

export default DetailSong;
