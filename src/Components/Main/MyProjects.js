import "./MyProjects.css"
import { Projects } from "./Projects"
import MyProjectsCard from "./MyProjectsCard"

const MyProjects = () => {
    return(
        <div className="MyProjects">
            <h2>My Projects</h2>
            <div className="MyProject__card">
                {Projects.map(el => <MyProjectsCard key={el.id} {...el} />)}
            </div>
        </div>
    )
}

export default MyProjects