import { colors } from "../../Styles/theme"
import { Link } from "react-router-dom"
import "./Categories.css"

const Categories = () => {

    const styles = {
        color: colors.white,
    }

    return (
        <div className="Categories">
            <Link to="/" ><img src="./svg/home.svg" alt="home" style={{width: "1.2rem"}} /></Link>
            <Link to="/aboutme" style={ styles }>About Me</Link>
            <Link to="/myprojects" style={ styles }>My Projects</Link>
            <Link to="/cv" style={ styles }>CV</Link>
            <Link to="/hobbies" style={ styles }>Hobbies</Link>
            <Link to="/contact" style={ styles }>Contact</Link>
        </div>
    )
}

export default Categories