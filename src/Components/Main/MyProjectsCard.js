import "./MyProjectsCard.css"

const MyProjectsCard = ({name, image, web, github, description}) => {
    return (
        <div className="MyProjectsCard">
            <h3>{name}</h3>
            <img src={image}  alt={name} />
            <button>
                <a href={web} target="_blank" rel="noopener noreferrer">
                Website link
                </a>
            </button>
            <button>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <img id="github__svg" src="./svg/github.svg" alt="github" />
                    GitHub
                </a>
                </button>
            <span>{description}</span>
        </div>
    )
}

export default MyProjectsCard

