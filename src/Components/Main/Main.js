import { colors } from "../../Styles/theme"
import { fonts } from "../../Styles/theme"
import "./Main.css"
import AboutMe from "./AboutMe"
import MyProjects from "./MyProjects"
import CV from "./CV"
import Hobbies from "./Hobbies"
import Contact from "./Contact"


const Main = () => {

    const styles = {
        backgroundColor: colors.secondary,
        fontFamily: fonts.base
    }

    return (
        <main style={ styles }>
            <div style={{height: "10rem"}}></div>
            <AboutMe />
            <MyProjects />
            <CV />
            <Hobbies />
            <Contact />
        </main>
    )
}

export default Main