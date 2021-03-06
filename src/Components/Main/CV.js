import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"
import "./CV.css"

const CV = () => {

    const {language} = useContext(LanguageContext)
    
    if(language==="en"){
        return(
        <div className="CV" >
            <h2>My Resume</h2>
            <div className="CV__container">
                <a href="https://mauro-sanchez-matamoros-cv.vercel.app" target="_blank" rel="noopener noreferrer">
                    <img className="CV__inside" src="./images/cv-mauro-sanchez-matamoros.png" alt="cv mauro sanchez matamoros"/>
                </a>
            </div>
            <img className="scrollDown animate__animated animate__fadeInDown" src="./svg/arrowDownBlack.svg" alt="arrow down"/>
            <a href="./images/cv-mauro-sanchez-matamoros.pdf" download={"CV Mauro Sanchez Matamoros"}><img className="CV__svg" src="./svg/download.svg" alt="download"/></a>
            <span>Download</span>
        </div>
    )}

    return(
        <div className="CV" >
            <h2>Mi CV</h2>
            <div className="CV__container">
                <a href="https://mauro-sanchez-matamoros-cv.vercel.app/pages/cvEsp.html" target="_blank" rel="noopener noreferrer">
                    <img className="CV__inside" src="./images/cv-mauro-sanchez-matamoros-es.png" alt="cv mauro sanchez matamoros"/>
                </a>
            </div>
            <img className="scrollDown animate__animated animate__fadeInDown" src="./svg/arrowDownBlack.svg" alt="arrow down"/>
            <a href="./images/cv-mauro-sanchez-matamoros-es.pdf" download={"CV Mauro Sanchez Matamoros"}><img className="CV__svg" src="./svg/download.svg" alt="download"/></a>
            <span>Descargar</span>
        </div>
    )
}

export default CV