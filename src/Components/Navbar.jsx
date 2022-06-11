import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar() {
  return (
    <div className="h-24 bg-slate-900 text-center text-white leading-[6rem] text-3xl">
      <FontAwesomeIcon icon={faMusic} className="mr-4" />
      Music
    </div>
  );
}

export default Navbar;
