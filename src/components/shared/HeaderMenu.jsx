import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import '../../styles/components/header.css';

export default function HeaderMenu({ navLinks, onClose }) {
  return (
    <nav className="header-menu">
      <ul>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link to={link.path} onClick={onClose}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="header-menu-buttons">
        <PrimaryButton buttonText="Get Started" onClick={onClose} />
        <SecondaryButton buttonText="Login" onClick={onClose} />
      </div>
    </nav>
  );
}