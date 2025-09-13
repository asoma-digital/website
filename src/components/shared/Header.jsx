import '../../styles/components/header.css';
import { Link } from 'react-router-dom';
import { HeaderMenu } from '.';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: 'join beta', path: '/beta' },
    { name: 'home', path: '/' },
    { name: 'investors', path: '/investors' },
    { name: 'product', path: '/product' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
    { name: 'testing', path: '/testing' }
  ];

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      {/* Logo */}
      <Link className="header-logo" to="/">
        asoma.
      </Link>

      {/* Desktop Navigation (visible via media query) */}
      <nav className="nav desktop-only">
        {navLinks.map((link) => (
          <Link
            className={`nav-link ${link.name === 'join beta' ? 'join-beta' : ''}`}
            key={link.name}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <button
        className="hamburger non-desktop"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="bar" style={{ backgroundColor: '#6AEAFB' }} />
        <span className="bar" style={{ backgroundColor: '#04BDE7' }} />
        <span className="bar" style={{ backgroundColor: '#0486BE' }} />
      </button>

      {/* Mobile Menu (with props passed) */}
      {menuOpen && (
        <div ref={menuRef}>
          <HeaderMenu
            navLinks={navLinks}
            onClose={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}