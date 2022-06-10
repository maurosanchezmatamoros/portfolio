import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"
import "./Skills.css"

const Skills = () => {

    const {language} = useContext(LanguageContext)

    return(
        <>
            <h2>{language==="en"?"These are my skills":language==="es"?"Mis habilidades":"LanguageError"}</h2>
            <div className="Skills__slider">
                <div className="Skills__slideTrack">
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/html.svg" alt="htlm logo" title="htlm" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/css.svg" alt="css logo" title="css" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/js.svg" alt="js logo" title="js" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/react.svg" alt="react logo" title="react" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/next.svg" alt="next logo" title="next" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/firebase.svg" alt="firebase logo" title="firebase" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/sass.svg" alt="sass logo" title="sass" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/bootstrap.svg" alt="bootstrap logo" title="bootstrap" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/github.svg" alt="github logo" title="github" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/illustrator.svg" alt="illustrator logo" title="illustrator" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/photoshop.svg" alt="photoshop logo" title="photoshop" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/corel.svg" alt="corel logo" title="corel" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/figma.svg" alt="figma logo" title="figma" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/slack.svg" alt="slack logo" title="slack" /></div>
                    
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/html.svg" alt="htlm logo" title="htlm" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/css.svg" alt="css logo" title="css" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/js.svg" alt="js logo" title="js" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/react.svg" alt="react logo" title="react" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/next.svg" alt="next logo" title="next" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/firebase.svg" alt="firebase logo" title="firebase" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/sass.svg" alt="sass logo" title="sass" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/bootstrap.svg" alt="bootstrap logo" title="bootstrap" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/github.svg" alt="github logo" title="github" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/illustrator.svg" alt="illustrator logo" title="illustrator" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/photoshop.svg" alt="photoshop logo" title="photoshop" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/corel.svg" alt="corel logo" title="corel" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/figma.svg" alt="figma logo" title="figma" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/slack.svg" alt="slack logo" title="slack" /></div>
                    
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/html.svg" alt="htlm logo" title="htlm" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/css.svg" alt="css logo" title="css" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/js.svg" alt="js logo" title="js" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/react.svg" alt="react logo" title="react" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/next.svg" alt="next logo" title="next" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/firebase.svg" alt="firebase logo" title="firebase" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/sass.svg" alt="sass logo" title="sass" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/bootstrap.svg" alt="bootstrap logo" title="bootstrap" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/github.svg" alt="github logo" title="github" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/illustrator.svg" alt="illustrator logo" title="illustrator" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/photoshop.svg" alt="photoshop logo" title="photoshop" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/corel.svg" alt="corel logo" title="corel" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/figma.svg" alt="figma logo" title="figma" /></div>
                    <div className="Skills__slide"><img className="Skills__svg" src="./svg/slack.svg" alt="slack logo" title="slack" /></div>
                </div>
            </div>
        </>
    )
}

export default Skills