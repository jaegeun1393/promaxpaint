import { useState,useEffect } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Components/Overlay";
 
const Header = ({ onNavClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu(str) {
    setShowMenu(false);
    onNavClick(str);
  } 
  let location = useLocation()
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])
  return (
    <div className="wrapper sticky top-0 bg-white shadow-lg z-10">
      <div className="contain items-center py-4 xl:py-6 justify-between">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" className="w-32 xl:w-36" />
        </Link>
        

        <button
          className="xl:hidden z-30 grid place-items-center w-8 h-8 text-2xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
        </button>

        <Overlay showMenu={showMenu} closeMenu={closeMenu} />

        <nav
          className={`${
            showMenu ? "translate-x-0" : "translate-x-full"
          } fixed right-0 top-0 w-full max-w-xs bg-white items-start h-full flex flex-col px-6 py-12 gap-4 duration-100 z-20 xl:max-w-7xl xl:flex xl:items-center xl:gap-8 xl:flex-row xl:bg-transparent xl:w-auto xl:h-auto xl:p-0 xl:static xl:translate-x-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-darkGreen font-semibold" : "text-lightGray"
            }
            onClick={() => closeMenu('nothing')}
          >
            Home
          </NavLink> 
          <Link className="text-lightGray"
            
            to="/#interior-painting"
          >   Interior Painting</Link>
          
          <Link   to="/#exterior-painting" className="text-lightGray" onClick={() => closeMenu('exterior-painting')}>
            Exterior Painting
          </Link>
          <Link to="/#commercial-painting" className="text-lightGray" onClick={() => closeMenu('commercial-painting')}>
            Commercial Painting
          </Link>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-darkGreen font-semibold" : "text-lightGray"
            }
            onClick={() => closeMenu('nothing')}
          >
            Gallery
          </NavLink>
          <a href="#" className="text-lightGray" onClick={() => closeMenu('nothing')}>
            Reviews
          </a>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-darkGreen font-semibold" : "text-lightGray"
            }
            onClick={() => closeMenu('nothing')}
          >
            Blog
          </NavLink>
          <Link
            to="/contact"
            className="green-btn my-3 lg:m-0"
            onClick={() => closeMenu('nothing')}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
