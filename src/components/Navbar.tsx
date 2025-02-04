import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/" className="nav-item"><ImHome size={40}/></Link></li>
                <li><Link to="/about" className="nav-item"><FcAbout size={40}/></Link></li>
                <li><Link to="/projects" className="nav-item"><GrProjects size={40}/></Link></li>
                <li><Link to="/contact" className="nav-item"><RiContactsLine size={40}/></Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;