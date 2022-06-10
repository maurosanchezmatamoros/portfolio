import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"
import "./Footer.css"

const Footer = () => {

    const {language} = useContext(LanguageContext)

    return(
        <div className="Footer">
            <span className="Footer__name">Mauro Sanchez Matamoros © 2022</span>
            <div><span className="Footer__tool">{language==="en"? "Made with React.js" : language==="es"? "Sitio realizado con React.js" : "LanguageError"}</span><img src="./svg/react.svg" alt="react logo" title="react" /></div>
        </div>
    )
}

export default Footer