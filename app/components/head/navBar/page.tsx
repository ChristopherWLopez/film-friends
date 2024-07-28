'use client'

import React from "react";

const NavBar = () => {

  const navBar = ["Movies ", "Favorites ", "Search ", "Friends"];
  return (
    <div>
      <ul
        className="NavBar
          text-amber-700"
      >

        {navBar.map((item)=>
          <li key={item}>{" " + item}</li>
        )}

        {/* <li>Movies</li>
        <li>Favorites</li>
        <li>Search</li> */}
      </ul>
    </div>
  );
};

export default NavBar;
