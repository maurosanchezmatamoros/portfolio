import "./MyProjects.css"
import { Projects } from "./Projects"
import MyProjectsCard from "./MyProjectsCard"
import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"

const MyProjects = () => {

    const {language} = useContext(LanguageContext)

    return(
        <div className="MyProjects">
            <h2>{language==="en"?"My Projects":language==="es"?"Mis proyectos":"LanguageError"}</h2>
            <div className="MyProject__card">
                {Projects.map(el => <MyProjectsCard key={el.id} {...el} />)}
            </div>
        </div>
    )
}

export default MyProjects