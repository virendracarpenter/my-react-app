import logo from "../images/logo.svg";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="react logo" className="nav-logo"/>
      <h3 className="nav-logo-title">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}

export default NavBar;
