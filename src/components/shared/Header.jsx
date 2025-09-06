import '../../styles/components/header.css'
import { Link } from 'react-router-dom';

export default function Header() {

  const navLinks = [
    { name: 'join beta', path: '/beta' },
    { name: 'home', path: '/'},
    { name: 'investors', path: '/investors'},
    { name: 'clarifi', path: '/clarifi' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <header className="header">
      {/* Logo */}
      <Link className="header-logo" to="/">
        asoma.
      </Link>

      <nav className="nav">
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

    </header>
  );
}