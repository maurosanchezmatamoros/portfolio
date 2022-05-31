import { Link } from "react-router-dom"
import "./Categories.css"

const Categories = () => {

    return (
        <div className="Categories">
            <Link to="/" ><img src="./svg/home.svg" alt="home"/></Link>
            <Link to="/aboutme">About</Link>
            <Link to="/myprojects">Projects</Link>
            <Link to="/cv">Resume</Link>
            <Link to="/hobbies">Hobbies</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Categories