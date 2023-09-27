interface User {
  name: string;
  username: string;
}

interface NavbarProps {
  user: User;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <div>
      <div className="navbar section">
        <nav>
          <a href="/">
            <img src="/images/Logo.jpg" alt="logo" />
          </a>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="/doctors">Doctors</a>
              </li>
              <li>
                <a href="/hospitals">Hospitals</a>
              </li>
              <li>
                <a href="/treatment">Treatment</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          <div className="navbar-buttons">
            <button className="login-button">Login / Sign Up</button>
          </div>
          <div className="navbar-buttons">
            <a href="/profile">
              <button className="user-button login-button">{user.name}</button>
            </a>
            <a href="/logout">
              <button className="logout-button login-button"> Logout </button>
            </a>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
      </div>
      <div className="nav-dropdown hidden">
        <ul>
          <li>
            <a href="/doctors">Doctors</a>
          </li>
          <li>
            <a href="/hospitals">Hospitals</a>
          </li>
          <li>
            <a href="/treatment">Treatment</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
