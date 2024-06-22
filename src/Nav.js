// import React from 'react'
// import './Nav.css'

// const Navbar = () => {
//     return (
//         <div className='navbar'>
//             <div className="navbar-left">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
//                 <ul>
//                     <li>Home</li>
//                     <li>Tv Shows</li>
//                     <li>Movies</li>
//                     <li>New & Popular</li>
//                     <li>My List</li>
//                     <li>Browse by Languages</li>
//                 </ul>
//             </div>
//             <div className="navbar-right">

//             </div>
//         </div>
//     )
// }



// export default Navbar


import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
    
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      {/* <div className="nav_Home"><a href="/">Home</a></div>
      <div className="nav_TvShows"><a href="/">Tv Shows</a></div>
      <div className="nav_Movies"><a href="/">Movies</a></div>
      <div className="nav_NewPopular"><a href="/">New & Popular</a></div>
      <div className="nav_MyList"><a href="/">My List</a></div>
      <div className="nav_BrowsebyLanguages"><a href="/">Browse by Languages</a></div> */}

      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
    
  )
}

export default Nav