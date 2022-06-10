import { useContext } from "react"
import { Link } from "react-router-dom"
import LanguageContext from "../../Context/LanguageContext"
import "./Categories.css"

const Categories = () => {

    const {language} = useContext(LanguageContext)

    if(language==="en"){
        return (
        <>
            <div className="Categories">
                <Link to="/" ><img src="./svg/home.svg" alt="home"/></Link>
                <Link to="/aboutme">About</Link>
                <Link to="/myprojects">Projects</Link>
                <Link to="/cv">Resume</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )}

    return (
        <>
            <div className="Categories">
                <Link to="/" ><img src="./svg/home.svg" alt="home"/></Link>
                <Link to="/aboutme">Sobre mí</Link>
                <Link to="/myprojects">Proyectos</Link>
                <Link to="/cv">CV</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="/contact">Contacto</Link>
            </div>
        </>
    )
}

export default Categories