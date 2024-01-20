import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navItems = [
    {
      title: "Products",
      path: "/",
    },
    {
      title: "Suppliers",
      path: "/suppliers",
    },
    {
      title: "Categories",
      path: "/categories",
    },
  ];

  return (
    // bootstrap
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-4 fw-bold" to="/">
          Inventory App
        </Link>

        <div className="d-flex">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <Link className="nav-link text-white" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
