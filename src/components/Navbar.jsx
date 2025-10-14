import React from "react";

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand">CH ARMAAN</a>
        <nav>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
