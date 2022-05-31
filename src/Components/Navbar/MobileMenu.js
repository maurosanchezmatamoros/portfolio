import { Link } from "react-router-dom"
import "./MobileMenu.css"

const MobileMenu = ({ handleClick }) => {
    return(
        <div className="MobileMenu">
                <Link to="/" onClick={handleClick}>Home</Link>
                <Link to="/aboutme" onClick={handleClick}>About</Link>
                <Link to="/myprojects" onClick={handleClick}>Projects</Link>
                <Link to="/cv" onClick={handleClick}>Resume</Link>
                <Link to="/hobbies" onClick={handleClick}>Hobbies</Link>
                <Link to="/contact" onClick={handleClick}>Contact</Link>
            </div>
    )
}

export default MobileMenu