import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="fixed left-20 top-1/2 transform -translate-y-1/2 z-50">
            <ul className="flex flex-col gap-2 list-['#']">
                <li className="navbar-item" onClick={() => window.scroll(0, 0)}>
                    Profile
                </li>
                <li className="navbar-item">
                    <Link to="/projects">Projects</Link>
                </li>
                <li
                    className="navbar-item"
                    onClick={() => window.location.replace("#work-experience")}
                >
                    Work Experience
                </li>
                <li
                    className="navbar-item"
                    onClick={() =>
                        window.location.replace("#programming-technologies")
                    }
                >
                    Programming Technologies
                </li>
                <li
                    className="navbar-item"
                    onClick={() =>
                        window.location.replace("#organization-experience")
                    }
                >
                    Organization Experience
                </li>
                <li
                    className="navbar-item"
                    onClick={() => window.location.replace("#languages")}
                >
                    Languages
                </li>
                <li
                    className="navbar-item"
                    onClick={() => window.location.replace("#interested")}
                >
                    Now Interested In
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
