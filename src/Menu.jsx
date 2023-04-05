import logoNav from "./assets/logo.svg";
import fondoImg from "./assets/image-hero-desktop.jpg";
import "./menu.css";

export function Menu() {
  return (
    <>
      <header>
        <img className="fondo-img" src={fondoImg} />
        <nav className="nav-menu">
          <img className="logo" src={logoNav} />

          <ul className="card-500">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
