import '../../styles/components/header.css'
import { Link } from 'react-router-dom';

export default function Header() {

  const navLinks = [
    { name: 'join beta', path: '/beta' },
    { name: 'home', path: '/'},
    // { name: 'investors', path: '/investors'},
    // { name: 'clarifi', path: '/clarifi' },
    // { name: 'about', path: '/about' },
    // { name: 'contact', path: '/contact' },
    // { name: 'testing', path: '/testing'}
  ];

  return (
    <header className="header">
      {/* Logo */}
      <Link className="header-logo" to="/">
        asoma.
      </Link>

      <nav className="nav desktop-only" style={{ display:'none'}}>
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
      
      <button className='hamburger'>
        <span className='bar' style={{backgroundColor: '#6AEAFB'}}/>
        <span className='bar' style={{backgroundColor: '#04BDE7'}}/>
        <span className='bar' style={{backgroundColor: '#0486BE'}}/>
      </button>

    </header>
  );
}