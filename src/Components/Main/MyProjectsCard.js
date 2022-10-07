import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"
import "./MyProjectsCard.css"

const MyProjectsCard = ({name, image, web, github, description, descripcion}) => {

    const {language} = useContext(LanguageContext)

    return (
        <div className="MyProjectsCard">
            <h3>{name}</h3>
            <img src={image}  alt={name} />
            <button>
                <a href={web} target="_blank" rel="noopener noreferrer">
                {language==="en"?
                "Website link"
                :
                language==="es"?
                "Sitio web"
                :
                "LanguageError"}
                </a>
            </button>
            <button>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <img id="github__svg" src="./svg/github.svg" alt="github" />
                    GitHub
                </a>
                </button>
            <p>
                {language==="en"?
                description
                :
                language==="es"?
                descripcion
                :
                "LanguageError"}
            </p>
        </div>
    )
}

export default MyProjectsCard

