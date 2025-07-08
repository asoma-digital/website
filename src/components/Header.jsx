import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex-between">
        {/* Logo */}
        <h1 className="logo">
          asoma<span className="text-primary-600">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile toggle button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="nav-links mobile-nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      )}
    </header>
  );
}