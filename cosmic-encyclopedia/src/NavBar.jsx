import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/planets">Planets</NavLink></li>
                <li><NavLink to="/stars">Stars</NavLink></li>
                <li><NavLink to="/galaxies">Galaxies</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;