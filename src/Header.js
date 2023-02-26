import logo from "./images/logo.svg";

function Header() {
  return (
    <header>
      <nav className="App-header">
        <ul className="App-header-items">
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
