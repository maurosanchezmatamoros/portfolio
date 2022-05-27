import "./MyProjectsCard.css"
import { colors } from "../../Styles/theme"
import { fonts } from "../../Styles/theme"

const MyProjectsCard = ({name, image, web, github, description}) => {
    return (
        <div className="MyProjectsCard">
            <h3>{name}</h3>
            <img src={image}  alt={name} />
            <button style={{backgroundColor: colors.black, color: colors.white}}>
                <a href={web} target="_blank" rel="noopener noreferrer" style={{fontFamily: fonts.base}} >
                Website link
                </a>
            </button>
            <button style={{backgroundColor: colors.black, color: colors.white}}>
                <a href={github} target="_blank" rel="noopener noreferrer" style={{fontFamily: fonts.base}} >
                    <img style={{width: "1rem", margin: "0 0.3rem 0 0"}} src="./svg/github.svg" alt="github" />
                    GitHub
                </a>
                </button>
            <span>{description}</span>
        </div>
    )
}

export default MyProjectsCard

