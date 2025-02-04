import { Link } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiKaggle } from "react-icons/si";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { SiSubstack } from "react-icons/si";

function Footer(){
    return(
        <footer className="footer">
            <ul className="footer-list">
                <li><BiCopyright size={40} className="footer-tem"/>SonnieCodes</li>
                <li><Link to="/" className="footer-tem"><ImLinkedin size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><FaInstagram size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><VscGithub size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><SiKaggle size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><SiCodewars size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><FaYoutubeSquare size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><AiFillMediumCircle size={20}/></Link></li>
                <li><Link to="/" className="footer-tem"><SiSubstack size={20}/></Link></li>
            </ul>
        </footer>
    )
}
export default Footer;