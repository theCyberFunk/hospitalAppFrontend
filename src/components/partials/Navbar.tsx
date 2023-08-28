export default function Navbar () {
    return (
        <div>
            <div className="navbar section">
                <nav>
                    {/* <img src="/images/Logo.jpg" alt = 'logo' onclick="window.location.href = '/';"> */}
                    <div className="navbar-menu">
                        <ul >  
                            <li><a href="/doctors">Doctors</a></li>
                            <li><a href="/hospitals">Hospitals</a></li>
                            <li><a href="/treatment">Treatment</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                    
                    <div className="navbar-buttons">
                        <button className="login-button">
                            Login / Sign Up
                        </button>
                    </div>
                        {/* <div className="navbar-buttons">
                            <button className="user-button login-button" onclick="window.location.href = '/profile';"><%= currentUser.name%></button>
                            <button className="logout-button login-button" onclick="window.location.href = '/logout';"> Logout </button>
                        </div> */}
                    <i className="fa fa-bars"></i>
                </nav>
            </div>
            <div className="nav-dropdown hidden">
                <ul>
                    <li><a href="/doctors">Doctors</a></li>
                    <li><a href="/hospitals">Hospitals</a></li>
                    <li><a href="/treatment">Treatment</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    )
}