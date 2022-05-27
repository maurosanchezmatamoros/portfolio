import { colors } from "../../Styles/theme"
import { Link } from "react-router-dom"
import "./Categories.css"

const Categories = () => {

    const styles = {
        color: colors.white,
    }

    return (
        <div className="Categories">
            <Link to="/aboutMe" style={ styles }>About Me</Link>
            <Link to="/myProjects" style={ styles }>My Projects</Link>
            <Link to="/myCv" style={ styles }>CV</Link>
            <Link to="/hobbies" style={ styles }>Hobbies</Link>
            <Link to="/contact" style={ styles }>Contact</Link>
        </div>
    )
}

export default Categories