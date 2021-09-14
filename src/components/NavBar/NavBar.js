import React, { useEffect, useState } from 'react'
import './NavBar.css'
function NavBar() {

  const [showBlackNav, handleshowBlackNav] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshowBlackNav(true);
    } else {
      handleshowBlackNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])
  return (
    <div className={`nav ${showBlackNav && 'nav-black'}`} >
      <div className="nav-contents">

        <img className='nav-logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <img className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      </div>
    </div>
  )
}

export default NavBar
