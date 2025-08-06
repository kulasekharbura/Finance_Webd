import React, { useState } from "react";
// 1. Import NavLink instead of Link
import { NavLink } from "react-router-dom";
// 2. Import your logo
import logo from "/Media/logo.png"; // Assuming the logo is in src/media/

// CSS would be in a separate file, e.g., Menu.css
/*
.menu.active {
  color: #007bff; // Example active color
  font-weight: bold;
}
*/

const Menu = () => {
  // We only need state for the dropdown now
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // 3. Define menu items as an array of objects for easier mapping
  const menuItems = [
    { to: "/", label: "Dashboard" },
    { to: "/orders", label: "Orders" },
    { to: "/holdings", label: "Holdings" },
    { to: "/positions", label: "Positions" },
    { to: "/funds", label: "Funds" },
    // { to: "/apps", label: "Apps" },
  ];

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="menu-container">
      <div className="logo">
        {/* 4. Use the imported logo */}
        <img src={logo} alt="Company Logo" style={{ width: "50px" }} />
      </div>

      <div className="menus">
        <ul>
          {/* 5. Map over the menuItems array to generate links */}
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                // 6. NavLink can take a function for the className prop
                // It receives { isActive } and you can return classes based on it.
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
                style={{ textDecoration: "none" }}
                // We end the NavLink here to remove the <p> tag if not needed
                // Or you can keep the <p> tag inside
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 7. Use CSS for the separator (e.g., border-top on .profile-section) */}
        <div className="profile-section">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>

          {/* 8. Conditionally render the dropdown menu */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                  {/* Use a button or Link for logout logic */}
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
