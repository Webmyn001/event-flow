import React from "react";
import { Link } from "react-router-dom";

function Navlinks({ alternative, handleClick }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Contact Us", link: "/contact" },
    { name: "Admin Login", link: "/login" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((item, index) => (
        <li
          key={index}
          onClick={handleClick}
          className={`font-semibold font-raleway flex tracking-wide pb-1 sm:pb-2 transition duration-200 
            hover:border-b-2 hover:border-white ${
              alternative ? "text-white" : "text-white"
            }`}
        >
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navlinks;
